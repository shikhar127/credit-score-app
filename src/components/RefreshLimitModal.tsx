import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Zap } from 'lucide-react';

interface RefreshLimitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExplorePlans: () => void;
  daysUntilNextRefresh: number;
}

export function RefreshLimitModal({
  isOpen,
  onClose,
  onExplorePlans,
  daysUntilNextRefresh
}: RefreshLimitModalProps) {
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

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
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
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Refresh Limit Reached</h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-slate-700 mb-4 leading-relaxed">
                Your next <span className="font-semibold text-slate-900">free refresh</span> will be available in{' '}
                <span className="font-bold text-orange-600">{daysUntilNextRefresh} days</span>.
              </p>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Pro members get one free refresh every 30 days to help you track your credit score progress.
              </p>

              {/* One-time Offer */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 mb-6 border border-emerald-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-900 mb-1">Need to refresh now?</h3>
                    <p className="text-sm text-emerald-800 mb-3">
                      Unlock a one-time refresh for just <span className="font-bold">₹49</span>
                    </p>
                    <ul className="text-xs text-emerald-700 space-y-1">
                      <li>• Instant CIBIL report access</li>
                      <li>• View updated credit score</li>
                      <li>• See all credit accounts</li>
                    </ul>
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
                Explore Plans
              </motion.button>

              <p className="text-xs text-slate-500 text-center mt-4">
                Choose from Quick Check, Monthly Pro, or Annual Pro
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
