import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import mq from '../../../styles/mq';

import Arrow from '../../../svg/arrow.svg';

import { ThemeType } from '../../../styles/theme';

interface NextProps extends React.HTMLAttributes<HTMLDivElement> {
  right?: boolean;
}

const Next: React.FC<NextProps> = ({ right = true, ...props }) => {
  const { color } = useTheme<ThemeType>();

  return (
    <div
      {...props}
      css={css`
        position: absolute;
        top: 50%;
        right: ${right ? `30px` : `auto`};
        left: ${right ? `auto` : `30px`};
        transform: translateY(-50%);
        z-index: 10;
        cursor: pointer;
        transition: background-color 0.5s;
        border-radius: 50%;
        width: 60px;
        height: 60px;

        &:hover {
          background-color: ${color.primary};
        }

        ${mq(`md`)} {
          right: ${right ? `150px` : `auto`};
          left: ${right ? `auto` : `150px`};
          transform: translateY(-55%);
          top: 50%;
        }

        svg {
          position: absolute;
          top: 50%;
          left: ${right ? `60%` : `50%`};
          transform: translate(${right ? `-60%` : `-55%`}, -50%)
            ${!right && `rotate(180deg)`};
          width: 35px;
          height: 35px;
          fill: white;
        }
      `}
    >
      <Arrow />
    </div>
  );
};

export default React.memo(Next);
