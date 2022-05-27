import '../styles/main.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { renderMetaTags } from 'react-datocms';

import Container from '../components/atoms/Container';
import DatoDefaultSeo from '../components/atoms/DefaultSeo';
import Footer from '../components/organisms/Footer';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      {pageProps.site?.faviconMetaTags &&
        renderMetaTags(pageProps.site.faviconMetaTags)}
    </Head>

    {pageProps.preview && (
      <Link href='/api/exit-preview'>
        <a className='fixed top-5 right-5 z-50 h-6 rounded-sm bg-blue-500 text-sm text-gray-50'>
          <span className='mx-2'>Exit Preview</span>
          <svg
            className='inline-block h-6 bg-blue-600 p-1.5'
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
    <div className={pageProps.dark ? 'dark' : undefined}>
      <Container>
        <DatoDefaultSeo globalSeo={pageProps.site?.globalSeo} />
        <Component {...pageProps} />
        <Footer global={pageProps.global} />
      </Container>
    </div>
  </>
);

export default App;
