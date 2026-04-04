import React from 'react';
import { 
  TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, 
  Wallet, Landmark, ReceiptText, ChevronRight, MoreHorizontal,
  ChevronUp, ChevronDown
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend, AreaChart, Area
} from 'recharts';
import { motion } from 'framer-motion';
import { MOCK_BALANCE_TREND, MOCK_ALLOCATION, MOCK_TRANSACTIONS } from '../data/mockData';
import { useAppContext } from '../context/AppContext';

const StatCard = ({ title, value, change, color, icon: Icon }) => {
  const colorStyles = {
    blue: {
      accent: 'var(--color-brand)',
      bg: 'rgba(37, 99, 235, 0.1)',
      text: 'text-blue-600',
    },
    emerald: {
      accent: '#10b981',
      bg: 'rgba(16, 185, 129, 0.1)',
      text: 'text-emerald-600',
    },
    rose: {
      accent: '#f43f5e',
      bg: 'rgba(244, 63, 94, 0.1)',
      text: 'text-rose-600',
    }
  };

  const style = colorStyles[color] || colorStyles.blue;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="card-premium p-7 flex flex-col gap-5 relative overflow-hidden group border-slate-200/60 dark:border-slate-800/60"
    >
      <div className="flex justify-between items-start z-10">
        <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm group-hover:scale-110 group-hover:border-slate-200 dark:group-hover:border-brand/30 transition-all duration-500">
          <Icon className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-brand transition-colors" />
        </div>
        <div className={`flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1.5 rounded-full uppercase tracking-wider ${change > 0 ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' : 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400'}`}>
          {change > 0 ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          {Math.abs(change)}%
        </div>
      </div>
      <div className="space-y-1.5 z-10">
        <p className="text-[11px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-[0.15em] mb-1">{title}</p>
        <h3 className="text-3xl font-display font-bold text-slate-800 dark:text-white tracking-tight">{value}</h3>
      </div>
      
      {/* Dynamic Background Element */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-1000" style={{ backgroundColor: style.accent }}></div>
    </motion.div>
  );
};

const Overview = () => {
  const { role, USER_ROLES } = useAppContext();

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Architecture Overview
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 dark:text-slate-500 font-medium text-lg"
          >
            Institutional monitoring for <span className="text-brand font-bold">Q4 2023 Fiscal Cycle</span>
          </motion.p>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-3 bg-white dark:bg-slate-900 px-4 py-2 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm"
        >
          <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">Real-time Synchronization Active</span>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard title="Total Liquid Capital" value="$428,500.00" change={12.5} color="blue" icon={Wallet} />
        <StatCard title="Monthly Inflow" value="$32,120.40" change={4.2} color="emerald" icon={TrendingUp} />
        <StatCard title="Monthly Outflow" value="$14,205.15" change={-4.0} color="rose" icon={TrendingDown} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 card-premium p-8 lg:p-10 min-h-[500px] flex flex-col bg-white/50 backdrop-blur-sm border-slate-200/60 dark:border-slate-800/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Balance Analytics</h3>
              <p className="text-sm text-slate-400 dark:text-slate-500 font-medium mt-1">Institutional portfolio yield performance metric</p>
            </div>
            <div className="flex bg-slate-100 dark:bg-slate-950 p-1.5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 self-start sm:self-center">
               <button className="px-5 py-2 text-xs font-bold text-brand bg-white dark:bg-slate-800 rounded-xl shadow-premium border border-slate-200/50 dark:border-slate-700/50 transition-all">30D</button>
               <button className="px-5 py-2 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">90D</button>
               <button className="px-5 py-2 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">1Y</button>
            </div>
          </div>
          <div className="flex-1 -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_BALANCE_TREND}>
                <defs>
                  <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-brand)" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="var(--color-brand)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="rgba(203, 213, 225, 0.2)" strokeDasharray="5 5" />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#64748b', fontWeight: 700 }}
                  dy={15}
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{ stroke: 'var(--color-brand)', strokeWidth: 1.5, strokeDasharray: '4 4' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-2xl shadow-premium">
                          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2">{payload[0].payload.day}</p>
                          <p className="text-xl font-bold text-brand font-display tracking-tight">${payload[0].value.toLocaleString()}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="balance" 
                  stroke="var(--color-brand)" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorBalance)" 
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card-premium p-8 lg:p-10 min-h-[500px] flex flex-col bg-white/50 backdrop-blur-sm border-slate-200/60 dark:border-slate-800/60">
          <div className="mb-8">
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Allocation</h3>
            <p className="text-sm text-slate-400 dark:text-slate-500 font-medium mt-1">Capital class distribution strategy</p>
          </div>
          <div className="flex-1 relative flex items-center justify-center -mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={MOCK_ALLOCATION}
                  cx="50%"
                  cy="50%"
                  innerRadius={85}
                  outerRadius={115}
                  paddingAngle={8}
                  dataKey="value"
                  animationDuration={1500}
                >
                  {MOCK_ALLOCATION.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <p className="text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">$14k</p>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-[0.2em] mt-1">SPENT</p>
            </div>
          </div>
          <div className="space-y-5 pt-8 border-t border-slate-100 dark:border-slate-900">
            {MOCK_ALLOCATION.map((item) => (
              <div key={item.name} className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-3.5 h-3.5 rounded-full shadow-sm" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors uppercase tracking-widest text-[11px]">{item.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-24 h-2 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ backgroundColor: item.color, width: `${item.value}%` }}></div>
                  </div>
                  <span className="text-sm font-bold text-slate-900 dark:text-white tabular-nums">{item.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card-premium h-auto overflow-hidden bg-white/50 backdrop-blur-sm border-slate-200/60 dark:border-slate-800/60">
        <div className="p-8 lg:p-10 border-b border-slate-100 dark:border-slate-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
           <div className="flex items-center gap-4">
             <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl">
               <ReceiptText className="w-6 h-6 text-slate-500" />
             </div>
             <div>
               <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Recent Activity</h3>
               <p className="text-sm text-slate-400 dark:text-slate-500 font-medium mt-1">Institutional real-time ledger monitoring active</p>
             </div>
           </div>
           <button className="text-[11px] font-bold text-brand uppercase tracking-[0.2em] flex items-center gap-2 hover:gap-3 transition-all self-start sm:self-center bg-brand/5 px-6 py-3 rounded-2xl border border-brand/10 hover:bg-brand hover:text-white transition-all duration-300">
             Explore Registry <ChevronRight className="w-4 h-4" />
           </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-950/50 border-b border-slate-100 dark:border-slate-800/50">
                <th className="px-10 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Counterparty</th>
                <th className="px-10 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Categorization</th>
                <th className="px-10 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Compliance Status</th>
                <th className="px-10 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] text-right">Quantum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-900">
              {MOCK_TRANSACTIONS.slice(0, 4).map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-900/30 transition-colors group">
                  <td className="px-10 py-7">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-brand group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-sm">
                        <Wallet className="w-6 h-6" />
                      </div>
                      <span className="text-base font-bold text-slate-700 dark:text-slate-200 tracking-tight group-hover:text-brand transition-colors duration-300">{tx.entity}</span>
                    </div>
                  </td>
                  <td className="px-10 py-7">
                    <span className="px-4 py-1.5 bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest border border-slate-200/50 dark:border-slate-700/50 rounded-lg group-hover:border-brand/30 transition-all duration-300">
                      {tx.category}
                    </span>
                  </td>
                  <td className="px-10 py-7">
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-3 py-1.5 rounded-xl uppercase tracking-wider ${
                      tx.status === 'EXECUTED' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' : 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${tx.status === 'EXECUTED' ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                      {tx.status}
                    </span>
                  </td>
                  <td className={`px-10 py-7 text-base font-bold text-right font-display ${tx.amount < 0 ? 'text-slate-900 dark:text-white' : 'text-emerald-500 dark:text-emerald-400'}`}>
                    {tx.amount < 0 ? `- $${Math.abs(tx.amount).toLocaleString(undefined, {minimumFractionDigits: 2})}` : `+ $${tx.amount.toLocaleString(undefined, {minimumFractionDigits: 2})}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
