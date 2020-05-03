import React from 'react';
import { css } from '@emotion/core';
import { animated as a, useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';

interface TitleProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimTitle: React.FC<TitleProps> = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const spring = useSpring({
    from: {
      transform: `translate3d(0, 100%, 0)`,
      opacity: 0,
    },
    to: {
      transform: inView ? `translate3d(0, 0%, 0)` : `translate3d(0, 100%, 0)`,
      opacity: inView ? 1 : 0,
    },
    delay,
    config: {
      friction: 30,
      tension: 100,
    },
  });

  return (
    <div
      ref={ref}
      css={css`
        display: inline;
      `}
    >
      <a.div
        style={spring}
        css={css`
          display: inline-block;
        `}
      >
        {children}
      </a.div>
    </div>
  );
};

export default React.memo(AnimTitle);
