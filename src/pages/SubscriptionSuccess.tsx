import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Bell, RefreshCw, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/Card';
interface SubscriptionSuccessProps {
  onContinue: () => void;
}
export function SubscriptionSuccess({
  onContinue
}: SubscriptionSuccessProps) {
  return <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-center px-6 py-4 md:py-6 border-b border-slate-50">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
          <div className="w-4 h-4 rounded-full bg-slate-900 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
          <span className="text-xs font-bold text-slate-800">foresight</span>
        </div>
      </header>

      <main className="flex-1 px-6 max-w-lg mx-auto flex flex-col items-center justify-center py-6 md:py-12">
        {/* Success Icon */}
        <motion.div initial={{
        scale: 0
      }} animate={{
        scale: 1
      }} transition={{
        type: 'spring',
        stiffness: 200,
        damping: 15
      }} className="mb-4 md:mb-8">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-200">
            <CheckCircle2 className="w-8 h-8 md:w-12 md:h-12 text-white" />
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.div initial={{
        y: 20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        delay: 0.2
      }} className="text-center mb-4 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2 md:mb-3">
            Welcome to <span className="italic text-emerald-600">Pro</span>!
          </h1>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed">
            Your subscription is now active. Enjoy all premium features.
          </p>
        </motion.div>

        {/* Features Unlocked */}
        <motion.div initial={{
        y: 20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        delay: 0.3
      }} className="w-full space-y-2 md:space-y-3 mb-4 md:mb-8">
          <Card className="p-3 md:p-4 flex items-center gap-3 md:gap-4 border-emerald-100 bg-emerald-50/30">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
              <Bell className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-xs md:text-sm">
                Real-Time Alerts
              </h3>
              <p className="text-[10px] md:text-xs text-slate-500">
                Get instant notifications
              </p>
            </div>
            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 ml-auto" />
          </Card>

          <Card className="p-3 md:p-4 flex items-center gap-3 md:gap-4 border-emerald-100 bg-emerald-50/30">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
              <RefreshCw className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-xs md:text-sm">
                Unlimited Refresh
              </h3>
              <p className="text-[10px] md:text-xs text-slate-500">Check score anytime</p>
            </div>
            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 ml-auto" />
          </Card>

          <Card className="p-3 md:p-4 flex items-center gap-3 md:gap-4 border-emerald-100 bg-emerald-50/30">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-xs md:text-sm">
                AI Credit Advisor
              </h3>
              <p className="text-[10px] md:text-xs text-slate-500">
                Get personalized guidance
              </p>
            </div>
            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 ml-auto" />
          </Card>
        </motion.div>

        {/* Next Steps - Hidden on mobile to keep CTA visible */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.5
      }} className="w-full hidden md:block">
          <Card className="p-6 bg-slate-50 border-slate-200">
            <h3 className="font-bold text-slate-900 mb-3 text-sm">
              What's Next?
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 shrink-0" />
                <span>Check your email for subscription confirmation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 shrink-0" />
                <span>Explore your dashboard with new Pro features</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 shrink-0" />
                <span>Set up alerts in your notification preferences</span>
              </li>
            </ul>
          </Card>
        </motion.div>
      </main>

      {/* Fixed Continue Button */}
      <motion.div initial={{
      y: 100
    }} animate={{
      y: 0
    }} transition={{
      delay: 0.7,
      type: 'spring',
      stiffness: 200,
      damping: 25
    }} className="border-t border-slate-100 p-4 md:p-6 pb-6 md:pb-8 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
        <div className="max-w-lg mx-auto">
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={onContinue} className="w-full bg-slate-900 text-white px-8 py-3 md:py-4 rounded-xl font-bold text-sm shadow-lg shadow-slate-200 flex items-center justify-center gap-2">
            Continue to Dashboard
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </div>;
}