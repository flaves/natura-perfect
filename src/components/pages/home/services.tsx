import React from 'react';
import { css } from '@emotion/core';

const Services: React.FC = () => {
  return (
    <section>
      <div
        css={css`
          text-align: center;
          margin-bottom: 150px;
        `}
      >
        <h2>Services</h2>
        <p
          css={css`
            max-width: 550px;
            margin: auto;
          `}
        >
          Nullam sodales rhoncus dignissim. Nulla ut congue quam, vel dapibus
          nulla. Duis quis neque auctor, congue nunc sed, porttitor ante.
        </p>
      </div>
    </section>
  );
};

export default React.memo(Services);
