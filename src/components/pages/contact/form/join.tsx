import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import mq from '../../../../styles/mq';

import { ThemeType } from '../../../../styles/theme';

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
          font-size: 16px;
          font-weight: 400;
          line-height: 2;

          ${mq(`md`)} {
            font-size: 20px;
          }
        }
      `}
    >
      <h2
        css={css`
          color: white;
          font-size: 20px;
          margin-bottom: 75px;

          ${mq(`sm`)} {
            font-size: 30px;
          }

          ${mq(`md`)} {
            font-size: 40px;
          }
        `}
      >
        Vous pouvez aussi nous joindre ici
      </h2>
      <p>+32 499 62 95 59</p>
      <p>hello@natura-perfect.be</p>
    </section>
  );
};

export default React.memo(Join);
