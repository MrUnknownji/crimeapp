// src/App.js
import React from 'react';
import { Navigator } from './src/utils/navigations/Navigators';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Navigator />
  </QueryClientProvider>
);

export default App;