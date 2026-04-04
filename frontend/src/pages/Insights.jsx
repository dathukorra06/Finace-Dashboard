import React from 'react';
import { 
  Zap, TrendingUp, BarChart4, ArrowRight, CheckCircle2, AlertCircle, 
  ChevronUp, ChevronDown, Download, Layers, ShieldCheck, Activity,
  Calendar, ArrowUpRight, ArrowDownRight, MoreHorizontal,
  LayoutGrid, X, FileText, Search
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Legend, Cell
} from 'recharts';
import { MOCK_INSIGHTS } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

const AnalysisModal = ({ isOpen, onClose, title, content, type }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-md z-[100] flex items-center justify-center p-6"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed inset-x-6 top-[10%] bottom-[10%] md:inset-auto md:w-[600px] md:min-h-[500px] bg-white dark:bg-slate-900 rounded-[2.5rem] z-[101] shadow-2xl overflow-hidden flex flex-col border border-slate-100 dark:border-slate-800"
        >
          <div className="p-10 border-b border-slate-50 dark:border-slate-800/50 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/20">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand text-white rounded-2xl shadow-lg shadow-brand/20">
                {type === 'audit' ? <FileText className="w-6 h-6" /> : <Search className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white uppercase tracking-tight leading-none mb-1">{title}</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Institutional Protocol 04-B</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-3 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 text-slate-400 hover:text-rose-500 transition-colors shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 p-10 overflow-y-auto custom-scrollbar space-y-8">
            <div className="space-y-4">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em]">Executive Summary</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {content || "Generating comprehensive institutional analysis report. This process involves deep-tensor scanning of all available transaction registries, compliance logs, and forecasted capital projections. Historical variance is calculated against global benchmarks established in the current fiscal cycle."}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Risk Vector', value: 'Minimal', color: 'text-emerald-500' },
                { label: 'Integrity', value: '99.98%', color: 'text-brand' },
                { label: 'Stability', value: 'Strategic', color: 'text-indigo-500' },
                { label: 'Audit Trail', value: 'Verified', color: 'text-emerald-500' }
              ].map((m, idx) => (
                <div key={idx} className="p-6 bg-slate-50 dark:bg-slate-950/50 rounded-3xl border border-slate-100 dark:border-slate-800/60">
                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{m.label}</p>
                   <p className={`text-xl font-display font-bold ${m.color}`}>{m.value}</p>
                </div>
              ))}
            </div>

            <div className="p-8 bg-brand/5 border border-brand/10 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-5 h-5 text-brand" />
                <span className="text-[10px] font-black text-brand uppercase tracking-widest">Compliance Certification</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">This analysis has been cross-referenced with internal audit protocols. All findings are categorized as statistically significant and ready for board presentation.</p>
            </div>
          </div>

          <div className="p-8 border-t border-slate-50 dark:border-slate-800/50 bg-slate-50/30 dark:bg-slate-950/20 flex justify-end">
            <button 
              onClick={onClose}
              className="bg-slate-900 dark:bg-brand text-white px-10 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-slate-200 dark:shadow-brand/20"
            >
              Acknowledge report
            </button>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

