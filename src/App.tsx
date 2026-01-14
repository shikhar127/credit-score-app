import React, { useState } from 'react';
import { CreditScore } from './pages/CreditScore';
import { Subscription } from './pages/Subscription';
import { PaymentDetails } from './pages/PaymentDetails';
import { SubscriptionSuccess } from './pages/SubscriptionSuccess';
import { InstallPrompt } from './components/InstallPrompt';
type Page = 'score' | 'subscription' | 'payment' | 'success';
export function App() {
  const [currentPage, setCurrentPage] = useState<Page>('score');
  const [isPro, setIsPro] = useState(false);
  const [lastRefreshDate, setLastRefreshDate] = useState<string>('2024-08-03');

  const handleProUpgrade = () => {
    setIsPro(true);
    setCurrentPage('score');
  };

  const handleRefresh = () => {
    const today = new Date().toISOString().split('T')[0];
    setLastRefreshDate(today);
  };

  return <>
      <InstallPrompt />
      {currentPage === 'score' && <CreditScore
        onUpgradeClick={() => setCurrentPage('subscription')}
        isPro={isPro}
        lastRefreshDate={lastRefreshDate}
        onRefresh={handleRefresh}
      />}
      {currentPage === 'subscription' && <Subscription onBackClick={() => setCurrentPage('score')} onStartSubscription={() => setCurrentPage('payment')} />}
      {currentPage === 'payment' && <PaymentDetails onBackClick={() => setCurrentPage('subscription')} onConfirmPayment={() => setCurrentPage('success')} />}
      {currentPage === 'success' && <SubscriptionSuccess onContinue={handleProUpgrade} />}
    </>;
}