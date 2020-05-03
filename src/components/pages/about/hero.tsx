import React from 'react';
import { css } from '@emotion/core';

import Container from '../../styled/container';

import mq from '../../../styles/mq';
import AnimTitle from '../../animation/animTitle';

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
            font-size: 40px;

            ${mq(`md`)} {
              font-size: 80px;
            }
          `}
        >
          <AnimTitle delay={500}>Une relation</AnimTitle>
          <br />
          <AnimTitle delay={750}>de confiance.</AnimTitle>
        </h1>
      </Container>
    </section>
  );
};

export default React.memo(Hero);
