import React from 'react';
import { SWRConfig } from 'swr';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { fetcher } from '@/utils';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </Layout>
  );
}

export default App;
