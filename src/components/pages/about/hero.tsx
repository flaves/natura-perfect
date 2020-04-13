import React from 'react';
import { css } from '@emotion/core';

import Container from '../../styled/container';

const Hero: React.FC = () => {
  return (
    <section
      css={css`
        margin-top: 50px;
        margin-bottom: 150px;
      `}
    >
      <Container>
        <h1
          css={css`
            font-size: 80px;
          `}
        >
          Experience you
          <br />
          can trust.
        </h1>
      </Container>
    </section>
  );
};

export default React.memo(Hero);
