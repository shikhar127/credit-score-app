import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RefreshCw, Check } from 'lucide-react';

interface FreeUserRefreshSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onExplorePlans: () => void;
}

export function FreeUserRefreshSheet({
  isOpen,
  onClose,
  onExplorePlans
}: FreeUserRefreshSheetProps) {
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
              <p className="text-slate-700 mb-6 leading-relaxed">
                Credit score refreshes are available with our paid plans. Upgrade to access fresh credit score updates and premium features.
              </p>

              {/* Benefits */}
              <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3">What you'll get:</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Get fresh credit score updates</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Real-time CIBIL alerts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">AI credit advisor</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Credit score simulations</span>
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
