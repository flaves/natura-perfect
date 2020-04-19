import React from 'react';
import { css } from '@emotion/core';

import Textarea from '../../../shared/textarea';

const Description: React.FC = () => {
  return (
    <section
      css={css`
        margin-bottom: 100px;
      `}
    >
      <h2
        css={css`
          font-size: 30px;
          margin-bottom: 10px;
        `}
      >
        Parlez-nous de votre projet.
      </h2>
      <p
        css={css`
          font-size: 16px;
          margin-bottom: 40px;
          text-align: justify;
        `}
      >
        Par exemple, la surface approximative de votre pelouse, la longueur de
        votre haie sont des informations importantes pour que vous puissiez
        recevoir un devis adapté à vos besoins dans les meilleurs délais.
      </p>
      <Textarea name="description" />
    </section>
  );
};

export default React.memo(Description);
