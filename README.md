# 📝 MERN Task Manager

A fullstack Task Manager application built with the **MERN stack** (MongoDB, Express, React/Next.js, Node.js) using **JWT-based authentication** stored in **HTTP-only cookies**.

---

## 📁 Project Structure

'''
    /mern-task-manager
    ├── backend
    │   ├── controllers
    │   ├── middleware
    │   ├── models
    │   ├── routes
    │   ├── .env
    │   └── server.js
    ├── frontend (Next.js app)
    │   ├── pages
    │   ├── components
    │   ├── styles
    │   └── ...
    ├── package.json (optional root)
'''
---
## 🚀 Features

- User registration & login
- JWT authentication using cookies
- Secure password hashing with bcrypt
- Protected routes using middleware
- MongoDB for persistent storage

---

## 🛠️ Backend Tech Stack

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **JWT** for authentication
- **bcryptjs** for password hashing
- **cookie-parser** for handling cookies
- **dotenv** for environment config
- **nodemon** for dev server auto-reloading

---

## ⚙️ Getting Started (Backend)

### 1. Clone the repo

```bash
git clone https://github.com/your-username/mern-task-manager.git
cd mern-task-manager/backend

## 📬 API Endpoints
| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login user          |
| POST   | `/api/auth/logout`   | Logout user         |


## 🧑‍💻 Author
cyrusnderitu - cyrusnderitu.k@gmail.com
