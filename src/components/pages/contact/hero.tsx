import React from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import mq from '../../../styles/mq';

import DownArrow from '../../svg/down-arrow.svg';

import { ImageType } from '../../../types/image';

const query = graphql`
  {
    hero: file(name: { eq: "hero" }, relativeDirectory: { eq: "contact" }) {
      childImageSharp {
        fluid(
          maxWidth: 500
          maxHeight: 500
          cropFocus: CENTER
          fit: COVER
          quality: 80
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroLG: file(name: { eq: "hero" }, relativeDirectory: { eq: "contact" }) {
      childImageSharp {
        fluid(
          maxWidth: 1200
          maxHeight: 500
          cropFocus: CENTER
          fit: COVER
          quality: 80
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroXL: file(name: { eq: "hero" }, relativeDirectory: { eq: "contact" }) {
      childImageSharp {
        fluid(
          maxWidth: 1440
          maxHeight: 600
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

const Title: React.FC = () => (
  <h1
    css={css`
      font-size: 30px;
      text-align: center;

      ${mq(`sm`)} {
        font-size: 40px;
      }

      ${mq(`lg`)} {
        position: relative;
        z-index: 2;
        font-size: 80px;
        letter-spacing: 1px;
        text-align: initial;
      }
    `}
  >
    Votre devis{' '}
    <span
      css={css`
        ${mq(`lg`)} {
          color: white;
        }
      `}
    >
      personnalisé.
    </span>
    <br />
    Et gratuit.
  </h1>
);

interface StaticQuery {
  hero: ImageType;
  heroLG: ImageType;
  heroXL: ImageType;
}

const Hero: React.FC = () => {
  const { hero, heroLG, heroXL } = useStaticQuery<StaticQuery>(query);

  const sources = [
    hero.childImageSharp.fluid,
    {
      ...heroLG.childImageSharp.fluid,
      media: `(min-width: 992px)`,
    },
    {
      ...heroXL.childImageSharp.fluid,
      media: `(min-width: 1200px)`,
    },
  ];

  return (
    <section
      css={css`
        padding-left: 0;
        max-height: 600px;
        overflow: hidden;
        margin-bottom: 100px;

        ${mq(`lg`)} {
          padding-top: 40px;
          padding-left: 50px;
          max-height: initial;
        }

        ${mq(`xl`)} {
          padding-left: 100px;
        }
      `}
    >
      <div
        css={css`
          ${mq(`lg`)} {
            position: relative;
          }
        `}
      >
        <Title />
        <div
          css={css`
            margin-top: 50px;
            text-align: center;
            margin-bottom: 50px;

            ${mq(`lg`)} {
              text-align: initial;
            }

            svg {
              width: 30px;
              height: 30px;
            }
          `}
        >
          <DownArrow />
        </div>
        <div
          css={css`
            ${mq(`lg`)} {
              position: absolute;
              width: 100%;
              height: 400px;
              left: 400px;
              top: 30%;
              transform: translateY(-30%);
              overflow: hidden;
            }
          `}
        >
          <Img fluid={sources} />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
