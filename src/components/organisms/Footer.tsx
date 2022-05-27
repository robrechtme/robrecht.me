import Link from 'next/link';

import Logo from '../atoms/icons/logo';
import Socials from '../molecules/Socials';

import StructuredText from 'components/organisms/StructuredText';
import { GlobalFieldsFragment } from 'lib/types';

type Props = Pick<GlobalFieldsFragment, 'global'>;

const Footer = ({ global }: Props) => (
  <footer className='my-2'>
    <div className='flex justify-between items-center flex-wrap'>
      <Link href='/' scroll={false}>
        <a className='mb-2'>
          <Logo className='h-6' />
        </a>
      </Link>
      <Socials className='mb-2' size={1.5} socials={global.socials} />
    </div>
    <div className='flex flex-col-reverse space-y-reverse space-y-4 sm:space-y-0 sm:flex-row sm:justify-between'>
      <div className='text-xs opacity-75'>
        <StructuredText data={global.legal} />
      </div>
      <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0  sm:space-x-2 items-start'>
        <Link href='/algemene-voorwaarden'>
          <a className='text-xs opacity-75 focus-custom'>
            Algemene voorwaarden
          </a>
        </Link>
        <a
          href='https://admin.robrecht.me'
          target='_blank'
          rel='noreferrer'
          className='text-xs opacity-75 focus-custom'
        >
          Admin
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
