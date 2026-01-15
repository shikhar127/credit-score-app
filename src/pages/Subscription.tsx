import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Zap, TrendingUp, Crown } from 'lucide-react';

interface SubscriptionProps {
  onBackClick: () => void;
  onStartSubscription: () => void;
}

export function Subscription({
  onBackClick,
  onStartSubscription
}: SubscriptionProps) {
  const [selectedTier, setSelectedTier] = useState<'one-time' | 'monthly' | 'annual'>('annual');

  const tiers = [
    {
      id: 'one-time' as const,
      name: 'Quick Check',
      price: '49',
      period: 'one-time',
      description: 'For a one-time credit check',
      icon: <Zap className="w-5 h-5" />,
      color: 'slate',
      features: [
        'Instant CIBIL credit report access',
        'View your current credit score',
        'See all your credit accounts',
      ],
    },
    {
      id: 'monthly' as const,
      name: 'Monthly Pro',
      price: '129',
      period: 'month',
      description: 'For active credit management',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'emerald',
      popular: true,
      features: [
        'Everything in Quick Check',
        'Daily CIBIL report refresh',
        'Real-time CIBIL alerts',
        'AI credit advisor',
        'Credit score simulations',
      ],
    },
    {
      id: 'annual' as const,
      name: 'Annual Pro',
      price: '999',
      period: 'year',
      savings: 'Save ₹549 annually',
      description: 'Best value for long-term planning',
      icon: <Crown className="w-5 h-5" />,
      color: 'purple',
      bestValue: true,
      features: [
        'Everything in Monthly Pro',
        'Just ₹83/month',
        'Unlimited daily refreshes',
        'Priority support',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-24">
      {/* Header */}
      <header className="flex items-center justify-between px-4 md:px-6 py-4 md:py-6 sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <button onClick={onBackClick} className="p-2 -ml-2 hover:bg-slate-50 rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-slate-800" />
        </button>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
          <div className="w-4 h-4 rounded-full bg-slate-900 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
          <span className="text-xs font-bold text-slate-800">Cred Score Pro</span>
        </div>
      </header>

      <main className="px-4 md:px-6 max-w-4xl mx-auto pt-6 md:pt-8">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl md:text-3xl text-slate-900 font-bold mb-2"
          >
            Choose Your Plan
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-sm md:text-base"
          >
            Select the option that fits your needs
          </motion.p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              onClick={() => setSelectedTier(tier.id)}
              className={`relative cursor-pointer transition-all ${
                selectedTier === tier.id
                  ? 'scale-[1.02] shadow-lg'
                  : 'hover:shadow-md'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full">
                  Popular
                </div>
              )}
              {tier.bestValue && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">
                  Best Value
                </div>
              )}

              <div
                className={`p-5 md:p-6 rounded-2xl border-2 transition-all ${
                  selectedTier === tier.id
                    ? `border-${tier.color}-500 bg-${tier.color}-50`
                    : 'border-slate-200 bg-white'
                }`}
              >
                {/* Icon & Name */}
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-10 h-10 rounded-full bg-${tier.color}-100 flex items-center justify-center text-${tier.color}-600`}>
                    {tier.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{tier.name}</h3>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-3">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-bold text-slate-900">₹{tier.price}</span>
                    <span className="text-sm text-slate-500">+ GST</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    {tier.period === 'one-time' ? 'One-time payment' : `per ${tier.period}`}
                  </p>
                  {tier.savings && (
                    <p className="text-xs text-emerald-600 font-bold mt-1">{tier.savings}</p>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 mb-4">{tier.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-slate-500 mb-8"
        >
          <p>Prices exclude GST • Secure payment • Cancel anytime</p>
        </motion.div>
      </main>

      {/* Fixed CTA Footer */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 25 }}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 md:p-6 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]"
      >
        <div className="max-w-4xl mx-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStartSubscription}
            className="w-full bg-slate-900 text-white px-6 py-4 rounded-xl font-bold text-sm shadow-lg"
          >
            Continue with {tiers.find(t => t.id === selectedTier)?.name}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}