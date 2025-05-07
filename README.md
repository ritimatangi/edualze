# EduAlze — MERN Stack Learning Management System (LMS)

EduAlze is a full-stack **online educational platform** designed using the MERN stack.  
It enables students to **register, log in, explore courses, add courses to cart, authenticate payments, and manage their learning progress through an interactive student dashboard**.

---

## 🌟 Key Features

✅ **User Authentication**  
- Secure registration and login using JWT (JSON Web Tokens)  
- Passwords securely hashed and stored  

✅ **Course Management**  
- Browse available courses  
- Add courses to cart  
- Checkout and payment process (with authentication)  

✅ **Student Dashboard**  
- View enrolled courses  
- Track learning progress and completion  
- Integrated chatbot (Rasa) for interactive help

✅ **Admin Features (optional)**  
- Add or manage courses  
- Manage student users

---

## 🏗️ Technical Architecture

This project is built on the **MERN stack**:  
- **MongoDB** → Database (stores user data, course data, enrollments)  
- **Express.js** → Backend framework (handles routes, API endpoints)  
- **React.js** → Frontend (interactive user interface)  
- **Node.js** → Server runtime (runs backend logic, connects Express to MongoDB)

---

## ⚙️ How to Run Locally

### 🖥️ Backend (Server)
1. Navigate to the backend folder:
   ```bash
   cd server
2.Install backend dependencies:
     npm install
3. Navigate to the frontend folder:

   cd client
4. Install frontend dependencies:

npm install

---

## 🔍 Project Components Explained

| Layer         | Description                                                            |
|--------------|------------------------------------------------------------------------|
| **Frontend** | Built with React; uses React Router for navigation; styled with CSS/Tailwind; interacts with backend via Axios or Fetch |
| **Backend**  | Node.js server using Express; handles REST API routes; connects to MongoDB; uses JWT for authentication |
| **Database** | MongoDB stores user accounts, course details, enrollments, payment status |



---

## 🚀 Deployment 
- **Frontend** → Vercel
- **Backend** → Render
- **Database** → MongoDB Atlas (cloud-hosted)



