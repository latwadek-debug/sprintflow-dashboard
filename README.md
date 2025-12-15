# sprintflow-dashboard
"A vanilla JS Kanban board for agile project management."
# SprintFlow - Enterprise Task Management Dashboard

SprintFlow is a lightweight, responsive Kanban board designed for agile project management. It is built to demonstrate efficient state management patterns without the overhead of heavy frontend frameworks.

## 🚀 Live Demo
[Insert Link Here]

## 🛠 Tech Stack
* **Core:** Vanilla JavaScript (ES6+), OOP Architecture
* **Styling:** CSS3 (Grid, Flexbox, CSS Variables)
* **Icons:** Phosphor Icons via CDN
* **Persistence:** LocalStorage API

## ✨ Key Features
* **Kanban Workflow:** Drag-and-drop style task movement (Todo -> In Progress -> Done).
* **Smart Analytics:** Real-time calculation of task velocity and completion rates.
* **Session Persistence:** Tasks remain saved across browser sessions using local storage serialization.
* **Responsive Design:** optimized for desktop and tablet workflows.

## 🏗 Architecture
The application uses a `TaskManager` class that serves as a centralized store. All UI updates are triggered by state changes within this class, ensuring data consistency across the DOM (Unidirectional Data Flow).
