import React from 'react';
import { motion } from 'framer-motion';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
export function Card({
  children,
  className = '',
  onClick
}: CardProps) {
  return <motion.div whileHover={onClick ? {
    y: -2,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
  } : {}} transition={{
    type: 'spring',
    stiffness: 300,
    damping: 20
  }} className={`bg-white rounded-2xl shadow-sm border border-slate-100 ${className}`} onClick={onClick}>
      {children}
    </motion.div>;
}