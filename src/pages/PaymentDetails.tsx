import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Lock, Calendar, User } from 'lucide-react';
import { Card } from '../components/ui/Card';
interface PaymentDetailsProps {
  onBackClick: () => void;
  onConfirmPayment: () => void;
}
export function PaymentDetails({
  onBackClick,
  onConfirmPayment
}: PaymentDetailsProps) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
    return formatted.substring(0, 19);
  };
  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.substring(0, 2) + '/' + cleaned.substring(2, 4);
    }
    return cleaned;
  };
  return <div className="min-h-screen bg-white pb-32">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-50">
        <button onClick={onBackClick} className="p-2 -ml-2 hover:bg-slate-50 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-slate-800" />
        </button>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
          <div className="w-4 h-4 rounded-full bg-slate-900 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
          <span className="text-xs font-bold text-slate-800">Cred Score Pro</span>
        </div>
      </header>

      <main className="px-6 max-w-lg mx-auto pt-8">
        {/* Header */}
        <div className="mb-8">
          <motion.h1 initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} className="text-3xl font-serif font-bold text-slate-900 mb-2">
            Payment Details
          </motion.h1>
          <motion.p initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          delay: 0.1
        }} className="text-slate-500">
            Enter your card information to complete subscription
          </motion.p>
        </div>

        {/* Order Summary */}
        <motion.div initial={{
        y: 20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        delay: 0.2
      }}>
          <Card className="p-6 mb-6 bg-emerald-50/50 border-emerald-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-600 font-medium">Foresight Pro</span>
              <span className="text-slate-900 font-bold">₹499/mo</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Billed monthly</span>
              <span className="text-emerald-600 font-semibold">Save 50%</span>
            </div>
          </Card>
        </motion.div>

        {/* Payment Form */}
        <motion.div initial={{
        y: 20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        delay: 0.3
      }} className="space-y-4 mb-6">
          {/* Card Number */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Card Number
            </label>
            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input type="text" value={cardNumber} onChange={e => setCardNumber(formatCardNumber(e.target.value))} placeholder="1234 5678 9012 3456" className="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" maxLength={19} />
            </div>
          </div>

          {/* Expiry and CVV */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Expiry Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input type="text" value={expiryDate} onChange={e => setExpiryDate(formatExpiryDate(e.target.value))} placeholder="MM/YY" className="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" maxLength={5} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                CVV
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input type="text" value={cvv} onChange={e => setCvv(e.target.value.replace(/\D/g, '').substring(0, 3))} placeholder="123" className="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" maxLength={3} />
              </div>
            </div>
          </div>

          {/* Cardholder Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Cardholder Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Aaron Smith" className="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
            </div>
          </div>
        </motion.div>

        {/* Security Notice */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.5
      }} className="flex items-center gap-2 text-xs text-slate-500 mb-8 bg-slate-50 p-4 rounded-xl">
          <Lock className="w-4 h-4 text-slate-400" />
          <span>Your payment information is encrypted and secure</span>
        </motion.div>
      </main>

      {/* Fixed Payment Button */}
      <motion.div initial={{
      y: 100
    }} animate={{
      y: 0
    }} transition={{
      delay: 0.6,
      type: 'spring',
      stiffness: 200,
      damping: 25
    }} className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-6 pb-8 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
        <div className="max-w-lg mx-auto">
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={onConfirmPayment} className="w-full bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-sm shadow-lg shadow-slate-200 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" />
            Confirm Payment - ₹499
          </motion.button>
        </div>
      </motion.div>
    </div>;
}