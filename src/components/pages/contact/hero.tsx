import React from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { ImageType } from '../../../types/image';
import mq from '../../../styles/mq';

const query = graphql`
  {
    hero: file(name: { eq: "hero" }, relativeDirectory: { eq: "contact" }) {
      childImageSharp {
        fluid(
          maxWidth: 1000
          maxHeight: 400
          cropFocus: CENTER
          fit: COVER
          quality: 80
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

interface StaticQuery {
  hero: ImageType;
}

const Hero: React.FC = () => {
  const { hero } = useStaticQuery<StaticQuery>(query);

  return (
    <section
      css={css`
        ${mq(`md`)} {
          display: flex;
          max-height: 500px;
          overflow: hidden;
        }
      `}
    >
      <div
        css={css`
          ${mq(`md`)} {
            flex: 0 0 40%;
            max-width: 40%;
          }
        `}
      >
        <h1
          css={css`
            font-size: 80px;
          `}
        >
          Demandez votre
          <br />
          devis gratuit.
        </h1>
      </div>
      <div
        css={css`
          ${mq(`md`)} {
            flex: 0 0 60%;
            max-width: 60%;
          }
        `}
      >
        <Img fluid={hero?.childImageSharp?.fluid} />
      </div>
    </section>
  );
};

export default React.memo(Hero);
