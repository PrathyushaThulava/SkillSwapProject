# 🚀 SkillSwap – Full Stack Skill Exchange Platform

SkillSwap is a full-stack web application that enables users to exchange skills with others in a peer-to-peer manner. Users can register, log in, post skills they offer or request, browse available skills, and manage their own skill listings securely.

This project demonstrates real-world full-stack development practices including authentication, protected routes, REST APIs, and modern UI design.

---

## 🌐 Live Demo

* **Frontend**: *([Vercel URL here once deployed)](https://skill-swap-project-omega.vercel.app)*
* **Backend API**: *([Render URL here](https://render.com/docs/node-version))*

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* CSS (Responsive, pastel UI)
* Fetch API

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcrypt.js

### Deployment

* Frontend: **Vercel**
* Backend: **Render**
* Database: **MongoDB Atlas**

---

## ✨ Features

### Authentication

* User registration & login
* JWT-based authentication
* Secure password hashing
* Protected routes

### Skill Management

* Create skills (Offer / Request)
* View all posted skills
* View and manage your own skills
* Delete skills with confirmation
* Loading states and user-friendly messages

### UI / UX

* Clean, professional UI
* Separate Login & Register pages
* Responsive design (mobile + desktop)
* Pastel NYC-style background
* Navbar with logout functionality

---

## 📁 Project Structure

```
SkillSwapProject/
│
├── client/                # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Login, Register, Dashboard pages
│   │   ├── services/      # API service files
│   │   ├── App.js
│   │   └── index.js
│
├── server/                # Node.js backend
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

## 🔐 Authentication Flow

1. User registers or logs in
2. Backend generates a JWT token
3. Token stored in browser localStorage
4. Protected routes accessible only when authenticated
5. Logout clears token and redirects to login

---

## ⚙️ Installation & Setup (Local)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/PrathyushaThulava/SkillSwapProject.git
cd SkillSwapProject
```

### 2️⃣ Backend setup

```bash
cd server
npm install
npm start
```

Create a `.env` file in `server/`:

```
PORT=5000
MONGO_URI=mongorestore --uri mongodb+srv://prathyushathulava_db_user:<PASSWORD>@skillswap-cluster.fv8ckfa.mongodb.net 
JWT_SECRET=mysecretkey123
```

---

### 3️⃣ Frontend setup

```bash
cd client
npm install
npm start
```

---

## 🧠 Learning Outcomes

* Implemented JWT authentication and route protection
* Built RESTful APIs using Express and MongoDB
* Designed clean and responsive UI with React
* Managed application state and routing
* Deployed full-stack application to cloud platforms
* Followed professional project structure and best practices

---

## 📌 Future Enhancements

* Search & filter skills
* User profiles
* Messaging between users
* Skill rating system
* Forgot password flow

---

## 👩‍💻 Author

**Prathyusha Thulava**
B.Tech CSE (AI)
Aspiring Full-Stack Developer

---

## 📄 License

This project is for educational and portfolio purposes.

---

