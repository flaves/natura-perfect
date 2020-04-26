import React from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import mq from '../../../styles/mq';

import { ImageType } from '../../../types/image';

const query = graphql`
  {
    hero: file(name: { eq: "hero" }, relativeDirectory: { eq: "services" }) {
      childImageSharp {
        fluid(
          maxWidth: 1440
          maxHeight: 450
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
        padding-top: 50px;
        margin-bottom: 50px;

        ${mq(`md`)} {
          margin-bottom: 100px;
        }
      `}
    >
      <h1
        css={css`
          font-size: 40px;
          text-align: center;
          position: relative;
          z-index: 2;

          ${mq(`lg`)} {
            font-size: 60px;
          }

          ${mq(`xl`)} {
            font-size: 80px;
          }
        `}
      >
        Services that match
        <br />
        <span
          css={css`
            color: white;
          `}
        >
          your needs.
        </span>
      </h1>
      <div
        css={css`
          height: 450px;
          position: relative;
          top: -50px;

          ${mq(`lg`)} {
            top: -75px;
          }

          ${mq(`xl`)} {
            top: -100px;
          }
        `}
      >
        <Img
          fluid={hero?.childImageSharp?.fluid}
          css={css`
            position: initial !important;
            max-width: 768px;
            margin: 0 auto;

            ${mq(`md`)} {
              max-width: initial;
              margin: initial;
            }
          `}
        />
      </div>
    </section>
  );
};

export default React.memo(Hero);
