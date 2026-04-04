import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, Filter, Calendar as CalendarIcon, ChevronLeft, ChevronRight, 
  ArrowUpDown, Download, Plus, Trash2, CheckCircle2, Clock, 
  Shield, CreditCard, Landmark, Briefcase, Server, ShoppingBag, 
  TrendingUp, Cloud, MoreHorizontal, X, LayoutGrid, Calendar, Edit
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

const Transactions = () => {
  const { transactions, addTransaction, deleteTransaction, role, USER_ROLES } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });
  const itemsPerPage = 6;

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, categoryFilter, typeFilter, startDate, endDate]);

  const filteredTransactions = useMemo(() => {
    let result = transactions.filter(tx => {
      const matchesSearch = tx.entity.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'All' || tx.category === categoryFilter;
      const matchesType = typeFilter === 'All' || tx.type === typeFilter;
      
      const txDate = new Date(tx.date);
      txDate.setHours(0, 0, 0, 0);
      
      let matchesDate = true;
      if (startDate) {
        const start = new Date(startDate);
        start.setHours(0, 0, 0, 0);
        matchesDate = matchesDate && txDate >= start;
      }
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(0, 0, 0, 0);
        matchesDate = matchesDate && txDate <= end;
      }
      
      return matchesSearch && matchesCategory && matchesType && matchesDate;
    });

    if (sortConfig.key) {
      result.sort((a, b) => {
        let aVal = a[sortConfig.key];
        let bVal = b[sortConfig.key];
        
        if (sortConfig.key === 'amount') {
          aVal = parseFloat(aVal);
          bVal = parseFloat(bVal);
        }

        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return result;
  }, [transactions, searchTerm, categoryFilter, typeFilter, sortConfig, startDate, endDate]);

  const categories = ['All', ...new Set(transactions.map(tx => tx.category))];
  const types = ['All', 'Income', 'Expense', 'Transfer'];

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleAddMockTransaction = () => {
    const newTx = {
      id: Date.now().toString(),
      date: 'Oct 25, 2023',
      time: '14:20 GMT',
      entity: 'New Manual Entry',
      category: 'OPERATIONAL',
      type: 'Expense',
      amount: -12450.00,
      status: 'EXECUTED',
      icon: 'plus-circle'
    };
    addTransaction(newTx);
  };

  const exportToCSV = () => {
    const headers = ['Date', 'Entity', 'Category', 'Type', 'Amount', 'Status'];
    const rows = filteredTransactions.map(tx => [
      tx.date, tx.entity, tx.category, tx.type, tx.amount, tx.status
    ]);
    const csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") + "\n"
      + rows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "transactions_export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [editingTx, setEditingTx] = useState(null);

  return (
    <div className="space-y-12">
      {/* Header and other sections ... (no changes here for brevity) */}
      
      {/* Table Section */}
      <div className="space-y-8">
        {/* ... (Existing Filter and Table UI) */}
        <div className="card-premium h-auto overflow-hidden bg-white/50 backdrop-blur-sm shadow-premium border-slate-200/60 dark:border-slate-800/60">
          <div className="overflow-x-auto min-h-[500px]">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/50">
                  <th className="px-10 py-7">
                    <div onClick={() => handleSort('date')} className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] cursor-pointer hover:text-brand transition-colors">
                      DATE <ArrowUpDown className="w-3.5 h-3.5 opacity-40" />
                    </div>
                  </th>
                  <th className="px-10 py-7">
                    <div onClick={() => handleSort('entity')} className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] cursor-pointer hover:text-brand transition-colors">
                      INSTITUTIONAL ENTITY <ArrowUpDown className="w-3.5 h-3.5 opacity-40" />
                    </div>
                  </th>
                  <th className="px-10 py-7">
                    <div onClick={() => handleSort('category')} className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] cursor-pointer hover:text-brand transition-colors">
                      CLASS <ArrowUpDown className="w-3.5 h-3.5 opacity-40" />
                    </div>
                  </th>
                  <th className="px-10 py-7">
                    <div onClick={() => handleSort('type')} className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] cursor-pointer hover:text-brand transition-colors">
                      TYPE <ArrowUpDown className="w-3.5 h-3.5 opacity-40" />
                    </div>
                  </th>
                  <th className="px-10 py-7 text-right">
                    <div onClick={() => handleSort('amount')} className="flex items-center gap-3 justify-end text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] cursor-pointer hover:text-brand transition-colors">
                      CAPITAL <ArrowUpDown className="w-3.5 h-3.5 opacity-40" />
                    </div>
                  </th>
                  <th className="px-12 py-7 text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] text-center">EDIT/DELETE OPTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-900">
                <AnimatePresence initial={false}>
                  {paginatedTransactions.map((tx, idx) => (
                    <motion.tr 
                      layout
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: idx * 0.05 }}
                      key={tx.id} 
                      className="hover:bg-slate-50/80 dark:hover:bg-slate-900/30 transition-all duration-300 group cursor-default"
                    >
                      <td className="px-10 py-8">
                        <div className="space-y-1">
                          <p className="text-base font-bold text-slate-800 dark:text-slate-100 tracking-tight">{tx.date}</p>
                        </div>
                      </td>
                      <td className="px-10 py-8">
                        <div className="flex items-center gap-5">
                          <span className="text-base font-bold text-slate-700 dark:text-slate-200 tracking-tight group-hover:text-brand transition-colors duration-300">{tx.entity}</span>
                        </div>
                      </td>
                      <td className="px-10 py-8">
                        <span className="px-4 py-2 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 rounded-xl text-[9px] font-black uppercase tracking-[0.15em] border border-slate-100 dark:border-slate-800 transition-all group-hover:bg-brand/5 group-hover:text-brand">
                          {tx.category}
                        </span>
                      </td>
                      <td className="px-10 py-8">
                         <span className="text-sm font-bold text-slate-600 dark:text-slate-400 font-display">{tx.type}</span>
                      </td>
                      <td className={`px-10 py-8 text-lg font-bold text-right font-display tabular-nums ${tx.amount < 0 ? 'text-rose-500' : 'text-emerald-500'}`}>
                        {tx.amount < 0 ? `-$${Math.abs(tx.amount).toLocaleString(undefined, {minimumFractionDigits: 2})}` : `+$${tx.amount.toLocaleString(undefined, {minimumFractionDigits: 2})}`}
                      </td>
                      <td className="px-12 py-8">
                        <div className="flex items-center justify-center gap-3">
                          <button 
                            onClick={() => setEditingTx(tx)}
                            className="p-3 text-slate-300 dark:text-slate-600 hover:text-brand hover:bg-brand/5 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
                          >
                            <Edit className="w-4.5 h-4.5" />
                          </button>
                          {role === USER_ROLES.ADMIN && (
                            <button 
                              onClick={() => deleteTransaction(tx.id)}
                              className="p-3 text-slate-300 dark:text-slate-600 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                              <Trash2 className="w-4.5 h-4.5" />
                            </button>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
                {/* ... (Empty state logic) */}
              </tbody>
            </table>
          </div>

          {/* ... (Pagination logic) */}
        </div>
      </div>

      {/* Edit Transaction Modal */}
      <AnimatePresence>
        {editingTx && (
          <TransactionEditModal 
            tx={editingTx} 
            onClose={() => setEditingTx(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Sub-component for editing
const TransactionEditModal = ({ tx, onClose }) => {
  const { updateTransaction } = useAppContext();
  const [form, setForm] = useState({ ...tx });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTransaction(form);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ 
      ...prev, 
      [name]: name === 'amount' ? parseFloat(value) : value 
    }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-[40px] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden"
      >
        <div className="p-8 md:p-12">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-3xl font-display font-bold text-slate-800 dark:text-white uppercase tracking-tight">Edit Entry</h3>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] mt-1">Transaction Ref: <span className="text-brand">#{tx.id.slice(-6)}</span></p>
            </div>
            <button onClick={onClose} className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-brand rounded-2xl transition-all">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em] pl-1">Institutional Entity</label>
                <input 
                  name="entity"
                  value={form.entity}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl py-4 px-6 text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-4 focus:ring-brand/5 focus:border-brand/40 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em] pl-1">Operational Class</label>
                <select 
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl py-4 px-6 text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-4 focus:ring-brand/5 focus:border-brand/40 transition-all appearance-none cursor-pointer"
                >
                  {['INFRASTRUCTURE', 'ADVISORY', 'TREASURY', 'OPERATIONAL', 'CAPITAL ASSETS', 'GENERAL'].map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em] pl-1">Capital Flux (USD)</label>
                <input 
                  type="number"
                  name="amount"
                  step="0.01"
                  value={form.amount}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl py-4 px-6 text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-4 focus:ring-brand/5 focus:border-brand/40 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em] pl-1">Flux Direction</label>
                <div className="flex bg-slate-50 dark:bg-slate-950 p-1 rounded-2xl border border-slate-100 dark:border-slate-800">
                   {['Income', 'Expense'].map(type => (
                     <button 
                       key={type}
                       type="button"
                       onClick={() => setForm(f => ({ ...f, type }))}
                       className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${form.type === type ? 'bg-brand text-white shadow-lg' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                     >
                       {type}
                     </button>
                   ))}
                </div>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <button 
                type="button"
                onClick={onClose}
                className="flex-1 py-5 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-400 text-xs font-black uppercase tracking-widest hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95"
              >
                Abort
              </button>
              <button 
                type="submit"
                className="flex-1 py-5 rounded-2xl bg-brand text-white text-xs font-black uppercase tracking-widest shadow-xl shadow-brand/20 hover:shadow-brand/40 transition-all active:scale-95"
              >
                Commit Changes
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Transactions;
