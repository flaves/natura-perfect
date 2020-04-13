import { css } from '@emotion/core';

import { GilroyFont, MixtaFont } from '../fonts/fonts';

const reset = css`
  ${GilroyFont}
  ${MixtaFont}
  
  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  html {
    font-family: Gilroy, Helvetica Neue, sans-serif;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Mixta, Helvetica Neue, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure {
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  address {
    font-style: normal;
  }
`;

export default reset;
