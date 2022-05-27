import c from 'classnames';

import IconLink from '../atoms/IconLink';
import GitHub from '../atoms/icons/github';
import LinkedIn from '../atoms/icons/linkedin';
import Mail from '../atoms/icons/mail';

import { GlobalRecord } from 'lib/types';

interface Props {
  socials: GlobalRecord['socials'];
  className?: string;
  size?: number;
}

const Socials = ({ className, socials, size = 8 }: Props) => (
  <div className={c('flex', className)}>
    {socials.mail && (
      <IconLink
        aria-label='Mail'
        href={`mailto:${socials.mail}`}
        Icon={Mail}
        rel='noreferrer'
        size={size}
      />
    )}
    {socials.linkedin && (
      <IconLink
        aria-label='LinkedIn'
        href={socials.linkedin}
        Icon={LinkedIn}
        rel='noreferrer'
        size={size}
        target='_blank'
      />
    )}
    {socials.github && (
      <IconLink
        aria-label='GitHub'
        href={socials.github}
        Icon={GitHub}
        rel='noreferrer'
        size={size}
        target='_blank'
      />
    )}
  </div>
);

export default Socials;
