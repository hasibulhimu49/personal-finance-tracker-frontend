# 💰 Personal Finance Tracker - Frontend

<!-- Core Technologies -->
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.20.0-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)

<!-- API & Utilities -->
[![Axios](https://img.shields.io/badge/Axios-1.6.0-5A29E4?logo=axios&logoColor=white)](https://axios-http.com/)
[![JWT](https://img.shields.io/badge/JWT-8.0.0-000000?logo=json-web-tokens&logoColor=white)](https://jwt.io/)
[![date-fns](https://img.shields.io/badge/date--fns-3.0.0-770C56?logo=date-fns&logoColor=white)](https://date-fns.org/)
[![Recharts](https://img.shields.io/badge/Recharts-2.10.0-22B5BF?logo=recharts&logoColor=white)](https://recharts.org/)

<!-- Deployment -->
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)
[![Render](https://img.shields.io/badge/Deployed_on-Render-46E3B7?logo=render&logoColor=white)](https://render.com)

<!-- Code Quality -->
[![GitHub stars](https://img.shields.io/github/stars/yourusername/finance-tracker-frontend?style=social)](https://github.com/yourusername/finance-tracker-frontend/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/finance-tracker-frontend?style=social)](https://github.com/yourusername/finance-tracker-frontend/network/members)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/finance-tracker-frontend)](https://github.com/yourusername/finance-tracker-frontend/issues)

<!-- Status -->
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/yourusername/finance-tracker-frontend/graphs/commit-activity)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Ffinance-tracker-frontend.vercel.app)](https://finance-tracker-frontend.vercel.app)

> A modern, responsive web application for tracking personal finances with real-time analytics and beautiful visualizations.

![Finance Tracker Demo](https://via.placeholder.com/800x400?text=Finance+Tracker+Dashboard+Screenshot)

## ✨ Live Demo

🔗 **Live Application:** [https://finance-tracker-frontend.vercel.app](https://finance-tracker-frontend.vercel.app)

📡 **Backend API:** [https://finance-tracker-backend.onrender.com](https://finance-tracker-backend.onrender.com)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [API Integration](#-api-integration)
- [Deployment](#-deployment)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

## 🚀 Features

### 🔐 Authentication
- User registration with role selection (USER/ADMIN)
- JWT-based authentication with secure token storage
- Protected routes and automatic logout on token expiry
- Role-based UI rendering (ADMIN sees edit/delete buttons)

### 💰 Transaction Management
- Create, read, update, and delete transactions
- Categorize transactions (Food, Rent, Salary, etc.)
- Track income and expenses separately
- Real-time balance calculation
- Date-based filtering

### 📊 Analytics & Reports
- Interactive dashboard with summary cards
- Income vs Expense bar charts
- Category breakdown pie charts
- Monthly financial reports
- Export reports as JSON

### 🎨 User Experience
- Dark/Light mode toggle with persistent preference
- Responsive design (mobile, tablet, desktop)
- Real-time toast notifications
- Loading states and error handling
- Clean, modern UI with smooth animations

### 👥 Role-Based Access
| Feature | USER | ADMIN |
|---------|------|-------|
| View transactions | ✅ | ✅ |
| Add transactions | ✅ | ✅ |
| Edit transactions | ❌ | ✅ |
| Delete transactions | ❌ | ✅ |
| View all users | ❌ | ✅ |

## 🛠️ Tech Stack

### Frontend Core
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2.0 | UI Library |
| React Router DOM | 6.20.0 | Navigation & Routing |
| React Context API | - | State Management |

### Styling & UI
| Technology | Version | Purpose |
|------------|---------|---------|
| Tailwind CSS | 3.4.0 | Utility-first CSS Framework |
| Lucide React | 0.344.0 | SVG Icons |
| Recharts | 2.10.0 | Charts & Data Visualization |

### API & Utilities
| Technology | Version | Purpose |
|------------|---------|---------|
| Axios | 1.6.0 | HTTP Client |
| JWT Decode | 4.0.0 | JWT Token Parsing |
| date-fns | 3.0.0 | Date Manipulation |
| React Hot Toast | 2.4.1 | Toast Notifications |

### Build Tools
| Technology | Version | Purpose |
|------------|---------|---------|
| Vite | 5.0.8 | Build Tool & Dev Server |
| PostCSS | 8.4.32 | CSS Processing |
| Autoprefixer | 10.4.16 | CSS Prefixing |
