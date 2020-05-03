import React from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import mq from '../../../styles/mq';

import DownArrow from '../../../svg/down-arrow.svg';

import { ImageType } from '../../../types/image';
import AnimTitle from '../../animation/animTitle';
import useParallax from '../../../hooks/useParallax';

const query = graphql`
  {
    hero: file(name: { eq: "hero" }, relativeDirectory: { eq: "contact" }) {
      childImageSharp {
        fluid(
          maxWidth: 500
          maxHeight: 420
          cropFocus: CENTER
          fit: COVER
          quality: 80
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroSM: file(name: { eq: "hero" }, relativeDirectory: { eq: "contact" }) {
      childImageSharp {
        fluid(
          maxWidth: 600
          maxHeight: 420
          cropFocus: CENTER
          fit: COVER
          quality: 80
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroMD: file(name: { eq: "hero" }, relativeDirectory: { eq: "contact" }) {
      childImageSharp {
        fluid(
          maxWidth: 800
          maxHeight: 420
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
          maxWidth: 1000
          maxHeight: 420
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
          maxHeight: 420
          cropFocus: NORTH
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
    <AnimTitle delay={500}>Votre devis </AnimTitle>
    <span
      css={css`
        padding-left: 10px;

        ${mq(`lg`)} {
          color: white;
          padding-left: 20px;
        }
      `}
    >
      <AnimTitle delay={1000}> personnalisé.</AnimTitle>
    </span>
    <br />
    <AnimTitle delay={1500}>Et gratuit.</AnimTitle>
  </h1>
);

interface StaticQuery {
  hero: ImageType;
  heroSM: ImageType;
  heroMD: ImageType;
  heroLG: ImageType;
  heroXL: ImageType;
}

const Hero: React.FC = () => {
  const [ref, value] = useParallax();
  const { hero, heroSM, heroMD, heroLG, heroXL } = useStaticQuery<StaticQuery>(
    query
  );

  const sources = [
    hero.childImageSharp.fluid,
    {
      ...heroXL.childImageSharp.fluid,
      media: `(min-width: 1200px)`,
    },
    {
      ...heroLG.childImageSharp.fluid,
      media: `(min-width: 992px)`,
    },
    {
      ...heroMD.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
    {
      ...heroSM.childImageSharp.fluid,
      media: `(min-width: 576px)`,
    },
  ];

  return (
    <section
      ref={ref}
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
          <div
            style={{
              transform: `translate3d(0px, ${value * 2}px, 0px)`,
            }}
          >
            <Img fluid={sources} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
