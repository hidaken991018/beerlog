import ButtonAppBar from '@/components/layout/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import { ButtomNavigation } from '@/components/layout/ButtomNavigation';
import Layout from '@/components/layout/Layout';
import client from '@/libs/graphClient';
import '@/styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFA500',
      },
    },
  });
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>

      {/* <ButtomNavigation /> */}
    </ApolloProvider>
  );
}
