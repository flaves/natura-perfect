import { css } from '@emotion/core';

// Gilroy
import GilroyRegular from './gilroy-regular.otf';
import GilroyMedium from './gilroy-medium.otf';
import GilroySemiBold from './gilroy-semibold.otf';

// Mixta
import MixtaRegular from './mixta-regular.otf';
import MixtaBold from './mixta-bold.otf';
import MixtaBlack from './mixta-black.otf';

export const MixtaFont = css`
  @font-face {
    font-family: Mixta;
    font-weight: 400;
    src: url(${MixtaRegular});
  }
  @font-face {
    font-family: Mixta;
    font-weight: 700;
    src: url(${MixtaBold});
  }
  @font-face {
    font-family: Mixta;
    font-weight: 900;
    src: url(${MixtaBlack});
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
  @font-face {
    font-family: Gilroy;
    font-weight: 600;
    src: url(${GilroySemiBold});
  }
`;
