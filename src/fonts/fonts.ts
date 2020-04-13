import { css } from '@emotion/core';

// Gilroy
import GilroyRegular from './gilroy-regular.otf';
import GilroyMedium from './gilroy-medium.otf';

// Mixta
import MixtaBold from './mixta-bold.otf';

export const MixtaFont = css`
  @font-face {
    font-family: Mixta;
    font-weight: 700;
    src: url(${MixtaBold});
  }
`;

export const GilroyFont = css`
  @font-face {
    font-family: Gilroy;
    font-weight: 400;
    src: url(${GilroyRegular});
  }
  @font-face {
    font-family: Gilroy;
    font-weight: 500;
    src: url(${GilroyMedium});
  }
`;
