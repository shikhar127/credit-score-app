import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
interface MilestoneBadgeProps {
  type: 'elevated' | 'summit' | '800club' | 'locked';
  label: string;
  delay?: number;
}
export function MilestoneBadge({
  type,
  label,
  delay = 0
}: MilestoneBadgeProps) {
  const getBadgeStyle = () => {
    switch (type) {
      case 'elevated':
        return 'bg-gradient-to-br from-emerald-100 to-emerald-200 border-emerald-300';
      case 'summit':
        return 'bg-gradient-to-br from-cyan-100 to-cyan-200 border-cyan-300';
      case '800club':
        return 'bg-gradient-to-br from-yellow-100 to-yellow-300 border-yellow-400 shadow-yellow-200';
      case 'locked':
      default:
        return 'bg-slate-100 border-slate-200';
    }
  };
  const getIcon = () => {
    switch (type) {
      case 'elevated':
        return <div className="w-full h-full flex items-center justify-center relative overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full m-1" />
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-emerald-600 fill-current" style={{
            filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.1))'
          }}>
              <path d="M12 2L2 22h20L12 2zm0 4l6 12H6l6-12z" />
            </svg>
          </div>;
      case 'summit':
        return <div className="w-full h-full flex items-center justify-center relative overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full m-1" />
            <span className="text-xl font-serif font-bold text-cyan-700">
              12
            </span>
          </div>;
      case '800club':
        return <div className="w-full h-full flex items-center justify-center relative overflow-hidden rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 border-2 border-yellow-200 shadow-inner">
            <div className="text-center">
              <div className="text-xs font-bold text-yellow-900 leading-none">
                800
              </div>
              <div className="text-[8px] font-bold text-yellow-800 uppercase tracking-wider">
                Club
              </div>
            </div>
          </div>;
      default:
        return <div className="w-full h-full flex items-center justify-center text-slate-300">
            <Lock className="w-6 h-6" />
          </div>;
    }
  };
  return <motion.div initial={{
    opacity: 0,
    x: 20
  }} animate={{
    opacity: 1,
    x: 0
  }} transition={{
    delay
  }} className="flex flex-col items-center gap-2 min-w-[80px]">
      <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center shadow-lg relative ${getBadgeStyle()}`}>
        {/* Shine effect */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/60 to-transparent rounded-t-full pointer-events-none" />
        {getIcon()}
      </div>
      <span className="text-xs font-medium text-slate-600 capitalize">
        {label}
      </span>
    </motion.div>;
}