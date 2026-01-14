import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
interface ScoreGaugeProps {
  creditScore: number;
}
export function ScoreGauge({ creditScore }: ScoreGaugeProps) {
  // SVG configuration
  const size = 320;
  const strokeWidth = 6;
  const center = size / 2;
  const radius = (size - strokeWidth) / 2 - 20;
  // Arc calculation (approx 260 degrees)
  const startAngle = 140;
  const endAngle = 400;
  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };
  const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    const d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ');
    return d;
  };
  return <div className="relative flex flex-col items-center justify-center py-4 md:py-8">
      <div className="relative z-10 w-full max-w-[240px] md:max-w-[320px] aspect-square">
        <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
          <defs>
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF9B6B" />
              <stop offset="50%" stopColor="#FFD56B" />
              <stop offset="100%" stopColor="#00D26A" />
            </linearGradient>
          </defs>

          {/* Background Track */}
          <path d={describeArc(center, center, radius, startAngle, endAngle)} fill="none" stroke="#f1f5f9" strokeWidth={strokeWidth} strokeLinecap="round" />

          {/* Progress Arc */}
          <motion.path d={describeArc(center, center, radius, startAngle, endAngle)} fill="none" stroke="url(#scoreGradient)" strokeWidth={strokeWidth} strokeLinecap="round" initial={{
          pathLength: 0
        }} animate={{
          pathLength: 1
        }} transition={{
          duration: 1.2,
          ease: 'easeOut'
        }} />
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
          {/* Change Indicator */}
          <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }} className="flex items-center gap-0.5 md:gap-1 text-orange-500 font-semibold mb-1 md:mb-2">
            <span className="text-base md:text-lg">27</span>
            <ArrowDown className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </motion.div>

          {/* Main Score - Simplified */}
          <motion.div initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          delay: 0.2,
          type: 'spring',
          stiffness: 200
        }} className="relative">
            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 tracking-tight">
              {creditScore}
            </h1>
          </motion.div>

          {/* CIBIL Label */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.6
        }} className="mt-2 md:mt-4">
            <span className="text-blue-400 font-semibold tracking-wider text-xs md:text-sm">
              CIBIL
            </span>
          </motion.div>
        </div>

        {/* Range Labels */}
        <div className="absolute bottom-8 md:bottom-12 left-0 text-gray-400 font-medium text-xs md:text-sm">
          300
        </div>
        <div className="absolute bottom-8 md:bottom-12 right-0 text-gray-400 font-medium text-xs md:text-sm">
          900
        </div>
      </div>
    </div>;
}