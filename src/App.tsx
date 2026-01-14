import React, { useState } from 'react';
import { CreditScore } from './pages/CreditScore';
import { Subscription } from './pages/Subscription';
import { PaymentDetails } from './pages/PaymentDetails';
import { SubscriptionSuccess } from './pages/SubscriptionSuccess';
type Page = 'score' | 'subscription' | 'payment' | 'success';
export function App() {
  const [currentPage, setCurrentPage] = useState<Page>('score');
  return <>
      {currentPage === 'score' && <CreditScore onUpgradeClick={() => setCurrentPage('subscription')} />}
      {currentPage === 'subscription' && <Subscription onBackClick={() => setCurrentPage('score')} onStartSubscription={() => setCurrentPage('payment')} />}
      {currentPage === 'payment' && <PaymentDetails onBackClick={() => setCurrentPage('subscription')} onConfirmPayment={() => setCurrentPage('success')} />}
      {currentPage === 'success' && <SubscriptionSuccess onContinue={() => setCurrentPage('score')} />}
    </>;
}