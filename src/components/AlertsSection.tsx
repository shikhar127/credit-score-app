import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { Card } from './ui/Card';

const ALERTS = [
  {
    id: 1,
    type: 'New Account',
    message: "A new account was opened in your name. If you didn't apply for this, review your credit report immediately.",
    icon: '🏦',
  },
  {
    id: 2,
    type: 'New Address',
    message: "A new address was added to your credit file. If you didn't move recently, verify this activity now.",
    icon: '📍',
  },
  {
    id: 3,
    type: 'New Inquiry',
    message: "A new credit inquiry was detected. If you didn't apply for credit recently, please check your account.",
    icon: '🔍',
  },
  {
    id: 4,
    type: 'New Phone',
    message: "A new phone number was linked to your profile. Please confirm this update is correct.",
    icon: '📱',
  },
  {
    id: 5,
    type: 'New Utilization Reporting',
    message: 'Your credit utilization has changed. Log in to see how this update affects your score.',
    icon: '📊',
  },
];

export function AlertsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-4 md:mb-6">
      {/* Alert Header - Clickable */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full"
      >
        <Card className="p-3 md:p-4 flex items-center justify-between group cursor-pointer bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <Bell className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-slate-900 text-xs md:text-sm flex items-center gap-1.5 md:gap-2">
                CIBIL Alerts
                <span className="px-1.5 md:px-2 py-0.5 bg-orange-600 text-white text-[9px] md:text-[10px] font-bold rounded-full">
                  {ALERTS.length}
                </span>
              </h3>
              <p className="text-[10px] md:text-xs text-slate-600">
                {isExpanded ? 'Click to hide alerts' : 'Click to view all alerts'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-slate-600" />
            ) : (
              <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-slate-600" />
            )}
          </div>
        </Card>
      </motion.button>

      {/* Alerts List - Expandable */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-2 md:mt-3 space-y-1.5 md:space-y-2">
              {ALERTS.map((alert, index) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-3 md:p-4 border-l-3 md:border-l-4 border-l-orange-500 bg-white hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="text-xl md:text-2xl shrink-0 mt-0.5">{alert.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 text-xs md:text-sm mb-0.5 md:mb-1 flex items-center gap-1.5 md:gap-2">
                          {alert.type}
                          <AlertCircle className="w-3 h-3 md:w-3.5 md:h-3.5 text-orange-500" />
                        </h4>
                        <p className="text-[10px] md:text-xs text-slate-600 leading-relaxed">
                          {alert.message}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
