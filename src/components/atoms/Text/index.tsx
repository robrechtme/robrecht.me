import c from 'classnames';
import { ElementType, forwardRef } from 'react';

import { variants } from './variants';

interface TextOwnProps<E extends ElementType = ElementType> {
  as?: E;
  variant?: keyof typeof variants;
  className?: string;
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps>;

const defaultElement = 'p';

const Text: <E extends React.ElementType = typeof defaultElement>(
  props: TextProps<E>
) => React.ReactElement | null = forwardRef(function Text(
  { className, variant, as, ...props }: TextOwnProps,
  ref: React.Ref<Element>
) {
  const Element = as || defaultElement;
  return (
    <Element
      ref={ref}
      {...props}
      className={c(className, variant ? variants[variant] : false)}
    />
  );
});

export default Text;
