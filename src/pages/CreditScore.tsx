import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCw, ChevronRight, Target, BarChart2, PieChart, Crown } from 'lucide-react';
import { ScoreGauge } from '../components/ScoreGauge';
import { MetricCard } from '../components/MetricCard';
import { MilestoneBadge } from '../components/MilestoneBadge';
import { AccountCard } from '../components/AccountCard';
import { Card } from '../components/ui/Card';
interface CreditScoreProps {
  onUpgradeClick: () => void;
}
export function CreditScore({
  onUpgradeClick
}: CreditScoreProps) {
  const [activeTab, setActiveTab] = useState('summary');
  return <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <button className="p-2 -ml-2 hover:bg-slate-50 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-slate-800" />
        </button>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
          <div className="w-4 h-4 rounded-full bg-slate-900 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
          <span className="text-xs font-bold text-slate-800">foresight</span>
        </div>
      </header>

      <main className="px-6 max-w-lg mx-auto">
        {/* Upgrade Banner */}
        <motion.button initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} whileHover={{
        scale: 1.02
      }} whileTap={{
        scale: 0.98
      }} onClick={onUpgradeClick} className="w-full mb-6 p-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl shadow-lg shadow-emerald-200 flex items-center justify-between group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">Upgrade to Pro</p>
              <p className="text-emerald-50 text-xs">
                Get real-time alerts & AI advisor
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
        </motion.button>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-100 shadow-md">
              <img src="/Screenshot_2026-01-14_at_7.25.08_PM.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-purple-600 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
              750
            </div>
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-center">
            <p className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-1">
              Hey Aaron,
            </p>
            <h1 className="text-3xl text-slate-900 leading-tight">
              <span className="font-normal block">you're in the</span>
              <span className="font-serif font-bold italic block mt-1">
                800 club now
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Score Gauge */}
        <ScoreGauge />

        {/* Refresh Button */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="bg-black text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-slate-200 flex items-center gap-2">
            refresh now
          </motion.button>
          <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
            Last updated on 3 Aug '24
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => setActiveTab('summary')} className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all ${activeTab === 'summary' ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-slate-400 border border-slate-200 hover:bg-slate-50'}`}>
            <PieChart className="w-3 h-3" />
            QUICK SUMMARY
          </button>
          <button onClick={() => setActiveTab('history')} className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all ${activeTab === 'history' ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-slate-400 border border-slate-200 hover:bg-slate-50'}`}>
            <BarChart2 className="w-3 h-3" />
            HISTORY
          </button>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <MetricCard title="Timely Payments" value="100" status="excellent" description="your spends are under control" percentage={100} delay={0.2} />
          <MetricCard title="Utilisation" value="20" status="excellent" description="your spends are under control" percentage={20} delay={0.4} />
        </div>

        {/* Goal Card */}
        <Card className="p-4 mb-10 flex items-center justify-between group cursor-pointer" onClick={() => {}}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">set a score goal</h3>
              <p className="text-xs text-slate-500">
                we will tell you how to reach the goal
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" />
        </Card>

        {/* Milestones */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xs font-bold text-slate-500 tracking-widest uppercase">
              Milestones
            </h3>
            <button className="text-xs font-medium text-slate-500 underline decoration-slate-300 hover:text-slate-800">
              view all
            </button>
          </div>

          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6">
            <MilestoneBadge type="elevated" label="elevated" delay={0.1} />
            <MilestoneBadge type="summit" label="summit" delay={0.2} />
            <MilestoneBadge type="800club" label="800 club" delay={0.3} />
            <MilestoneBadge type="locked" label="locked" delay={0.4} />
            <MilestoneBadge type="locked" label="locked" delay={0.5} />
          </div>
        </div>

        {/* Credit Accounts */}
        <div className="mb-8">
          <h3 className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-6">
            Your Credit Accounts
          </h3>

          <div className="bg-white rounded-2xl">
            <AccountCard bankName="HDFC Bank" loanType="auto loan" accountNumber="5436" amount="₹4,34,600" logoColor="bg-red-500" delay={0.1} />
            <AccountCard bankName="Axis Bank" loanType="home loan" accountNumber="8973" amount="₹21,56,000" logoColor="bg-pink-700" delay={0.2} />
          </div>
        </div>
      </main>
    </div>;
}