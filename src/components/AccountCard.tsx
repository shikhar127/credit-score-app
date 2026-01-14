import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
interface AccountCardProps {
  bankName: string;
  loanType: string;
  accountNumber: string;
  amount: string;
  logoColor: string;
  delay?: number;
}
export function AccountCard({
  bankName,
  loanType,
  accountNumber,
  amount,
  logoColor,
  delay = 0
}: AccountCardProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    delay
  }} className="flex items-center justify-between py-4 border-b border-slate-100 last:border-0 group cursor-pointer">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl ${logoColor} flex items-center justify-center text-white font-bold shadow-sm`}>
          {/* Simplified Logo Placeholder */}
          <div className="w-6 h-6 border-2 border-white rounded-sm" />
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 capitalize">
            {loanType}
          </h4>
          <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">
            {bankName} <span className="mx-1 text-slate-300">••</span>{' '}
            {accountNumber}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="font-bold text-slate-900">{amount}</span>
        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
      </div>
    </motion.div>;
}