const InsightCard = ({ title, description, color, index, onReview }) => {
  const accentColors = {
    emerald: 'var(--color-emerald-500)',
    blue: 'var(--color-brand)',
    indigo: '#6366f1',
    rose: '#f43f5e'
  };

  const bgColors = {
    emerald: 'bg-emerald-50 dark:bg-emerald-500/10',
    blue: 'bg-blue-50 dark:bg-blue-500/10',
    indigo: 'bg-indigo-50 dark:bg-indigo-500/10',
    rose: 'bg-rose-50 dark:bg-rose-500/10'
  };

  const textColors = {
    emerald: 'text-emerald-600 dark:text-emerald-400',
    blue: 'text-blue-600 dark:text-blue-400',
    indigo: 'text-indigo-600 dark:text-indigo-400',
    rose: 'text-rose-600 dark:text-rose-400'
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-slate-900/50 p-7 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-premium flex flex-col gap-5 transition-all duration-500 group"
    >
      <div className="flex items-center justify-between">
        <div className={`p-3 rounded-2xl ${bgColors[color]} ${textColors[color]} transition-transform duration-500 group-hover:scale-110 shadow-sm`}>
           {index === 0 ? <TrendingUp className="w-5 h-5" /> : index === 1 ? <Activity className="w-5 h-5" /> : index === 2 ? <Layers className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
        </div>
        <div className="w-1.5 h-1.5 rounded-full animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.4)]" style={{ backgroundColor: accentColors[color] }}></div>
      </div>
      <div className="space-y-2">
        <h4 className="text-base font-bold text-slate-800 dark:text-white tracking-tight uppercase text-[12px] opacity-80">{title}</h4>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{description}</p>
      </div>
      <div 
        onClick={() => onReview({ title, description, color })}
        className="mt-2 pt-4 border-t border-slate-50 dark:border-slate-800/50 flex items-center gap-2 text-brand font-bold text-[10px] uppercase tracking-widest cursor-pointer hover:gap-3 transition-all duration-300"
      >
        Review Full Analysis <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </motion.div>
  );
};

const Insights = () => {
  const [timeframe, setTimeframe] = React.useState('180');
  const [modalState, setModalState] = React.useState({ isOpen: false, title: '', content: '', type: 'analysis' });
  
  // Dynamic data based on timeframe
  const spendingData = React.useMemo(() => {
    const baseData = [
      { month: 'JAN', primary: 4200, benchmark: 3800 },
      { month: 'FEB', primary: 3800, benchmark: 4000 },
      { month: 'MAR', primary: 6500, benchmark: 4200 },
      { month: 'APR', primary: 4800, benchmark: 4100 },
      { month: 'MAY', primary: 5900, benchmark: 4400 },
      { month: 'JUN', primary: 4300, benchmark: 4600 },
      { month: 'JUL', primary: 5100, benchmark: 4700 },
      { month: 'AUG', primary: 4600, benchmark: 4800 },
      { month: 'SEP', primary: 5800, benchmark: 5000 },
      { month: 'OCT', primary: 6200, benchmark: 5200 },
      { month: 'NOV', primary: 4900, benchmark: 5400 },
      { month: 'DEC', primary: 7100, benchmark: 5600 },
    ];

    if (timeframe === '90') return baseData.slice(-3);
    if (timeframe === '180') return baseData.slice(-6);
    return baseData;
  }, [timeframe]);

  const allocationData = [
    { name: 'Q1', housing: 40, operations: 35, leisure: 25 },
    { name: 'Q2', housing: 45, operations: 30, leisure: 25 },
    { name: 'Q3', housing: 50, operations: 25, leisure: 25 },
    { name: 'Q4', housing: 42, operations: 38, leisure: 20 },
  ];

  const classData = [
    { name: 'Residential Mortgages', current: '$8,450.00', variance: -2.4, score: 'OPTIMIZED', scolor: 'emerald' },
    { name: 'Equity Portfolios', current: '$12,200.00', variance: 1.8, score: 'STABLE', scolor: 'emerald' },
    { name: 'Operational Expenses', current: '$4,120.00', variance: 12.0, score: 'AUDIT REQ', scolor: 'rose' },
  ];

  const handleDownloadReport = () => {
    const headers = ['Category', 'Current Value', 'Variance', 'Score'];
    const rows = classData.map(row => [row.name, row.current, `${row.variance}%`, row.score]);
    const csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") + "\n"
      + rows.map(e => e.join(",")).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `institutional_report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const cycleTimeframe = () => {
    const frames = ['90', '180', '365'];
    const nextIdx = (frames.indexOf(timeframe) + 1) % frames.length;
    setTimeframe(frames[nextIdx]);
  };

  const handleReviewAnalysis = (insight) => {
    setModalState({
      isOpen: true,
      title: insight.title,
      content: `Extensive tensor-level review of: ${insight.description}. Our predictive models indicate a 98.4% alignment with current market trajectories. All structural variances remain within institutional tolerance thresholds.`,
      type: 'analysis'
    });
  };

  const handleExploreAudit = () => {
    setModalState({
      isOpen: true,
      title: 'Full Institutional Audit',
      content: 'Initiating full audit across all asset classes. Current structural drill shows 100% compliance alignment for Q3/Q4 projections. Horizontal variance has been stabilized across all primary registries.',
      type: 'audit'
    });
  };

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 md:px-0">
      <AnalysisModal 
        isOpen={modalState.isOpen} 
        type={modalState.type}
        onClose={() => setModalState({ ...modalState, isOpen: false })} 
        title={modalState.title} 
        content={modalState.content} 
      />

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Insights & Analytics
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 dark:text-slate-500 font-medium"
          >
            Deep horizontal vertical analysis of <span className="text-brand font-bold">Institutional Capital Flow</span>
          </motion.p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={cycleTimeframe}
            className="flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 px-6 py-3 rounded-2xl text-xs font-bold shadow-premium hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
          >
             <Calendar className="w-4 h-4 text-brand" />
             Last {timeframe === '365' ? 'Year' : `${timeframe} Days`}
          </button>
          <button 
            onClick={handleDownloadReport}
            className="flex items-center gap-3 bg-brand text-white px-6 py-3 rounded-2xl text-xs font-bold shadow-lg shadow-brand/20 hover:shadow-brand/40 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
          >
             <Download className="w-4 h-4" />
             Institutional Report
          </button>
        </div>
      </div>

      {/* Stats Quick Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Spending Delta', value: '$14,208', label: 'vs $16,210 last cycle', icon: Activity, change: '-12.4%', ccolor: 'emerald' },
          { title: 'Primary Pivot', value: 'Fixed Assets', label: '34% of total allocation', icon: Layers, change: 'TOP CLASS', ccolor: 'brand' },
          { title: 'Net Yield Surplus', value: '$28,500', label: 'Projected monthly net', icon: TrendingUp, change: '+5.2%', ccolor: 'emerald' },
        ].map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="card-premium p-8 lg:p-10 bg-white/50 backdrop-blur-sm border-slate-200/60 dark:border-slate-800/60"
          >
             <div className="flex items-center justify-between mb-10">
               <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm text-slate-500 dark:text-slate-400">
                 <stat.icon className="w-6 h-6" />
               </div>
               <span className={`text-[10px] font-bold px-3 py-1.5 rounded-xl uppercase tracking-widest ${stat.ccolor === 'emerald' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' : 'bg-brand/5 text-brand dark:bg-brand/10'}`}>
                 {stat.change}
               </span>
             </div>
             <div className="space-y-2">
               <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">{stat.title}</p>
               <div className="flex flex-col gap-1">
                 <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">{stat.value}</h3>
                 <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">{stat.label}</span>
               </div>
             </div>
          </motion.div>
        ))}
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card-premium p-10 h-[500px] bg-white/50 backdrop-blur-sm border-slate-200/60 dark:border-slate-800/60 flex flex-col">
           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
             <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white uppercase tracking-tight">Horizontal Variance</h3>
             <div className="flex items-center gap-6">
               <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-brand"></div><span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">Primary</span></div>
               <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-800"></div><span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">Benchmark</span></div>
             </div>
           </div>
           <div className="flex-1 -ml-6">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={spendingData} margin={{ top: 20, left: 0, right: 0, bottom: 0 }}>
                 <CartesianGrid vertical={false} strokeDasharray="5 5" stroke="rgba(203, 213, 225, 0.2)" />
                 <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b', fontWeight: 700 }} dy={10} />
                 <YAxis hide />
                 <Tooltip 
                    cursor={{ fill: 'rgba(37, 99, 235, 0.03)' }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-2xl shadow-premium">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">{payload[0].payload.month}</p>
                            <div className="space-y-1">
                              <p className="text-lg font-bold text-brand font-display tracking-tight">${payload[0].value.toLocaleString()}</p>
                              <p className="text-[10px] text-slate-400 font-bold uppercase">Delta: <span className="text-emerald-500">+${(payload[0].value - payload[1].value).toLocaleString()}</span></p>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                 />
                 <Bar dataKey="benchmark" fill="rgba(37, 99, 235, 0.1)" radius={[6, 6, 0, 0]} barSize={24} />
                 <Bar dataKey="primary" fill="var(--color-brand)" radius={[6, 6, 0, 0]} barSize={24} />
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>

        <div className="card-premium p-10 h-[500px] bg-white/50 backdrop-blur-sm border-slate-200/60 dark:border-slate-800/60 flex flex-col">
           <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
             <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white uppercase tracking-tight">Structural Weighted Distribution</h3>
             <LayoutGrid className="w-5 h-5 text-slate-300 hidden sm:block" />
           </div>
           <div className="flex-1 -ml-6">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={allocationData} margin={{ top: 20 }}>
                  <CartesianGrid vertical={false} strokeDasharray="5 5" stroke="rgba(203, 213, 225, 0.2)" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#64748b', fontWeight: 700}} dy={10} />
                  <YAxis hide />
                  <Tooltip />
                  <Bar dataKey="housing" stackId="a" fill="var(--color-brand)" barSize={45} />
                  <Bar dataKey="operations" stackId="a" fill="#475569" barSize={45} />
                  <Bar dataKey="leisure" stackId="a" fill="#10b981" radius={[6, 6, 0, 0]} barSize={45} />
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>
      </div>

      {/* Key Insights Section */}
      <div className="card-premium p-10 bg-slate-900/5 dark:bg-slate-900/40 border-transparent shadow-none">
        <div className="flex items-center gap-5 mb-12">
          <div className="p-3 bg-brand text-white rounded-2xl shadow-lg shadow-brand/40">
            <Zap className="w-6 h-6 fill-white" />
          </div>
          <h3 className="text-3xl font-display font-bold tracking-tight text-slate-900 dark:text-white">Cognitive Institutional Analysis</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {MOCK_INSIGHTS.map((insight, idx) => (
             <InsightCard 
               key={idx}
               index={idx}
               title={insight.title}
               color={insight.color}
               description={insight.description} 
               onReview={handleReviewAnalysis}
             />
           ))}
        </div>
      </div>

      {/* Drill-down Table Section */}
      <div className="card-premium bg-white/50 backdrop-blur-sm border-slate-200/60 dark:border-slate-800/60 overflow-hidden">
        <div className="p-10 border-b border-slate-100 dark:border-slate-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
           <div>
             <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white uppercase tracking-tight leading-none mb-2">Structural Deep Drill</h3>
             <p className="text-sm text-slate-400 dark:text-slate-500 font-medium">Vertical asset class assessment and compliance scoring</p>
           </div>
           <button 
             onClick={handleExploreAudit}
             className="text-[11px] font-bold text-brand uppercase tracking-[0.2em] flex items-center gap-3 hover:gap-4 transition-all group bg-brand/5 dark:bg-brand/10 border border-brand/10 px-8 py-3.5 rounded-2xl hover:bg-brand hover:text-white"
           >
             EXPLORE FULL AUDIT <ArrowRight className="w-4 h-4" />
           </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-950/50 border-b border-slate-100 dark:border-slate-800/50">
                <th className="px-10 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Structural Asset Class</th>
                <th className="px-10 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Weighted Allocation</th>
                <th className="px-10 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Horizontal Variance</th>
                <th className="px-10 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] text-right">Compliance Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-900">
              {classData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 dark:hover:bg-slate-900/30 transition-colors group">
                  <td className="px-10 py-8">
                    <div className="flex items-center gap-5">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover:scale-110 ${idx === 0 ? 'bg-blue-50 border-blue-100 dark:bg-blue-500/10 dark:border-blue-900/50 text-blue-600' : idx === 1 ? 'bg-slate-50 border-slate-100 dark:bg-slate-800 dark:border-slate-700 text-slate-500' : 'bg-rose-50 border-rose-100 dark:bg-rose-500/10 dark:border-rose-900/50 text-rose-600'}`}>
                        {idx === 0 ? <Zap className="w-5 h-5" /> : idx === 1 ? <Layers className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                      </div>
                      <span className="text-lg font-bold text-slate-800 dark:text-slate-200 tracking-tight group-hover:text-brand transition-colors duration-300">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-10 py-8 text-base font-bold text-slate-600 dark:text-slate-400 tabular-nums font-display">{row.current}</td>
                  <td className="px-10 py-8">
                    <div className={`flex items-center gap-2.5 text-base font-bold tabular-nums ${row.variance < 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {row.variance < 0 ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
                      {Math.abs(row.variance)}%
                    </div>
                  </td>
                  <td className="px-10 py-8 text-right">
                     <span className={`text-[10px] font-bold px-4 py-2 rounded-xl tracking-widest uppercase shadow-sm border ${
                       row.scolor === 'emerald' ? 'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-500/10 dark:border-emerald-900/50 dark:text-emerald-400' : 'bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-500/10 dark:border-rose-900/50 dark:text-rose-400'
                     }`}>
                       {row.score}
                     </span>
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

export default Insights;
