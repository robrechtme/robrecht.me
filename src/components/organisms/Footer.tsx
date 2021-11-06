import { show } from 'cookie-though';
import { motion } from 'framer-motion';
import parse from 'html-react-parser';
import Link from 'next/link';
import React from 'react';

import Logo from '../../assets/logo.svg';
import { Global } from '../../lib/types';
import Socials from '../molecules/Socials';

type Props = Partial<Global['global']>;

const Footer: React.FC<Props> = ({ socials, hq, copyright, vat }) => (
  <motion.footer className="my-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <div className="flex justify-between items-center flex-wrap">
      <Link href="/" scroll={false}>
        <a className="mb-2">
          <Logo className="h-6" />
        </a>
      </Link>
      <Socials className="mb-2" size={1.5} socials={socials} />
    </div>
    <div className="flex flex-col-reverse space-y-reverse space-y-4 sm:space-y-0 sm:flex-row sm:justify-between">
      <div>
        {copyright && <p className="text-xs opacity-75">{copyright}</p>}
        {vat && <p className="text-xs opacity-75">{vat}</p>}
        {hq && <p className="text-xs opacity-75">{parse(hq)}</p>}
      </div>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0  sm:space-x-2 items-start">
        <Link href="/algemene-voorwaarden">
          <a className="text-xs opacity-75 focus-custom">Algemene voorwaarden</a>
        </Link>
        <a
          href="https://admin.robrecht.me"
          target="_blank"
          rel="noreferrer"
          className="text-xs opacity-75 focus-custom"
        >
          Admin
        </a>
        <button onClick={show} type="button" className="text-xs opacity-75 self-start focus-custom">
          Cookiebeleid
        </button>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
