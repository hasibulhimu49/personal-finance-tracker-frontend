# Personal Finance Tracker Frontend

A modern React application for tracking personal finances.

## Features

- User authentication (login/register)
- Transaction management (add, edit, delete, list)
- Dashboard with financial summaries and charts
- Monthly reports with visualizations
- Responsive design with dark/light mode support

## Tech Stack

- React 19 with TypeScript
- Vite
- Tailwind CSS
- Shadcn/ui
- Zustand for state management
- Axios for API calls
- React Hook Form with Zod validation
- Recharts for charts
- Sonner for notifications
- React Router DOM for routing

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open http://localhost:5173

## API

The frontend connects to the backend API at https://personal-finance-tracker-backend-brs4.onrender.com

## Build

`npm run build`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
