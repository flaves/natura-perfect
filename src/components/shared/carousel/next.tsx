import React from 'react';
import { css } from '@emotion/core';

import Arrow from '../../../svg/arrow.svg';

interface NextProps extends React.HTMLAttributes<HTMLDivElement> {
  right?: boolean;
}

const Next: React.FC<NextProps> = ({ right = true, ...props }) => {
  return (
    <div
      {...props}
      css={css`
        cursor: pointer;
        transition: background-color 0.5s;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: hsl(164, 19%, 15%);
        right: ${right ? `150px` : `auto`};
        left: ${right ? `auto` : `150px`};
        transform: translateY(-55%);
        top: 50%;

        svg {
          position: absolute;
          top: 50%;
          left: ${right ? `60%` : `50%`};
          transform: translate(${right ? `-60%` : `-55%`}, -50%)
            ${!right && `rotate(180deg)`};
          width: 20px;
          height: 20px;
          fill: white;
        }
      `}
    >
      <Arrow />
    </div>
  );
};

export default React.memo(Next);
