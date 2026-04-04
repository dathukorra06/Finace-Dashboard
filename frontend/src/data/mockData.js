export const USER_ROLES = {
  ADMIN: 'admin',
  VIEWER: 'viewer',
};

export const MOCK_USER = {
  name: 'Alex Sterling',
  role: USER_ROLES.ADMIN,
  email: 'alex.sterling@architect.fi',
  avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&auto=format&fit=crop',
  location: 'London, UK',
  title: 'Chief Architect'
};

export const MOCK_TRANSACTIONS = [
  {
    id: '1',
    date: 'Oct 24, 2023',
    time: '14:20 GMT',
    entity: 'Northwest Infrastructure Group',
    category: 'INFRASTRUCTURE',
    type: 'Expense',
    amount: -12450.00,
    status: 'EXECUTED',
    icon: 'cloud'
  },
  {
    id: '2',
    date: 'Oct 23, 2023',
    time: '09:15 GMT',
    entity: 'Advisory Retention - Q4',
    category: 'ADVISORY',
    type: 'Income',
    amount: 85000.00,
    status: 'EXECUTED',
    icon: 'briefcase'
  },
  {
    id: '3',
    date: 'Oct 22, 2023',
    time: '16:45 GMT',
    entity: 'Internal Treasury Transfer',
    category: 'TREASURY',
    type: 'Transfer',
    amount: 250000.00,
    status: 'PROCESSING',
    icon: 'landmark'
  },
  {
    id: '4',
    date: 'Oct 21, 2023',
    time: '11:00 GMT',
    entity: 'SaaS Infrastructure - Cloud Ops',
    category: 'OPERATIONAL',
    type: 'Expense',
    amount: -4210.50,
    status: 'EXECUTED',
    icon: 'server'
  },
  {
    id: '5',
    date: 'Oct 20, 2023',
    time: '10:30 GMT',
    entity: 'Apple Store - Hardware',
    category: 'CAPITAL ASSETS',
    type: 'Expense',
    amount: -3499.00,
    status: 'PROCESSING',
    icon: 'shopping-bag'
  },
  {
    id: '6',
    date: 'Oct 19, 2023',
    time: '08:45 GMT',
    entity: 'Goldman Sachs Dividend',
    category: 'INVESTMENT YIELD',
    type: 'Income',
    amount: 4500.00,
    status: 'EXECUTED',
    icon: 'trending-up'
  }
];

export const MOCK_BALANCE_TREND = [
  { day: 'Nov 01', balance: 380000 },
  { day: 'Nov 04', balance: 395000 },
  { day: 'Nov 08', balance: 390000 },
  { day: 'Nov 12', balance: 410000 },
  { day: 'Nov 15', balance: 405000 },
  { day: 'Nov 19', balance: 420000 },
  { day: 'Nov 23', balance: 415000 },
  { day: 'Nov 26', balance: 425000 },
  { day: 'Nov 30', balance: 428500 },
];

export const MOCK_ALLOCATION = [
  { name: 'Housing', value: 45, color: '#1e40af' },
  { name: 'Operations', value: 30, color: '#065f46' },
  { name: 'Leisure', value: 25, color: '#475569' },
];

export const MOCK_INSIGHTS = [
  {
    type: 'efficiency',
    title: 'Efficiency Gain',
    description: 'Housing costs decreased by 15.2% year-over-year. Actionable: Redirect the monthly $450 surplus to the High-Yield Bond portfolio.',
    color: 'emerald'
  },
  {
    type: 'forecast',
    title: 'Surplus Forecast',
    description: 'Projected year-end liquid surplus increased to $12,400. Strategy: Allocate 40% to tactical emergency reserves.',
    color: 'blue'
  },
  {
    type: 'peak',
    title: 'Category Peak',
    description: 'Operations reached $4,120 this month. Analysis reveals $820 in duplicate software licensing. Audit suggested by end of week.',
    color: 'indigo'
  },
  {
    type: 'action',
    title: 'Action Required',
    description: 'Leisure spending is 8.4% above threshold. Impact: Will reduce Q4 investment velocity by 1.2% if uncorrected.',
    color: 'rose'
  }
];
