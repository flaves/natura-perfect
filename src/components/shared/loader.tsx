import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { animated as a, useSpring } from 'react-spring';

import useInterval from '../../hooks/useInterval';

import { ThemeType } from '../../styles/theme';

const Loader: React.FC = () => {
  const { color } = useTheme<ThemeType>();
  const [count, setCount] = useState<number>(0);
  const fade = useSpring({
    transform:
      count === 100
        ? `translate3d(0px, -100%, 0px)`
        : `translate3d(0px, 0%, 0px)`,
    config: {
      tension: 80,
    },
    delay: 300,
  });

  const ref = useInterval(() => setCount(count + 1), 50 + count / 3);

  useEffect(() => {
    if (count === 100) {
      window.clearInterval(ref.current);
    }
  }, [count]);

  return (
    <a.section
      style={fade}
      css={css`
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${color.primary};
        z-index: 1001;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <span
        css={css`
          color: white;
          font-family: Mixta sans-serif;
          font-size: 150px;
        `}
      >
        {count} %
      </span>
    </a.section>
  );
};

export default Loader;
