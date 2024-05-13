'use client'

import { ClerkProvider } from '@clerk/clerk-react';
import React from 'react';

function MyApp({ Component, pageProps }: { Component: React.ComponentType, pageProps: any }) {
  return (
    <ClerkProvider publishableKey="pk_test_d29ydGh5LXNhaWxmaXNoLTYuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;