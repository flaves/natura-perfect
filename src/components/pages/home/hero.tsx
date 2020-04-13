import React from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import mq from '../../../styles/mq';

import { ImageType } from '../../../types/image';

const query = graphql`
  {
    hero: file(name: { eq: "hero" }, relativeDirectory: { eq: "home" }) {
      childImageSharp {
        fluid(
          maxWidth: 968
          maxHeight: 650
          cropFocus: CENTER
          fit: COVER
          quality: 80
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

interface StaticQueryType {
  hero: ImageType;
}

const Hero: React.FC = () => {
  const { hero } = useStaticQuery<StaticQueryType>(query);

  return (
    <section
      css={css`
        ${mq(`md`)} {
          display: flex;
        }
      `}
    >
      <div
        css={css`
          ${mq(`md`)} {
            flex: 0 0 30%;
            max-width: 30%;
          }
        `}
      >
        <h1
          css={css`
            font-size: 75px;
            text-align: center;

            ${mq(`md`)} {
              font-size: 150px;
              text-align: left;
            }
          `}
        >
          Natura
          <br />
          Perfect
        </h1>
      </div>
      <div
        css={css`
          ${mq(`md`)} {
            flex: 0 0 70%;
            max-width: 70%;
          }
        `}
      >
        <Img fluid={hero?.childImageSharp?.fluid} />
      </div>
    </section>
  );
};

export default React.memo(Hero);
