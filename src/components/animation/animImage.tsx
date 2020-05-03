import React from 'react';
import { css } from '@emotion/core';
import { animated as a, useSpring } from 'react-spring';
import useMeasure from 'react-use-measure';

interface AnimImageProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimImage: React.FC<AnimImageProps> = ({ children, delay = 0 }) => {
  const [ref, { width }] = useMeasure();
  const spring = useSpring({
    from: {
      width: `0%`,
    },
    to: {
      width: `90%`,
    },
    delay,
  });

  return (
    <div
      css={css`
        overflow: hidden;
      `}
    >
      <a.div style={spring}>{children}</a.div>
    </div>
  );
};

export default AnimImage;
