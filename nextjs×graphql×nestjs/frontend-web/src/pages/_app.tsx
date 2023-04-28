import ButtonAppBar from '@/components/layout/AppBar';
import { ButtomNavigation } from '@/components/layout/ButtomNavigation';
import Layout from '@/components/layout/Layout';
import client from '@/libs/graphClient';
import '@/styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      {/* <ButtomNavigation /> */}
    </ApolloProvider>
  );
}
