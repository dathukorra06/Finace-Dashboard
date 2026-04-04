import React from 'react';
import { 
  User, Shield, ShieldCheck, ShieldAlert, Monitor, Globe, Mail, 
  MapPin, Edit, CheckCircle2, ChevronRight, Save, Trash2, ShieldOff, Eye,
  Palette, Smartphone, Moon, Sun, ArrowRight, ArrowUpRight
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const RoleCard = ({ title, description, icon: Icon, active, onClick }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.01 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`p-10 rounded-[2.5rem] relative transition-all duration-500 cursor-pointer border-2 shadow-premium flex flex-col h-full group ${
      active 
        ? 'bg-brand/5 border-brand ring-4 ring-brand/5 dark:ring-brand/10 dark:bg-brand/20' 
        : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-brand/30 dark:hover:border-brand/40'
    }`}
  >
    <div className="absolute top-10 right-10">
      <div className={`w-8 h-8 rounded-2xl border-2 flex items-center justify-center transition-all duration-500 ${active ? 'border-brand bg-brand shadow-lg shadow-brand/40 ring-4 ring-brand/10' : 'border-slate-100 dark:border-slate-800'}`}>
        {active && <CheckCircle2 className="w-5 h-5 text-white" />}
      </div>
    </div>

    <div className={`p-4 rounded-2xl w-fit transition-all duration-500 mb-10 ${active ? 'bg-brand text-white shadow-xl shadow-brand/30 scale-110' : 'bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:text-brand ring-1 ring-slate-100 dark:ring-slate-800'}`}>
      <Icon className="w-8 h-8" />
    </div>

    <div className="space-y-4 flex-1">
      <div className="flex items-center gap-3">
        <h3 className={`text-2xl font-display font-bold tracking-tight transition-colors duration-500 ${active ? 'text-brand' : 'text-slate-800 dark:text-slate-100'}`}>{title}</h3>
        {active && <span className="px-2.5 py-1 bg-brand/10 text-brand rounded-lg text-[9px] font-bold uppercase tracking-widest">Active</span>}
      </div>
      <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{description}</p>
    </div>

    <div className={`mt-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${active ? 'text-brand transform translate-x-1' : 'text-slate-400 opacity-40 group-hover:opacity-100 group-hover:text-brand'}`}>
      {active ? 'CURRENTLY ASSIGNED' : 'Switch to this perspective'}
      <ArrowRight className="w-4 h-4" />
    </div>
  </motion.div>
);

