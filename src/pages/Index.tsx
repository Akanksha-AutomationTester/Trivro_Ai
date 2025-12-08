

import React from 'react';
import AppLayout from '@/components/AppLayout';
import AEOOptimization from '@/components/AEOOptimization';
import KeywordOptimization from '@/components/KeywordOptimization';
import { AppProvider } from '@/contexts/AppContext';

const Index: React.FC = () => {
  return (
    <AppProvider>
      <AEOOptimization />
      <KeywordOptimization />
      <AppLayout />
    </AppProvider>
  );
};

export default Index;

