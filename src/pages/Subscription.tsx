import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Bell, RefreshCw, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';
interface SubscriptionProps {
  onBackClick: () => void;
  onStartSubscription: () => void;
}
export function Subscription({
  onBackClick,
  onStartSubscription
}: SubscriptionProps) {
  return <div className="min-h-screen bg-white pb-32">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-50">
        <button onClick={onBackClick} className="p-2 -ml-2 hover:bg-slate-50 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-slate-800" />
        </button>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
          <div className="w-4 h-4 rounded-full bg-slate-900 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
          <span className="text-xs font-bold text-slate-800">Cred Score Pro</span>
        </div>
      </header>

      <main className="px-6 max-w-lg mx-auto pt-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <motion.div initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          duration: 0.5
        }} className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-100">
            <ShieldCheck className="w-3 h-3" />
            Premium Protection
          </motion.div>

          <motion.h1 initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          delay: 0.1
        }} className="text-4xl text-slate-900 leading-tight mb-4 font-serif font-bold">
            Upgrade to <span className="italic text-emerald-600">Pro</span>
          </motion.h1>

          <motion.p initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          delay: 0.2
        }} className="text-slate-500 text-lg leading-relaxed max-w-xs mx-auto">
            Take full control of your financial health with real-time insights.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="space-y-6 mb-12">
          <FeatureCard icon={<Bell className="w-6 h-6" />} title="Real-Time CIBIL Alerts" features={['Instant credit score changes', 'New or modified account alerts to help prevent potential fraud and identity theft']} delay={0.3} highlight={true} />

          <FeatureCard icon={<RefreshCw className="w-6 h-6" />} title="Unlimited Refresh" description="Check your score as often as you like. No monthly restrictions or waiting periods." delay={0.4} />

          <FeatureCard icon={<Sparkles className="w-6 h-6" />} title="AI Credit Advisor" features={['Ask questions and get answers to all your credit-related questions', 'Debt management strategies']} delay={0.5} />
        </div>

        {/* Trust Signals */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.6
      }} className="flex items-center justify-center gap-6 text-slate-400 mb-8">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            No hidden fees
          </div>
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            Cancel anytime
          </div>
        </motion.div>
      </main>

      {/* Fixed Pricing Footer */}
      <motion.div initial={{
      y: 100
    }} animate={{
      y: 0
    }} transition={{
      delay: 0.8,
      type: 'spring',
      stiffness: 200,
      damping: 25
    }} className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-6 pb-8 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
        <div className="max-w-lg mx-auto flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500 font-medium line-through">
              ₹999/mo
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-slate-900">₹499</span>
              <span className="text-sm text-slate-500 font-medium">/month</span>
            </div>
          </div>

          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={onStartSubscription} className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-sm shadow-lg shadow-slate-200 flex-1">
            Start Subscription
          </motion.button>
        </div>
      </motion.div>
    </div>;
}