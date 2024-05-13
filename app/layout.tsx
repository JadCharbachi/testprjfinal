'use client'

import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import { Suspense } from 'react';
import { ClerkProvider } from '@clerk/clerk-react';


export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <div>
        <ClerkProvider
          publishableKey="pk_test_d29ydGh5LXNhaWxmaXNoLTYuY2xlcmsuYWNjb3VudHMuZGV2JA" >
          <Nav />
        </ClerkProvider>
        {children}
        <Analytics />
      </div>

    </Suspense>



  );
}
