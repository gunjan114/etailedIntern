# etailedIntern
# 🧩 Backend API for User Authentication & Dashboard Preferences

This is a Node.js backend project developed as part of an internship assignment. It includes user authentication, profile management, preferences handling, and dashboard summary APIs.

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT for authentication
- bcrypt for password hashing

---

## 📁 Project Structure

- controllers/
- models/
- routes/
- middleware/
- app.js

---

## 🔐 Authentication & User Routes

| Method | Route            | Description                     | Auth Required |
|--------|------------------|----------------------------------|---------------|
| POST   | `/register`      | Register a new user              | ❌            |
| POST   | `/login`         | Log in a user                    | ❌            |
| POST   | `/logout`        | Log out the current user         | ✅            |
| GET    | `/profile`       | Get current user's profile (Protected Route)       | ✅            |
| PATCH  | `/profile`       | Update current user's profile    | ✅            |

---

## 🎛️ Preferences Routes

| Method | Route    | Description                  | Auth Required |
|--------|----------|------------------------------|---------------|
| POST   | `/set`   | Save user preferences         | ✅            |
| GET    | `/get`   | Get saved user preferences    | ✅            |

## 📊 Dashboard Summary Routes

| Method | Route        | Description                   | Auth Required |
|--------|--------------|-------------------------------|---------------|
| POST   | `/setData`   | Store dashboard summary data  | ✅            |
| GET    | `/getData`   | Fetch dashboard summary data  | ✅            |

---
## 🔐 JWT Middleware

The `isLoggedIn` middleware is used to protect routes that require authentication. It verifies the JWT token provided in the request header or cookie.

---

![Screenshot](profile.png)
