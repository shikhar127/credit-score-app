import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Card } from './ui/Card';
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  features?: string[];
  delay?: number;
  highlight?: boolean;
}
export function FeatureCard({
  icon,
  title,
  description,
  features,
  delay = 0,
  highlight = false
}: FeatureCardProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    delay,
    duration: 0.5
  }} className="h-full">
      <Card className={`p-6 h-full flex flex-col ${highlight ? 'border-emerald-200 bg-emerald-50/30' : ''}`}>
        <div className="flex items-start gap-4 mb-4">
          <div className={`p-3 rounded-xl flex items-center justify-center shrink-0 ${highlight ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-600'}`}>
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
            {description && <p className="text-sm text-slate-500 leading-relaxed">
                {description}
              </p>}
          </div>
        </div>

        {features && features.length > 0 && <ul className="space-y-3 mt-2 pl-14">
            {features.map((feature, index) => <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>)}
          </ul>}
      </Card>
    </motion.div>;
}