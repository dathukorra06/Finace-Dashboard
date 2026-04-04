# Financial Architect - Premium Finance Dashboard UI

🟢 **Live Production Application (Vercel):** [https://frontend-nine-sigma-80.vercel.app](https://frontend-nine-sigma-80.vercel.app)

A high-performance, institutional-grade finance dashboard built with **React**, **Vite**, **Tailwind CSS**, and **Recharts**. This project meets the core requirements for the "Finance Dashboard UI" assignment, focusing on clean design, role-based simulation, and data visualization.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository and navigate to the frontend directory:
   ```bash
   git clone https://github.com/dathukorra06/Finace-Dashboard.git
   cd Finace-Dashboard/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## 🌍 Deployment Pipelines

This repository is pre-configured with two continuous deployment workflows:

### 1. Vercel (Current Host)
This application is natively deployed to Vercel. 
- A `vercel.json` file handles Single Page Application (SPA) routing so React Router URLs refresh natively.
- **Vercel Settings:** The project is configured with the "Root Directory" set to `frontend`.

### 2. GitHub Pages
A fully automated GitHub Actions workflow is available in `.github/workflows/deploy.yml`. 
- Automatically injects `--base=/Finace-Dashboard/` for public assets.
- Automatically handles SPA routing with built-in 404 proxy hacks for `react-router-dom`.

---

## ✨ Core Features

### 1. Dashboard Overview
- **Summary Cards**: Quick view of Total Balance, Monthly Inflow, and Monthly Outflow with trend indicators.
- **Balance Analytics**: Bar chart visualizing liquid capital trend over 30 days.
- **Allocation Chart**: Donut chart showing capital distribution across asset classes (Housing, Operations, Leisure).
- **Recent Activity**: Real-time ticker of the latest ledger entries.

### 2. Ledger Registry (Transactions)
- **Advanced Filtering**: Categorize and type-filter your transactions.
- **Search**: Fast, real-time entity and reference searching.
- **Pagination**: Efficiently browse thousands of records.

### 3. Role-Based simulation (RBAC)
- **Toggle Role**: Switch between **Admin** and **Viewer** modes easily from the Header or Settings page.
- **Dynamic UI**:
  - **Admin**: Full permissions (Add, Edit, Delete transactions).
  - **Viewer**: Read-only access (restricted from taking actions).
- **Persistent Role**: Selection is saved to `localStorage`.

### 4. Insights Section
- **Performance KPIs**: Spending vs. Last Month, Highest Spending Category, and Income Trends.
- **Key Insight Cards**: AI-driven observations like "Efficiency Gains" and "Surplus Forecasts."
- **Structural Drill-down**: Detailed health score of institutional asset classes.

## 🎨 Premium UI/UX Design

- **Modern Typography**: Using *Inter* for body and *Outfit* for headers.
- **Glassmorphism**: Elegant blur effects and subtle borders on headers and cards.
- **Animations**: Silky smooth transitions using `framer-motion`.
- **Responsive Layout**: Designed to work on desktops, tablets, and phones.
- **Dark Mode Support**: Built with future-proofing for dark mode toggle (CSS tokens ready).

---
Built with ❤️ by Antigravity (Advanced Agentic AI) for a premium user experience.
