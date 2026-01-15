import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, RefreshCw, Sparkles, ShieldCheck } from 'lucide-react';

interface ProPitchBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onStartSubscription: () => void;
}

export function ProPitchBottomSheet({ isOpen, onClose, onStartSubscription }: ProPitchBottomSheetProps) {
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 max-h-[85vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>

            {/* Content */}
            <div className="px-6 pt-8 pb-8">
              {/* Badge */}
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-100">
                  <ShieldCheck className="w-3 h-3" />
                  Premium Protection
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl text-slate-900 font-bold text-center mb-3">
                Unlock <span className="italic text-emerald-600">Pro</span> Features
              </h2>

              <p className="text-slate-500 text-center text-sm mb-6 max-w-sm mx-auto">
                Get real-time alerts and unlimited access to protect your credit health
              </p>

              {/* Features */}
              <div className="space-y-4 mb-6">
                {/* Feature 1 */}
                <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                    <Bell className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">Real-Time CIBIL Alerts</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Get instant notifications when your credit score changes or new accounts are opened
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <RefreshCw className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">Unlimited Refresh</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Check your score as often as you like with no restrictions
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">AI Credit Advisor</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Get personalized answers to your credit questions and debt strategies
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing Teaser */}
              <div className="bg-slate-50 rounded-xl p-4 mb-6 text-center border border-slate-200">
                <p className="text-xs text-slate-500 font-medium mb-2">Flexible Plans Available</p>
                <div className="flex items-center justify-center gap-3 text-xs">
                  <div>
                    <span className="font-bold text-slate-900">₹49</span>
                    <span className="text-slate-500"> one-time</span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <div>
                    <span className="font-bold text-slate-900">₹129</span>
                    <span className="text-slate-500">/month</span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <div>
                    <span className="font-bold text-emerald-600">₹999</span>
                    <span className="text-slate-500">/year</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2">+ GST • Cancel anytime</p>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onStartSubscription}
                className="w-full bg-slate-900 text-white px-6 py-4 rounded-xl font-bold text-sm shadow-lg"
              >
                View Plans
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
