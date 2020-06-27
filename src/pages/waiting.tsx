import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import Logo from '../svg/logo.svg';

import { ThemeType } from '../styles/theme';
import mq from '../styles/mq';

const Waiting: React.FC = () => {
  const { color } = useTheme<ThemeType>();

  return (
    <section
      css={css`
        background-color: ${color.primary};
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div>
        <div
          css={css`
            width: 75px;
            height: auto;
            margin: 0 auto 30px auto;

            ${mq(`sm`)} {
              width: 100px;
              margin-bottom: 50px;
            }

            ${mq(`md`)} {
              width: 150px;
            }
          `}
        >
          <Logo />
        </div>
        <h1
          css={css`
            color: ${color.white};
            font-size: 20px;
            text-align: center;

            ${mq(`sm`)} {
              font-size: 30px;
            }

            ${mq(`md`)} {
              font-size: 50px;
            }
          `}
        >
          Encore un peu de patience...
          <br />
          Nous sommes bientôt prêts !
        </h1>
      </div>
    </section>
  );
};

export default Waiting;
