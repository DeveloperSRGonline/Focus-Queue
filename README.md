# ⚡ Queue - Mindful Task Manager

> **Stop juggling. Start finishing.**
> A task manager built for single-tasking, deep work, and mindset reflection.

![Project Status](https://img.shields.io/badge/Status-In%20Development-green?style=flat-square)
![Tech Stack](https://img.shields.io/badge/Stack-MERN-blue?style=flat-square)

---

## 📖 About The Project

**Queue** is not just another to-do list. It is a **Focus Tool** designed to prevent multitasking and burnout. The core philosophy is simple: **You can only do one thing at a time.**

The workflow is designed to force prioritization:
1.  **Queue It:** Add tasks to a backlog.
2.  **Focus:** Drag *one* task to the "Active Stage".
3.  **Track:** A timer runs while you work.
4.  **Reflect:** Upon completion, log your "Mindset" (how you felt) along with the time taken.

### ✨ Key Features
* **🎯 Deep Focus Mode:** A distraction-free "Active Task" card with a dedicated timer, Pause, and Resume functionality.
* **📋 Drag & Drop Queue:** Easily reorder upcoming tasks based on priority (Vertical sorting).
* **🧠 Mindset Logging:** A reflection step after every task to track mental energy, not just output.
* **🌑 Modern Dark UI:** A sleek, developer-focused aesthetic using Glassmorphism, Grainy Gradients, and Neon Accents.
* **📊 History & Analytics:** (Coming Soon) Visualize where your time went and identify burnout patterns.

---

## 🛠️ Tech Stack

### Frontend
* **Framework:** [React.js](https://react.dev/) (via Vite)
* **Styling:** SCSS (Sass) with BEM naming convention & CSS Variables.
* **Icons:** [Lucide React](https://lucide.dev/)
* **State Management:** React Hooks (`useState`, `useEffect`, `useReducer`)
* **Drag & Drop:** `@dnd-kit/core` (Planned)

### Backend (Roadmap)
* **Server:** Node.js & Express
* **Database:** MongoDB (Mongoose) for data persistence.

---

## 📂 Project Structure

The project follows a modular, component-based architecture for scalability.

```text
queue-app/
├── public/              # Static assets (images, favicon)
├── src/
│   ├── components/      # Reusable UI Components
│   │   ├── Navbar/      # Top navigation
│   │   ├── CurrentFocus/# The main active task card (Hero section)
│   │   ├── QueueItem/   # Individual list items for upcoming tasks
│   │   └── Modal/       # Add Task & Mindset Reflection popups
│   ├── styles/          # Global SCSS Styling
│   │   ├── _variables.scss  # Colors, fonts, and design tokens
│   │   ├── _mixins.scss     # Reusable CSS snippets
│   │   └── main.scss        # Global reset and base styles
│   ├── App.jsx          # Main Layout
│   └── main.jsx         # Entry point
├── index.html
└── package.json