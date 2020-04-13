import { css } from '@emotion/core';

const reset = css`
  * {
    font-family: Helvetica Neue, sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
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
