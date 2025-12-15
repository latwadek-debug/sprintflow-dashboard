class TaskManager {
  constructor() {
    // Initialize State from LocalStorage or use defaults
    this.tasks = JSON.parse(localStorage.getItem('sprintflow-tasks')) || [
      { id: 1, title: 'Design System Update', tag: 'Design', status: 'todo', date: 'Oct 24' },
      { id: 2, title: 'API Integration', tag: 'Backend', status: 'progress', date: 'Oct 25' }
    ];
    // Initial Render
    this.render();
  }

  // --- CORE LOGIC ---
  save() {
    // Persist data to browser storage (Simulating a database)
    localStorage.setItem('sprintflow-tasks', JSON.stringify(this.tasks));
    this.render();
  }

  addTask(e) {
    e.preventDefault();
    const title = document.getElementById('taskTitle').value;
    const tag = document.getElementById('taskTag').value;
    
    const newTask = {
      id: Date.now(),
      title: title,
      tag: tag,
      status: 'todo', // Default to Todo column
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    };
    
    this.tasks.push(newTask);
    this.save();
    this.closeModal();
    e.target.reset();
  }

  deleteTask(id) {
    if(confirm('Delete this task?')) {
      this.tasks = this.tasks.filter(t => t.id !== id);
      this.save();
    }
  }

  moveTask(id, direction) {
    const task = this.tasks.find(t => t.id === id);
    const stages = ['todo', 'progress', 'done'];
    const currentIndex = stages.indexOf(task.status);
    let newIndex = currentIndex + direction;
    
    // Ensure we don't go out of bounds
    if (newIndex >= 0 && newIndex < stages.length) {
      task.status = stages[newIndex];
      this.save();
    }
  }

  // --- UI RENDERING ---
  render() {
    // 1. Clear Columns
    document.getElementById('list-todo').innerHTML = '';
    document.getElementById('list-progress').innerHTML = '';
    document.getElementById('list-done').innerHTML = '';
    
    // 2. Statistics Counters
    const stats = { todo: 0, progress: 0, done: 0 };
    
    // 3. Loop through tasks and create HTML for each
    this.tasks.forEach(task => {
      stats[task.status]++; // Increment stats
      
      const cardHTML = `
        <div class="task-card">
          <span class="task-tag tag-${task.tag}">${task.tag}</span>
          <h4 class="task-title">${task.title}</h4>
          <div class="task-footer">
            <span class="task-date">${task.date}</span>
            <div class="task-actions">
              ${
                task.status !== 'todo' ? 
                `<button onclick="app.moveTask(${task.id}, -1)"><i class="ph-bold ph-caret-left"></i></button>` : ''
              }
              <button onclick="app.deleteTask(${task.id})"><i class="ph-bold ph-trash"></i></button>
              ${
                task.status !== 'done' ? 
                `<button onclick="app.moveTask(${task.id}, 1)"><i class="ph-bold ph-caret-right"></i></button>` : ''
              }
            </div>
          </div>
        </div>
      `;
      
      // Inject into correct column
      document.getElementById(`list-${task.status}`).innerHTML += cardHTML;
    });
    
    // 4. Update Stats Numbers
    document.getElementById('total-tasks').innerText = this.tasks.length;
    document.getElementById('pending-tasks').innerText = stats.progress;
    document.getElementById('completed-tasks').innerText = stats.done;
    
    // Update column headers counts
    document.getElementById('count-todo').innerText = stats.todo;
    document.getElementById('count-progress').innerText = stats.progress;
    document.getElementById('count-done').innerText = stats.done;
  }

  // --- MODAL CONTROLS ---
  openModal() {
    document.getElementById('taskModal').style.display = 'flex';
  }

  closeModal() {
    document.getElementById('taskModal').style.display = 'none';
  }
}

// Initialize App
const app = new TaskManager();
