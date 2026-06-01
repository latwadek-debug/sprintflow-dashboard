<div align="center">

# ⚡ SprintFlow

### Zero-Dependency Agile Task Management Dashboard

A high-performance Kanban board built **entirely from scratch** with Vanilla JavaScript — no React, no frameworks, no libraries. Features a custom OOP state engine, column-based task flow, real-time statistics, and session persistence.

**This project exists to prove one thing: I understand JavaScript deeply, not just the frameworks built on top of it.**

[![JavaScript](https://img.shields.io/badge/Vanilla_JS-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Custom_Props-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-ZERO-2ea44f?style=for-the-badge)](#)

[🔗 Live Demo (StackBlitz)](https://stackblitz.com/edit/stackblitz-starters-czqkc1aw) · [💼 LinkedIn](https://www.linkedin.com/in/kiran-latwade-aimpoint) · [🐙 GitHub](https://github.com/latwadek-debug)

</div>

---

## 🎯 Why This Project Matters

Most junior developers learn React first and never touch vanilla JavaScript at this depth. SprintFlow is a deliberate engineering exercise that demonstrates:

| Concept | How It's Applied |
|---------|-----------------|
| **OOP Architecture** | Full application built with ES6 `class` syntax — constructor, methods, encapsulated state |
| **Custom State Management** | Reactive rendering pattern: state changes → `save()` → `render()` — the same core loop React uses internally |
| **DOM Manipulation** | Direct DOM API usage — `getElementById`, `innerHTML` injection, template literals for component rendering |
| **Data Persistence** | `localStorage` serialization/deserialization simulating a database layer |
| **Event Delegation** | Inline event handlers wired to class methods via global instance reference |
| **Conditional Rendering** | Ternary-based template logic for contextual UI (hide left arrow on first column, etc.) |

> 💡 **For Recruiters:** If a candidate can build this without frameworks, they can learn *any* framework quickly — because they understand what frameworks abstract away.

---

## ✨ Features

### 📋 Kanban Board
- **Three-column workflow** — To Do → In Progress → Done
- **Directional task flow** — Move tasks forward/backward between columns with arrow controls
- **Per-column task counts** — Updated in real-time on every state change
- **Task categorization** — Tag system (Design, Development, Backend) with color-coded badges

### 📊 Dashboard Statistics
- **Total Tasks** — Aggregate count across all columns
- **In Progress** — Active work-in-progress counter
- **Completed** — Done tasks tracker
- All stats **recalculated on every render** — zero stale data

### 💾 Persistence & State
- **localStorage-backed state** — Tasks survive page refreshes and browser restarts
- **Optimistic UI** — State updates trigger immediate re-renders, no loading spinners
- **Default seed data** — Pre-populated with sample tasks for first-time visitors

### 🎨 UI/UX
- **Dark theme** — Professional dark interface with Inter typography
- **Sidebar navigation** — Dashboard-style layout with nav menu and user profile
- **Modal system** — Clean task creation form with overlay backdrop
- **Responsive cards** — Task cards with tag badges, titles, dates, and action buttons

---

## 🏗️ Architecture Deep Dive

The entire application runs through a single `TaskManager` class — a pattern that mirrors how state management libraries like Redux and Zustand work under the hood:

```
┌─────────────────────────────────────────────┐
│                 TaskManager                  │
│                                             │
│  ┌─────────┐    ┌──────┐    ┌────────────┐  │
│  │  State   │──▶│ save │──▶│   render    │  │
│  │ (tasks[])│    │  ()  │    │    ()      │  │
│  └─────────┘    └──────┘    └────────────┘  │
│       ▲              │             │         │
│       │              ▼             ▼         │
│       │        localStorage    DOM Update    │
│       │                                      │
│  ┌─────────────────────────────────┐        │
│  │  User Actions                    │        │
│  │  addTask() · deleteTask()        │        │
│  │  moveTask() · openModal()        │        │
│  └─────────────────────────────────┘        │
└─────────────────────────────────────────────┘
```

### Key Design Decisions

1. **Class-based over functional** — Chose ES6 classes to encapsulate all task logic, state, and rendering into a single cohesive unit with clear method boundaries.

2. **Full re-render on state change** — Instead of surgical DOM patching (like React's virtual DOM diffing), the `render()` method clears and rebuilds the board. For a board of this size, this is actually *faster* than maintaining a virtual DOM — proving that frameworks add overhead small apps don't need.

3. **Template literals as components** — Each task card is a template literal string with embedded logic, functioning like a lightweight JSX without the compilation step.

4. **Global instance pattern** — `const app = new TaskManager()` creates a single source of truth, with DOM event handlers referencing `app.methodName()` directly — a minimal dependency injection pattern.

---

## 🛠️ Tech Stack

| Layer | Technology | Why This Choice |
|-------|-----------|-----------------|
| **Structure** | HTML5 (semantic) | Clean, accessible markup without div soup |
| **Styling** | CSS3 (Custom Properties, Flexbox, Grid) | Full design system without Tailwind or Bootstrap |
| **Logic** | Vanilla JavaScript (ES6+) | Proves fundamental mastery — classes, template literals, array methods |
| **Storage** | localStorage API | Browser-native persistence, zero backend required |
| **Icons** | Phosphor Icons (CDN) | Lightweight, consistent icon system |
| **Typography** | Google Fonts — Inter | Clean, professional sans-serif |

---

## 🚀 Run Locally

Zero build step. Zero `npm install`. Just open it.

```bash
# Clone the repository
git clone https://github.com/latwadek-debug/sprintflow-dashboard.git

cd sprintflow-dashboard

# Option 1: Just open it
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux

# Option 2: Local server (recommended)
npx serve .
```

---

## 📁 Project Structure

```
sprintflow-dashboard/
├── index.html      # Dashboard layout — sidebar, stats grid, Kanban columns, modal
├── script.js       # TaskManager class — state, CRUD operations, rendering engine
├── styles.css      # Dark theme design system — cards, columns, modal, responsive
└── README.md
```

**Total project size: ~13KB** (excluding README) — compare that to a `create-react-app` starter at 200MB+ with `node_modules`.

---

## 🔮 Potential Enhancements

If extended further, this architecture supports:

- [ ] Drag-and-drop via HTML5 Drag API (no libraries needed)
- [ ] Task priority levels and sorting
- [ ] Due date tracking with overdue highlighting
- [ ] Search and filter functionality
- [ ] Multi-board support
- [ ] Export/import board data as JSON

---

## 👤 Author

**Kiran Latwade** — Frontend-Focused Full Stack Developer

- 🌐 [Portfolio](https://aimpoint-portfolio.netlify.app)
- 💼 [LinkedIn](https://www.linkedin.com/in/kiran-latwade-aimpoint)
- 📧 [latwadek@gmail.com](mailto:latwadek@gmail.com)
- 🐙 [GitHub](https://github.com/latwadek-debug)

---

<div align="center">
  <sub>Built from scratch with zero dependencies by <b>Kiran Latwade</b> — because understanding the fundamentals matters.</sub>
</div>
