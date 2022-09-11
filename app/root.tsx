// root.tsx
import React, { useContext, useEffect } from 'react';
import { withEmotionCache } from '@emotion/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from '@remix-run/react';
import { MetaFunction, LinksFunction } from '@remix-run/node'; // Depends on the runtime you choose
import styles from './styles/app.css';
import { ServerStyleContext, ClientStyleContext } from './context';
import NavBar from './components/HomePageComponents/NavBar';
import { AnimatePresence, motion } from 'framer-motion';
import rootstyles from './root.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'VIP IPTV',
  viewport: 'width=device-width,initial-scale=1',
});

export let links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'icon', href: '/assets/Delux-IPTV.png', type: 'image/png' },
    { rel: 'stylesheet', href: rootstyles },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
    },
  ];
};

interface DocumentProps {
  children: React.ReactNode;
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache: any) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag: any) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(' ')}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });
// const cookies = useLoaderData()

export const loader = async () => {
  const client_paypal = process.env.CLIENT_PAYPAL
  return {
    envVar: client_paypal
  }
};

export default function App() {
  const data = useLoaderData()
  return (
    <Document>
      <PayPalScriptProvider options={{ "client-id": "AQZqAh4sZcx4zPdD-_2jf3wM9fWNoJfvxpqjCQLUNZn0FPgBJLKj8bw-RoYHXAuPYDCoi_vRKdC96vO5" }}>
        <ChakraProvider theme={theme}>
          <NavBar />
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
              key={useLocation().pathname}
              initial={{ x: '-10%', opacity: 0 }}
              animate={{ x: '0', opacity: 1 }}
              exit={{ y: '-10%', opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* <a
                id='footer'
                href="https://wa.me/212615287447"
                className="whatsapp_float"
                target="_blank"
              >

                <WhatsAppIcon sx={{ fontSize: '2rem' }} className='whatsapp-icon' />
              </a> */}
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </ChakraProvider>
      </PayPalScriptProvider>
    </Document>
  );
}
