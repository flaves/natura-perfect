import React from 'react';
import { css } from '@emotion/core';
import { animated as a, useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';

type VariantType = `translate` | `fade` | undefined;

const translate = (inView: boolean) => ({
  from: {
    transform: `translate3d(0, 100%, 0)`,
    opacity: 0,
  },
  to: {
    transform: inView ? `translate3d(0, 0%, 0)` : `translate3d(0, 100%, 0)`,
    opacity: inView ? 1 : 0,
  },
});

const fade = (inView: boolean) => ({
  from: {
    opacity: 0,
  },
  to: {
    opacity: inView ? 1 : 0,
  },
});

const renderVariant = (inView: boolean, variant: VariantType) => {
  switch (variant) {
    case 'fade':
      return fade(inView);
    case 'translate':
      return translate(inView);
    default:
      return translate(inView);
  }
};

interface TitleProps {
  children: React.ReactNode;
  delay?: number;
  triggerOnce?: boolean;
  variant?: VariantType;
}

const AnimTitle: React.FC<TitleProps> = ({
  children,
  delay = 0,
  triggerOnce = true,
  variant,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce,
  });
  const spring = useSpring({
    ...renderVariant(inView, variant),
    delay,
    config: {
      friction: 30,
      tension: 100,
    },
  });

  return (
    <span
      ref={ref}
      css={css`
        display: inline;
      `}
    >
      <a.span
        style={spring}
        css={css`
          display: inline-block;
        `}
      >
        {children}
      </a.span>
    </span>
  );
};

export default React.memo(AnimTitle);
