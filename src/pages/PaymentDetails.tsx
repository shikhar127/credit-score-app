import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Lock, Smartphone, Calendar, User } from 'lucide-react';
import { Card } from '../components/ui/Card';

interface PaymentDetailsProps {
  selectedTier: 'one-time' | 'monthly' | 'annual';
  onBackClick: () => void;
  onConfirmPayment: () => void;
}

const tierDetails = {
  'one-time': {
    name: 'Quick Check',
    price: '49',
    period: 'one-time',
    billing: 'One-time payment',
    gst: '8.82',
    total: '57.82',
  },
  'monthly': {
    name: 'Monthly Pro',
    price: '129',
    period: 'month',
    billing: 'Billed monthly via UPI AutoPay',
    gst: '23.22',
    total: '152.22',
  },
  'annual': {
    name: 'Annual Pro',
    price: '999',
    period: 'year',
    billing: 'Billed annually via UPI AutoPay',
    gst: '179.82',
    total: '1178.82',
  },
};

export function PaymentDetails({
  selectedTier,
  onBackClick,
  onConfirmPayment
}: PaymentDetailsProps) {
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card'>(
    selectedTier === 'one-time' ? 'card' : 'upi'
  );
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const tier = tierDetails[selectedTier];
  const isSubscription = selectedTier !== 'one-time';

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

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Header */}
      <header className="flex items-center justify-between px-4 md:px-6 py-3 md:py-6 sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-50">
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

      <main className="px-4 md:px-6 max-w-lg mx-auto pt-6 md:pt-8">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-2"
          >
            Payment Details
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-sm"
          >
            {isSubscription
              ? 'Set up UPI AutoPay for your subscription'
              : 'Choose your payment method'}
          </motion.p>
        </div>

        {/* Order Summary */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-4 md:p-5 mb-6 bg-gradient-to-r from-emerald-50 to-emerald-50/50 border-emerald-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-700 font-semibold text-sm">{tier.name}</span>
              <span className="text-slate-900 font-bold">
                ₹{tier.price}{tier.period !== 'one-time' && `/${tier.period}`}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
              <span>Base amount</span>
              <span>₹{tier.price}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-600 mb-2 pb-2 border-b border-emerald-200">
              <span>GST (18%)</span>
              <span>₹{tier.gst}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 font-bold text-sm">Total Amount</span>
              <span className="text-emerald-600 font-bold text-lg">₹{tier.total}</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">{tier.billing}</p>
          </Card>
        </motion.div>

        {/* Payment Method Selection (One-time only) */}
        {!isSubscription && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Payment Method
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setPaymentMethod('card')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  paymentMethod === 'card'
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <CreditCard className={`w-6 h-6 mx-auto mb-2 ${
                  paymentMethod === 'card' ? 'text-emerald-600' : 'text-slate-400'
                }`} />
                <p className="text-xs font-semibold text-slate-900">Card</p>
              </button>
              <button
                onClick={() => setPaymentMethod('upi')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  paymentMethod === 'upi'
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <Smartphone className={`w-6 h-6 mx-auto mb-2 ${
                  paymentMethod === 'upi' ? 'text-emerald-600' : 'text-slate-400'
                }`} />
                <p className="text-xs font-semibold text-slate-900">UPI</p>
              </button>
            </div>
          </motion.div>
        )}

        {/* UPI Form (for subscriptions or when UPI is selected) */}
        {(isSubscription || paymentMethod === 'upi') && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 mb-6"
          >
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                UPI ID {isSubscription && '(for AutoPay)'}
              </label>
              <div className="relative">
                <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="yourname@paytm"
                  className="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {isSubscription && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-xs text-blue-900 font-semibold mb-1">UPI AutoPay Mandate</p>
                <p className="text-xs text-blue-700 leading-relaxed">
                  You'll approve a one-time mandate of ₹{tier.total} on your UPI app.
                  Future payments will be auto-debited {selectedTier === 'monthly' ? 'monthly' : 'annually'}.
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* Card Form (for one-time when card is selected) */}
        {!isSubscription && paymentMethod === 'card' && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 mb-6"
          >
            {/* Card Number */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Card Number
              </label>
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                  placeholder="1234 5678 9012 3456"
                  className="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  maxLength={19}
                />
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
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                    placeholder="MM/YY"
                    className="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    maxLength={5}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  CVV
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').substring(0, 3))}
                    placeholder="123"
                    className="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    maxLength={3}
                  />
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
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Aaron Smith"
                  className="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2 text-xs text-slate-500 mb-8 bg-slate-50 p-4 rounded-xl"
        >
          <Lock className="w-4 h-4 text-slate-400" />
          <span>Your payment information is encrypted and secure</span>
        </motion.div>
      </main>

      {/* Fixed Payment Button */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 25 }}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-4 md:p-6 pb-6 md:pb-8 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]"
      >
        <div className="max-w-lg mx-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onConfirmPayment}
            className="w-full bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-sm shadow-lg shadow-slate-200 flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4" />
            {isSubscription ? 'Set up AutoPay' : 'Confirm Payment'} - ₹{tier.total}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
