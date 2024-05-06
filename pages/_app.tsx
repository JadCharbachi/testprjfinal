

import { AppProps } from 'next/app';
import { ClerkProvider } from '@clerk/clerk-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../app/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
      <Layout>
        <Component {...pageProps} />
      </Layout>
    
  );
}

export default MyApp;