import c from 'classnames';
import React from 'react';

import GitHub from '../../assets/github.svg';
import LinkedIn from '../../assets/linkedin.svg';
import Mail from '../../assets/mail.svg';
import { Socials as TSocials } from '../../lib/types';
import IconLink from '../atoms/IconLink';

interface Props {
  socials: TSocials;
  className?: string;
  size?: number;
}

const Socials = ({ className, socials, size = 8 }: Props) => (
  <div className={c('flex', className)}>
    {socials.mail && (
      <IconLink
        aria-label="Mail"
        href={`mailto:${socials.mail}`}
        Icon={Mail}
        rel="noreferrer"
        size={size}
      />
    )}
    {socials.linkedin && (
      <IconLink
        aria-label="LinkedIn"
        href={socials.linkedin}
        Icon={LinkedIn}
        rel="noreferrer"
        size={size}
        target="_blank"
      />
    )}
    {socials.github && (
      <IconLink
        aria-label="GitHub"
        href={socials.github}
        Icon={GitHub}
        rel="noreferrer"
        size={size}
        target="_blank"
      />
    )}
  </div>
);

export default Socials;
