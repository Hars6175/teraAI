# Tera - Developer Guide

Welcome to Tera! This guide will help you understand the two primary ways to run and develop the project: using the local development server (`npm run dev`) and using Docker.

## 🚀 Setting Up the Project

First, ensure you have cloned the repository and installed dependencies for the UI:

```bash
git clone https://github.com/Itsmedexexplorer/tera.git
cd tera/ui
npm install
```

---

## 💻 Method 1: Local Development (`npm run dev`)

To actively develop the UI and see your changes instantly, you should use the Next.js development server.

### How to run it:
1. Navigate to the `ui` directory: `cd ui`
2. Start the dev server: `npm run dev`
3. Open your browser and go to `http://localhost:3000`

### Why use `npm run dev`?
- **Hot Reloading:** Any changes you make to the React components or CSS will instantly reflect in the browser without needing a full rebuild.
- **Fast Feedback Loop:** Perfect for writing code, designing components, and debugging frontend issues.
- **Note:** This *only* runs the frontend UI. If the UI needs to talk to the API, you must ensure the backend services (like PostgreSQL, Redis, and the Python API) are running.

---

## 🐳 Method 2: Production & Full-Stack Deployment (Docker)

Docker Compose is used to spin up the *entire* stack (Database, Cache, API, and the UI) in an isolated, production-like environment.

### How to run it:
1. Navigate to the root directory of the project: `cd ..` (if you are in the `ui` folder).
2. Start the whole stack using Docker Compose:
   ```bash
   docker compose up -d --build
   ```
3. Open your browser and go to `http://localhost:3010`

### Why use Docker?
- **Full Environment:** It starts the backend API, the Postgres database, Redis, and the MinIO storage all at once alongside the UI.
- **Production Build:** The UI image built by Docker runs an optimized, standalone Node.js production build (`npm run build`). This is why it runs on a different port (`3010`) to avoid conflicting with your dev server.
- **Consistency:** Ensures the application runs exactly the same way on your machine as it would on a cloud server or a teammate's computer.
- **Note:** If you make changes to the code while running Docker, they *won't* automatically show up. You would need to rebuild the Docker image using `docker compose build ui` or restart the stack.

### Summary
- Use **`npm run dev` (Port 3000)** when you are writing code for the frontend and want live updates.
- Use **Docker (Port 3010)** when you want to test the full end-to-end application, run the backend services, or deploy the project to a server.
