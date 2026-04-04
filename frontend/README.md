# Financial Architect - Premium Finance Dashboard UI

A high-performance, institutional-grade finance dashboard built with **React**, **Vite**, **Tailwind CSS**, and **Recharts**. This project meets the core requirements for the "Finance Dashboard UI" assignment, focusing on clean design, role-based simulation, and data visualization.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd Finance-Dashboard-UI
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
- **Export**: Institutional-grade CSV export functionality.

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
- **Interactive States**: Hover effects, micro-interactions, and premium shadows for a tactile feel.

## 🛠️ Built With

- **React 19**: Modern frontend framework.
- **Tailwind CSS 4**: Next-gen utility-first styling.
- **Recharts**: Responsive data visualizations.
- **Lucide-React**: Consistent and beautiful iconography.
- **Framer Motion**: State-driven UI animations.
- **Context API**: Clean state management for theme, roles, and data.
- **LocalStorage**: Data persistence for roles and transaction state.

## 📁 Architecture

```
src/
├── components/      # Reusable UI elements (Sidebar, Header, StatCard)
├── context/         # AppContext for state (role, transactions, theme)
├── data/            # Mock data and institutional constants
├── pages/           # Main route components (Overview, Transactions, etc.)
└── index.css        # Tailwind 4 design system and custom tokens
```

---
Built with ❤️ by Antigravity (Advanced Agentic AI) for a premium user experience.
