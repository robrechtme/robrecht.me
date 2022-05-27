import '../styles/tailwind.css';

import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { renderMetaTags } from 'react-datocms';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import Container from '../components/atoms/Container';
import DatoDefaultSeo from '../components/atoms/DefaultSeo';
import Footer from '../components/organisms/Footer';

const App = ({ Component, pageProps, router }: AppProps) => (
  <GoogleReCaptchaProvider
    reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY}
  >
    <Head>
      {pageProps.site?.faviconMetaTags &&
        renderMetaTags(pageProps.site.faviconMetaTags)}
    </Head>

    {pageProps.preview && (
      <Link href='/api/exit-preview'>
        <a className='h-6 fixed z-50 top-5 right-5 bg-blue-500 text-gray-50 text-sm rounded-sm'>
          <span className='mx-2'>Exit Preview</span>
          <svg
            className='h-6 p-1.5 inline-block bg-blue-600'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </a>
      </Link>
    )}
    <AnimatePresence exitBeforeEnter>
      <Container dark={pageProps.dark} key={router.asPath}>
        <DatoDefaultSeo globalSeo={pageProps.site?.globalSeo} />
        <Component {...pageProps} />
        {pageProps.global && <Footer {...pageProps.global} />}
      </Container>
    </AnimatePresence>
  </GoogleReCaptchaProvider>
);

export default App;
