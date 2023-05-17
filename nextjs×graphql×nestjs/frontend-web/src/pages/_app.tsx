import CssBaseline from '@mui/material/CssBaseline';
import { ButtomNavigation } from '@/components/layout/ButtomNavigation';
import Layout from '@/components/layout/Layout';
import client from '@/libs/graphClient';
import '@/styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { Auth0Provider } from '@auth0/auth0-react';
import { RecoilRoot } from 'recoil';
import { Auth } from '@/components/auth/Auth';
import { GlobalState } from '@/components/GlobalState';

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFA500',
      },
    },
  });
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Auth0Provider
            domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
            clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string}
            authorizationParams={{
              redirect_uri: process.env.NEXT_PUBLIC_BASE_URL as string,
            }}
          >
            <GlobalState>
              <Layout>
                <Auth>
                  <Component {...pageProps} />
                </Auth>
              </Layout>
            </GlobalState>
          </Auth0Provider>
        </ThemeProvider>
      </ApolloProvider>
    </RecoilRoot>
  );
}
