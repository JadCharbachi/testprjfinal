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
    <html lang="en" className="h-full bg-gray-50">
      <Suspense>
        <body className="h-full">
          <div>
            <ClerkProvider
              publishableKey="pk_test_d29ydGh5LXNhaWxmaXNoLTYuY2xlcmsuYWNjb3VudHMuZGV2JA" >
              <Nav />
              {children}
            </ClerkProvider>
            <Analytics />
          </div>
        </body>
      </Suspense>
    </html>
  );
}
