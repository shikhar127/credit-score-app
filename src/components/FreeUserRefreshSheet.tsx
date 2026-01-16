import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RefreshCw, Check, Zap } from 'lucide-react';

interface FreeUserRefreshSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onExplorePlans: () => void;
  lastRefreshDate: string;
}

export function FreeUserRefreshSheet({
  isOpen,
  onClose,
  onExplorePlans,
  lastRefreshDate
}: FreeUserRefreshSheetProps) {
  // Calculate days until next free refresh
  const calculateDaysUntilNextRefresh = () => {
    const lastRefresh = new Date(lastRefreshDate);
    const nextRefresh = new Date(lastRefresh);
    nextRefresh.setDate(nextRefresh.getDate() + 30); // 30 days from last refresh

    const today = new Date();
    const daysRemaining = Math.ceil((nextRefresh.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    return Math.max(daysRemaining, 0);
  };

  const daysUntilNextRefresh = calculateDaysUntilNextRefresh();
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Bottom Sheet */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 max-h-[80vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="relative p-6 pb-4 border-b border-slate-100">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-slate-700" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Refresh Your Credit Score</h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-slate-700 mb-2 leading-relaxed">
                Your next <span className="font-semibold text-slate-900">free refresh</span> is available in{' '}
                <span className="font-bold text-orange-600">{daysUntilNextRefresh} days</span>.
              </p>

              <p className="text-slate-600 text-sm mb-6">
                Free users get one credit score refresh every 30 days.
              </p>

              {/* Quick Check Offer */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 mb-4 border border-emerald-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-900 mb-1">Need to refresh now?</h3>
                    <p className="text-sm text-emerald-800 mb-3">
                      Get instant access for just <span className="font-bold">₹49</span> with Quick Check
                    </p>
                    <ul className="text-xs text-emerald-700 space-y-1">
                      <li>• Instant CIBIL report access</li>
                      <li>• View updated credit score right away</li>
                      <li>• See all your credit accounts</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pro Plans Info */}
              <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2 text-sm">Or upgrade to Pro for unlimited refreshes:</h3>
                <div className="space-y-1.5">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700">Refresh every 30 days as a Pro member</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700">Real-time CIBIL alerts & AI advisor</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700">Credit score simulations & insights</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onExplorePlans}
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-sm shadow-lg hover:bg-slate-800 transition-colors"
              >
                Explore All Plans
              </motion.button>

              <p className="text-xs text-slate-500 text-center mt-4">
                Choose from Quick Check (₹49), Monthly Pro (₹129/mo), or Annual Pro (₹999/yr)
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
