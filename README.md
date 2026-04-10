# Personal Finance Tracker (Frontend)

A modern, responsive web application for tracking personal finances, built with React and integrated with a secure Spring Boot backend API.

---

## 🌐 Live Demo

👉 https://personal-finance-tracker-frontend-ivory.vercel.app/welcome

---

## 🔗 Backend API

- 🌐 Base URL: https://personal-finance-tracker-backend-brs4.onrender.com  
- 📦 Backend Repository: https://github.com/hasibulhimu49/personal-finance-tracker-backend  

---

## 📌 Overview

This frontend application provides an intuitive and user-friendly interface for managing personal finances.  
Users can track income, expenses, and analyze financial data through interactive dashboards and reports.

---

##  Features

- 🔐 User Authentication (Login/Register)  
- 💸 Add, Edit, Delete Transactions  
- 📊 Dashboard with Financial Summary  
- 📈 Charts & Data Visualization  
- 🗂️ Category-based Expense Tracking  
- 📅 Monthly Financial Reports  
- 🌙 Dark/Light Mode Support  
- 📱 Fully Responsive Design  

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript  
- **Build Tool:** Vite  
- **Styling:** Tailwind CSS, Shadcn/UI  
- **State Management:** Zustand  
- **API Calls:** Axios  
- **Forms & Validation:** React Hook Form + Zod  
- **Charts:** Recharts  
- **Routing:** React Router DOM  
- **Notifications:** Sonner  

---

## 🔄 API Integration

The frontend communicates with the backend using REST APIs:

- Sends login credentials → receives JWT token  
- Stores token securely (localStorage/sessionStorage)  
- Uses token for authenticated API requests  
- Fetches and displays transaction and report data  

---

## 🧠 Application Flow

User → Login/Register → Receive JWT → Access Dashboard → Manage Transactions → View Reports  

---

## 📂 Project Structure

```bash
src/
├── components/   # Reusable UI components
├── pages/        # Application pages
├── hooks/        # Custom React hooks
├── services/     # API calls and business logic
├── store/        # Global state (Zustand)
├── types/        # TypeScript types
└── utils/        # Helper functions
```


---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js (v18+ recommended)

### Steps

1. Clone the repository:

```bash
git clone https://github.com/hasibulhimu49/finance-tracker-frontend.git


2. Navigate to the project folder:

```bash
cd finance-tracker-frontend
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

---

## 🔐 Authentication

- JWT-based authentication  
- Token stored on client-side  
- Protected routes using authentication guard  

---

## 🚀 Deployment

- **Frontend:** Vercel  
- **Backend API:** Render  
- **Database:** Neon (PostgreSQL)  

---

## 🚀 Future Improvements

- 📊 Advanced analytics dashboard  
- 🔍 Transaction filtering & search  
- 📄 Export reports (PDF/Excel)  
- 📱 Progressive Web App (PWA)  

---

## 👨‍💻 Author

**Mohammad Hasibul Hasan**  
Frontend & Backend Developer  

- 🔗 LinkedIn: https://www.linkedin.com/in/hasibulhimu49/  
- 💻 GitHub: https://github.com/hasibulhimu49  
- 🌐 Portfolio: https://hasibul-dev-portfolio.vercel.app/  

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
