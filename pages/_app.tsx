

import { AppProps } from 'next/app';
import { ClerkProvider } from '@clerk/clerk-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../app/layout';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider publishableKey='pk_test_d29ydGh5LXNhaWxmaXNoLTYuY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ClerkProvider>
  );
}

export default MyApp;