const Settings = () => {
  const { role, setRole, USER_ROLES, darkMode, setDarkMode, user, setUser } = useAppContext();
  const [isEditing, setIsEditing] = React.useState(false);
  const [editForm, setEditForm] = React.useState({ ...user });

  const handleSaveProfile = () => {
    setUser(editForm);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditForm({ ...user });
    setIsEditing(false);
  };

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 md:px-0">
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Architect Settings
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-400 dark:text-slate-500 font-medium font-sans"
        >
          Configure your <span className="text-brand font-bold">Institutional Workspace</span> and administrative permissions.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-premium p-10 lg:p-12 bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-premium"
        >
           <div className="flex flex-col sm:flex-row items-center sm:items-start gap-12">
              <div className="relative group cursor-pointer">
                <div className="w-36 h-36 rounded-[2.5rem] overflow-hidden shadow-2xl ring-4 ring-slate-50 dark:ring-slate-950 transition-all duration-700 group-hover:scale-105 group-hover:ring-brand/20">
                  <img src={user.avatar} alt="Administrator" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                {!isEditing && (
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="absolute -bottom-3 -right-3 p-3.5 bg-brand text-white rounded-2xl shadow-xl shadow-brand/30 border-4 border-white dark:border-slate-900 hover:scale-110 transition-all duration-300"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                )}
              </div>

              <div className="flex-1 text-center sm:text-left space-y-6">
                {isEditing ? (
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      value={editForm.name}
                      onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl px-4 py-2 text-xl font-display font-bold text-slate-900 dark:text-white"
                      placeholder="Display Name"
                    />
                    <input 
                      type="email" 
                      value={editForm.email}
                      onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl px-4 py-2 text-xs font-bold text-slate-500 dark:text-slate-400"
                      placeholder="Email Address"
                    />
                    <input 
                      type="text" 
                      value={editForm.location || ""}
                      onChange={(e) => setEditForm({...editForm, location: e.target.value})}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl px-4 py-2 text-xs font-bold text-slate-500 dark:text-slate-400"
                      placeholder="Location"
                    />
                    <div className="flex items-center gap-3 pt-2">
                       <button onClick={handleSaveProfile} className="flex-1 bg-brand text-white py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                         <Save className="w-3.5 h-3.5" /> Save
                       </button>
                       <button onClick={handleCancelEdit} className="px-4 bg-slate-100 dark:bg-slate-800 text-slate-500 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest">
                         Cancel
                       </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="space-y-1">
                      <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">{user.name}</h3>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800">
                          <Mail className="w-3.5 h-3.5 text-slate-400" />
                          <p className="text-slate-500 dark:text-slate-400 text-xs font-bold">{user.email}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
                      <div className="px-4 py-2 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl text-[10px] font-bold uppercase tracking-widest border border-emerald-100 dark:border-emerald-900/40 flex items-center gap-2 shadow-sm">
                        <ShieldCheck className="w-4 h-4" /> COMPLIANCE VERIFIED
                      </div>
                      <div className="px-4 py-2 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 rounded-xl text-[10px] font-bold uppercase tracking-widest border border-slate-100 dark:border-slate-800 flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> {user.location || "London, UK"}
                      </div>
                    </div>
                  </>
                )}
              </div>
           </div>
        </motion.div>

        {/* Display Settings Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-premium p-10 lg:p-12 bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800/40"
        >
           <div className="flex items-center gap-5 mb-12">
             <div className="p-4 bg-brand/5 text-brand rounded-[1.5rem] shadow-sm ring-1 ring-brand/10">
               <Palette className="w-7 h-7" />
             </div>
             <div className="flex flex-col">
               <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white tracking-tight leading-none mb-1">Visual Preferences</h3>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.15em] opacity-80">UX CUSTOMIZATION</p>
             </div>
           </div>

           <div className="space-y-6">
             <div className="p-6 bg-white dark:bg-slate-950 rounded-[2rem] shadow-premium border border-slate-100 dark:border-slate-800/60 flex items-center justify-between group hover:border-brand/30 transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className={`p-3 rounded-xl transition-all duration-500 ${darkMode ? 'bg-slate-900 text-brand shadow-lg ring-1 ring-brand/20' : 'bg-slate-50 text-slate-400'}`}>
                    {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-base font-bold text-slate-800 dark:text-slate-100 tracking-tight">Dark Experience</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest opacity-60">System Override</span>
                  </div>
                </div>
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-16 h-8 rounded-full p-1.5 transition-all duration-500 shadow-inner group relative ${darkMode ? 'bg-brand' : 'bg-slate-200 dark:bg-slate-800'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-all duration-500 shadow-xl ${darkMode ? 'translate-x-8' : 'translate-x-0'}`}></div>
                </button>
             </div>

             <div className="space-y-4 pt-4">
                <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em] pl-2 opacity-80">Institutional Ledger Currency</label>
                <div className="w-full bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-[2rem] px-8 py-5 flex items-center justify-between hover:border-brand/40 transition-all duration-500 cursor-pointer shadow-premium group">
                  <div className="flex items-center gap-4">
                    <Globe className="w-5 h-5 text-brand opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200 tracking-tight">USD - United States Dollar</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-brand transition-all duration-500 group-hover:rotate-45" />
                </div>
             </div>
           </div>
        </motion.div>
      </div>

      {/* Role Management Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card-premium bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 overflow-hidden shadow-premium"
      >
        <div className="p-10 lg:p-12 border-b border-slate-100 dark:border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-8 bg-slate-50/50 dark:bg-slate-950/20">
           <div className="flex items-center gap-6">
             <div className="p-4 bg-brand text-white rounded-[1.5rem] shadow-xl shadow-brand/30">
               <Shield className="w-8 h-8" />
             </div>
             <div className="flex flex-col gap-1">
               <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight leading-none">Perspective Control</h3>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em] opacity-80">ROLE-BASED PERMISSIONS</p>
             </div>
           </div>
           <div className="flex items-center gap-4 bg-white dark:bg-slate-950 px-6 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
             <div className="w-2 h-2 rounded-full bg-brand animate-pulse"></div>
             <span className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest leading-none">ACTIVE SESSION:</span>
             <span className="px-3 py-1 bg-brand/10 text-brand rounded-lg text-[10px] font-black uppercase tracking-widest">
               {role}
             </span>
           </div>
        </div>
        
        <div className="p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-10">
           <RoleCard 
             title="Viewer" 
             description="Ideal for stakeholders. High-level read-only access to dashboards, transaction history, and non-sensitive insights. Optimized for surveillance and auditing without execution power."
             icon={Eye}
             active={role === USER_ROLES.VIEWER}
             onClick={() => setRole(USER_ROLES.VIEWER)}
           />
           <RoleCard 
             title="Admin" 
             description="Full institutional sovereignty. Authorized to manage cryptographic keys, initiate primary-tier transactions, override audit logs, and modify organizational architectural settings."
             icon={ShieldCheck}
             active={role === USER_ROLES.ADMIN}
             onClick={() => setRole(USER_ROLES.ADMIN)}
           />
        </div>
      </motion.div>

      {/* Footer Actions */}
      <div className="flex items-center justify-end gap-12 pt-8 pb-16">
         <button className="text-slate-400 dark:text-slate-500 font-bold text-xs tracking-[0.2em] hover:text-rose-500 transition-colors uppercase py-2 border-b-2 border-transparent hover:border-rose-500/20">Discard Changes</button>
         <button className="flex items-center gap-3 bg-brand text-white px-12 py-5 rounded-2xl text-[13px] font-bold shadow-2xl shadow-brand/30 hover:scale-105 active:scale-95 transition-all duration-300">
           <Save className="w-5 h-5" /> 
           <span>Update System Configurations</span>
         </button>
      </div>
    </div>
  );
};

const ArrowUpDown = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 15l5 5 5-5M7 9l5-5 5 5"></path>
  </svg>
);
export default Settings;
