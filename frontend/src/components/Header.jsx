import React from 'react';
import { Search, Bell, Moon, Sun, ToggleRight, ToggleLeft, Menu, X, ArrowRight, Zap, Target, Activity } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

const NOTIFICATIONS = [
  { id: 1, type: 'critical', title: 'Institutional Protocol Update', time: '14m ago', description: 'Mandatory structural variance audit required for Q3 projections.', icon: Zap, color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-500/10' },
  { id: 2, type: 'success', title: 'Compliance Verified', time: '2h ago', description: 'Vertical asset class assessment for primary portfolios successfully validated.', icon: Activity, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
  { id: 3, type: 'info', title: 'System Analytics Pulse', time: '5h ago', description: 'Horizontal capital flows are stabilizing across all architectural nodes.', icon: Target, color: 'text-brand', bg: 'bg-brand/5 dark:bg-brand/10' },
];

const Header = ({ onMenuClick }) => {
  const { role, toggleRole, USER_ROLES, darkMode, setDarkMode } = useAppContext();
  const [showNotifications, setShowNotifications] = React.useState(false);

  return (
    <header className="h-20 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800/60 fixed top-0 right-0 left-0 lg:left-64 z-40 flex items-center px-6 md:px-10 justify-between transition-all duration-500 font-sans">
      
      {/* Mobile Menu Button */}
      <button 
        onClick={onMenuClick}
        className="p-2 lg:hidden text-slate-400 hover:text-brand transition-all duration-300"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Search Input Section */}
      <div className="hidden sm:flex md:w-1/3 flex items-center relative group">
        <Search className="w-4.5 h-4.5 absolute left-4 text-slate-300 dark:text-slate-600 group-focus-within:text-brand transition-colors duration-300" />
        <input
          type="text"
          placeholder="Search institutional analytics..."
          className="w-full bg-slate-50 dark:bg-slate-900/50 border border-transparent focus:border-brand/40 focus:bg-white dark:focus:bg-slate-900 rounded-2xl py-2.5 pl-12 pr-4 text-sm text-slate-600 dark:text-slate-300 focus:outline-none focus:ring-4 focus:ring-brand/5 shadow-sm transition-all duration-300 font-medium"
        />
      </div>

      {/* Actions Section */}
      <div className="flex items-center gap-4 md:gap-8">
        <div className="hidden md:flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200/50 dark:border-slate-800/50">
           <button 
             onClick={toggleRole}
             className={`flex items-center gap-2.5 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
               role === USER_ROLES.ADMIN 
                 ? 'bg-white dark:bg-slate-800 text-brand shadow-sm border border-slate-200/50 dark:border-slate-700/50' 
                 : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 border border-transparent'
             }`}
           >
             ADMIN
             {role === USER_ROLES.ADMIN ? <ToggleRight className="w-4.5 h-4.5 text-brand" /> : <ToggleLeft className="w-4.5 h-4.5 opacity-40" />}
           </button>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 text-slate-400 dark:text-slate-500 hover:text-brand hover:bg-brand/5 dark:hover:bg-brand/10 rounded-xl transition-all duration-300 group"
          >
            {darkMode ? <Sun className="w-5 h-5 transition-transform group-hover:rotate-45" /> : <Moon className="w-5 h-5 transition-transform group-hover:-rotate-12" />}
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className={`p-2.5 rounded-xl transition-all duration-300 relative group ${showNotifications ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'text-slate-400 dark:text-slate-500 hover:text-brand hover:bg-brand/5 dark:hover:bg-brand/10'}`}
            >
              <Bell className="w-5 h-5 transition-transform group-hover:scale-110" />
              {!showNotifications && <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-rose-500 border-2 border-white dark:border-slate-950 rounded-full animate-pulse shadow-sm"></span>}
            </button>

            <AnimatePresence>
              {showNotifications && (
                <>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowNotifications(false)}
                    className="fixed inset-0 z-[-1]"
                  />
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="absolute right-0 mt-4 w-[380px] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden z-50 ring-1 ring-slate-100 dark:ring-slate-800"
                  >
                    <div className="p-6 border-b border-slate-50 dark:border-slate-800/50 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/20">
                      <div>
                        <h3 className="text-lg font-display font-bold text-slate-800 dark:text-white leading-none">Notifications</h3>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">3 PENDING ALERTS</p>
                      </div>
                      <button onClick={() => setShowNotifications(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
                        <X className="w-4 h-4 text-slate-400" />
                      </button>
                    </div>
                    <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                      {NOTIFICATIONS.map((notif) => (
                        <div key={notif.id} className="p-6 hover:bg-slate-50/80 dark:hover:bg-slate-900/40 transition-colors border-b border-slate-50 dark:border-slate-800/40 cursor-pointer group last:border-0">
                          <div className="flex gap-4">
                            <div className={`p-3 rounded-2xl ${notif.bg} ${notif.color} shadow-sm group-hover:scale-110 transition-transform`}>
                              <notif.icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center justify-between">
                                <p className="text-xs font-bold text-slate-800 dark:text-white">{notif.title}</p>
                                <span className="text-[9px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest">{notif.time}</span>
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{notif.description}</p>
                              <div className="flex items-center gap-1.5 pt-2 text-brand font-bold text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                View Details <ArrowRight className="w-3 h-3" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 bg-slate-50/50 dark:bg-slate-950/30 text-center">
                       <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-brand transition-colors">Dismiss All Protocol Alerts</button>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
