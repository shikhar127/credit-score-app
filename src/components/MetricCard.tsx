import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Card } from './ui/Card';
interface MetricCardProps {
  title: string;
  value: string;
  status: string;
  description: string;
  percentage: number;
  delay?: number;
}
export function MetricCard({
  title,
  value,
  status,
  description,
  percentage,
  delay = 0
}: MetricCardProps) {
  // Simple semi-circle arc
  const radius = 80;
  const circumference = Math.PI * radius; // Half circle
  const strokeDashoffset = circumference - percentage / 100 * circumference;
  return <Card className="p-6 relative overflow-hidden h-full flex flex-col justify-between group cursor-pointer" onClick={() => {}}>
      <div className="relative z-10">
        <h3 className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-1">
          {title}
        </h3>
        <p className="text-2xl font-serif text-emerald-500 font-medium mb-6">
          {status}
        </p>

        <div className="relative flex justify-center mb-4">
          {/* Semi-circle Gauge */}
          <div className="w-40 h-20 overflow-hidden relative">
            <svg viewBox="0 0 200 100" className="w-full h-full">
              {/* Background Track */}
              <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#f0fdf4" strokeWidth="4" />

              {/* Progress */}
              <motion.path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#34d399" strokeWidth="4" strokeDasharray={circumference} // Full length
            strokeDashoffset={circumference} // Start hidden
            animate={{
              strokeDashoffset: strokeDashoffset
            }} transition={{
              duration: 1.5,
              delay: delay + 0.5,
              ease: 'easeOut'
            }} strokeLinecap="round" />

              {/* Gradient Fill (Optional, for the glow effect) */}
              <defs>
                <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(52, 211, 153, 0.2)" />
                  <stop offset="100%" stopColor="rgba(52, 211, 153, 0)" />
                </linearGradient>
              </defs>
              <motion.path d="M 20 100 A 80 80 0 0 1 180 100" fill="url(#greenGradient)" stroke="none" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: delay + 0.8
            }} />
            </svg>

            {/* Value Text */}
            <div className="absolute bottom-0 left-0 right-0 text-center">
              <span className="text-3xl font-bold text-slate-800">{value}</span>
              <span className="text-sm text-slate-500 ml-0.5">%</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-600 text-center leading-tight mb-4 px-2">
          {description}
        </p>
      </div>

      <div className="flex justify-center">
        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
      </div>
    </Card>;
}