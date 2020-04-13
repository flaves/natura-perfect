import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import mq from '../../styles/mq';

import { ThemeType } from '../../styles/theme';

const Contact: React.FC = () => {
  const { color } = useTheme<ThemeType>();

  return (
    <section
      css={css`
        background-color: ${color?.primary};
        display: flex;
        align-items: center;

        ${mq(`md`)} {
          min-height: 700px;
        }
      `}
    >
      <div>
        <h2
          css={css`
            color: ${color?.white};
          `}
        >
          A lot of companies are working with us.
          <br />
          Are you ready to become our partner?
        </h2>
      </div>
    </section>
  );
};

export default React.memo(Contact);
