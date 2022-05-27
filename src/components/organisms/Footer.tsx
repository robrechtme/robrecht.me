import Link from 'next/link';

import Logo from '../atoms/icons/logo';
import Socials from '../molecules/Socials';

import StructuredText from 'components/organisms/StructuredText';
import { GlobalFieldsFragment } from 'lib/types';

type Props = Pick<GlobalFieldsFragment, 'global'>;

const Footer = ({ global }: Props) => (
  <footer className='my-2'>
    <div className='flex flex-wrap items-center justify-between'>
      <Link href='/'>
        <a className='mb-2'>
          <Logo className='h-6' />
        </a>
      </Link>
      <Socials className='mb-2' size={1.5} socials={global.socials} />
    </div>
    <div className='flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row sm:justify-between sm:space-y-0'>
      <div className='text-xs opacity-75'>
        <StructuredText data={global.legal} />
      </div>
      <div className='flex flex-col items-start space-y-4 sm:flex-row  sm:space-y-0 sm:space-x-2'>
        <Link href='/algemene-voorwaarden'>
          <a className='focus-custom text-xs opacity-75'>
            Algemene voorwaarden
          </a>
        </Link>
        <a
          href='https://admin.robrecht.me'
          target='_blank'
          rel='noreferrer'
          className='focus-custom text-xs opacity-75'
        >
          Admin
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
