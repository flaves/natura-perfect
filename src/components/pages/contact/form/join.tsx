import React from 'react';
import { useTheme } from 'emotion-theming';

import { ThemeType } from '../../../../styles/theme';
import { css } from '@emotion/core';

const Join: React.FC = () => {
  const { color } = useTheme<ThemeType>();

  return (
    <section
      css={css`
        background-color: ${color.primary};
        padding: 100px 0;
        text-align: center;

        p {
          color: white;
          font-size: 20px;
          font-weight: 400;
          line-height: 2;
        }
      `}
    >
      <h2
        css={css`
          color: white;
          font-size: 40px;
          margin-bottom: 75px;
        `}
      >
        Vous pouvez aussi nous joindre via
      </h2>
      <p>+32 499 62 95 59</p>
      <p>hello@natura-perfect.be</p>
    </section>
  );
};

export default React.memo(Join);
