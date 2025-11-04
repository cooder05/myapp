# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🧩 NeonBoard — Members-Only Posting App (React + Express + Neon)

**NeonBoard** is a private, full-stack web app where **registered users** can post messages (and later, images) that only **logged-in users** can see.  

It’s built with **React (frontend)**, **Express (backend)**, and **Neon PostgreSQL (database)** — forming a complete authentication + posting system.

---

## 🚀 Project Progress

### ✅ Completed Features
- React app setup using **Vite**
- **Login** and **Signup** pages with clean, centered design
- **React Router** for navigation between pages
- **Express.js backend** connected to **Neon (PostgreSQL)**
- Secure **user authentication** (signup, login) with **hashed passwords**
- **JWT-based session handling** for protected routes
- `/api/user/me` endpoint for fetching profile data
- Layout component with **Navbar** (hidden on login/signup pages)
- Fixed white border & horizontal scrollbar
- Added navigation between Login and Signup pages

---

## 🔒 Current Behavior

- Visitors **must sign up and log in** to access any content.
- Only logged-in users can:
  - View posts  
  - Create posts  
- Unauthorized users are redirected to the login page.

This design makes NeonBoard a **secure, members-only feed** — similar to an internal forum or private social network.

---

## 🧩 Database Structure (Neon)

### Users table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
