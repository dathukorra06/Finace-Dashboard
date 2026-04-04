import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, ReceiptText, BarChart3, Settings as SettingsIcon, PlusCircle, Shield, ShieldOff, LogOut, X, ChevronRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ isOpen, onClose }) => {
  const { role, USER_ROLES, user, addTransaction } = useAppContext();
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);

  const handleQuickAdd = () => {
    if (role !== USER_ROLES.ADMIN) {
      alert('You must be an Admin to perform this action.');
      return;
    }
    const newTx = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }) + ' GMT',
      entity: 'Quick Sidebar Entry',
      category: 'GENERAL',
      type: 'Expense',
      amount: -150.00,
      status: 'EXECUTED',
      icon: 'plus-circle'
    };
    addTransaction(newTx);
    alert('Entry added to ledger!');
  };

  const navItems = [
    { name: 'Overview', path: '/', icon: LayoutDashboard },
    { name: 'Transactions', path: '/transactions', icon: ReceiptText },
    { name: 'Insights', path: '/insights', icon: BarChart3 },
    { name: 'Settings', path: '/settings', icon: SettingsIcon },
  ];

  return (
    <>
      {/* Sidebar - Desktop logic (ml-64 in parent) + Mobile logic (fixed transition) */}
      <aside className={`w-64 h-screen fixed left-0 top-0 bg-white dark:bg-slate-950 border-r border-slate-100 dark:border-slate-800/60 flex flex-col z-50 shadow-premium transition-all duration-500 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className="p-8 pb-6 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-brand flex items-center gap-2 font-display uppercase tracking-tight">
              FINANCE <span className="opacity-40">DASHBOARD</span>
            </h1>
            <div className="flex items-center gap-2 mt-1.5 overflow-hidden">
              <div className="h-[1px] w-4 bg-brand/30"></div>
              <p className="text-[9px] text-slate-400 dark:text-slate-500 font-bold tracking-[0.2em] uppercase whitespace-nowrap">Institutional Edge</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 lg:hidden text-slate-400 hover:text-brand transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 mt-10 px-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group relative ${isActive
                  ? 'bg-brand/5 text-brand shadow-[0_0_15px_rgba(37,99,235,0.05)]'
                  : 'text-slate-500 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:text-slate-900 dark:hover:text-slate-200'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon className={`w-5 h-5 transition-all duration-500 ${isActive ? 'text-brand scale-110' : 'text-slate-400 group-hover:text-brand'}`} />
                  <span className={`font-bold text-[13px] tracking-wide uppercase transition-colors duration-300 ${isActive ? 'text-brand' : 'opacity-80'}`}>{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute left-0 w-1.5 h-6 bg-brand rounded-r-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"
                    />
                  )}
                  {isActive && (
                    <div className="ml-auto opacity-40">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="px-6 pb-10 space-y-8">
          {role === USER_ROLES.ADMIN && (
            <div className="p-5 bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 rounded-2xl">
              <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3 text-center">Quick Actions</p>
              <motion.button
                onClick={handleQuickAdd}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 bg-brand text-white py-3.5 rounded-xl shadow-premium shadow-brand/20 font-bold text-xs tracking-tight transition-all duration-300 hover:bg-brand-dark"
              >
                <PlusCircle className="w-4.5 h-4.5" />
                <span>New Transaction</span>
              </motion.button>
            </div>
          )}

          <div className="pt-8 border-t border-slate-100 dark:border-slate-800 relative">
            <div
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-4 cursor-pointer group p-2 hover:bg-slate-50 dark:hover:bg-slate-900/50 rounded-2xl transition-all duration-300 border border-transparent hover:border-slate-100 dark:hover:border-slate-800"
            >
              <div className="relative group overflow-hidden">
                <div className="w-12 h-12 rounded-2xl border-2 border-white dark:border-slate-800 overflow-hidden shadow-premium group-hover:scale-105 transition-all duration-500 group-hover:border-brand/30">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className={`absolute -top-1.5 -right-1.5 w-4 h-4 border-2 border-white dark:border-slate-950 rounded-full shadow-sm z-10 ${role === USER_ROLES.ADMIN ? 'bg-emerald-500' : 'bg-slate-400'}`}></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-extrabold text-slate-800 dark:text-slate-100 truncate tracking-tight">{user.name}</p>
                <div className="flex items-center gap-1.5 mt-0.5 opacity-60">
                  <Shield className="w-3 h-3 text-brand" />
                  <p className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">
                    {role === USER_ROLES.ADMIN ? 'Admin Level' : 'Standard'}
                  </p>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showProfileMenu && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowProfileMenu(false)}
                    className="fixed inset-0 z-40"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: -10 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    className="absolute bottom-full left-0 w-full mb-4 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden z-50 p-2 space-y-1"
                  >
                    <NavLink
                      to="/settings"
                      onClick={() => setShowProfileMenu(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/60 rounded-xl transition-colors group"
                    >
                      <div className="p-2 bg-brand/5 text-brand rounded-lg group-hover:bg-brand group-hover:text-white transition-colors">
                        <SettingsIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">Edit Profile</span>
                    </NavLink>
                    <NavLink
                      to="/transactions"
                      onClick={() => setShowProfileMenu(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/60 rounded-xl transition-colors group"
                    >
                      <div className="p-2 bg-slate-50 dark:bg-slate-800 text-slate-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        <ReceiptText className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">Activity Log</span>
                    </NavLink>
                    <div className="h-[1px] bg-slate-50 dark:bg-slate-800 mx-2 my-1" />
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-xl transition-colors group">
                      <div className="p-2 bg-rose-50 dark:bg-rose-500/10 text-rose-500 rounded-lg group-hover:bg-rose-500 group-hover:text-white transition-colors">
                        <LogOut className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest">Terminate Session</span>
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
