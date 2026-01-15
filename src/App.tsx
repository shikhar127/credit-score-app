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
  const [lastRefreshDate, setLastRefreshDate] = useState<string>(() => {
    // Set to yesterday so user can refresh on first load
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toISOString().split('T')[0];
  });
  const [creditScore, setCreditScore] = useState(767);

  const handleProUpgrade = () => {
    setIsPro(true);
    setCurrentPage('score');
  };

  const handleRefresh = () => {
    const today = new Date().toISOString().split('T')[0];
    setLastRefreshDate(today);
    // Increment score by 1-5 points on refresh
    setCreditScore(prev => Math.min(900, prev + Math.floor(Math.random() * 5) + 1));
  };

  return <>
      <InstallPrompt />
      {currentPage === 'score' && <CreditScore
        onUpgradeClick={() => setCurrentPage('subscription')}
        isPro={isPro}
        lastRefreshDate={lastRefreshDate}
        onRefresh={handleRefresh}
        creditScore={creditScore}
      />}
      {currentPage === 'subscription' && <Subscription onBackClick={() => setCurrentPage('score')} onStartSubscription={() => setCurrentPage('payment')} />}
      {currentPage === 'payment' && <PaymentDetails onBackClick={() => setCurrentPage('subscription')} onConfirmPayment={() => setCurrentPage('success')} />}
      {currentPage === 'success' && <SubscriptionSuccess onContinue={handleProUpgrade} />}
    </>;
}