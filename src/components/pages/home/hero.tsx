import React from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import AnimTitle from '../../animation/animTitle';
import Link from '../../shared/link';

import mq from '../../../styles/mq';
import useParallax from '../../../hooks/useParallax';

import { ImageType } from '../../../types/image';

const query = graphql`
  {
    hero: file(name: { eq: "hero" }, relativeDirectory: { eq: "home" }) {
      childImageSharp {
        fluid(
          maxWidth: 500
          maxHeight: 500
          cropFocus: SOUTH
          fit: COVER
          quality: 80
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroSM: file(name: { eq: "hero" }, relativeDirectory: { eq: "home" }) {
      childImageSharp {
        fluid(
          maxWidth: 700
          maxHeight: 500
          cropFocus: SOUTH
          fit: COVER
          quality: 80
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroMD: file(name: { eq: "hero" }, relativeDirectory: { eq: "home" }) {
      childImageSharp {
        fluid(
          maxWidth: 800
          maxHeight: 500
          cropFocus: SOUTH
          fit: COVER
          quality: 80
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroLG: file(name: { eq: "hero" }, relativeDirectory: { eq: "home" }) {
      childImageSharp {
        fluid(
          maxWidth: 1000
          maxHeight: 700
          cropFocus: SOUTH
          fit: COVER
          quality: 80
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroXL: file(name: { eq: "hero" }, relativeDirectory: { eq: "home" }) {
      childImageSharp {
        fluid(
          maxWidth: 1440
          maxHeight: 700
          cropFocus: SOUTH
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
      font-size: 40px;
      text-align: center;
      margin-bottom: 30px;
      position: relative;
      z-index: 2;

      ${mq(`sm`)} {
        font-size: 60px;
      }

      ${mq(`md`)} {
        font-size: 80px;
      }

      ${mq(`lg`)} {
        text-align: left;
        font-size: 150px;
        position: relative;
        z-index: 2;
        letter-spacing: 2px;
      }

      & > span {
        display: block;

        & > span {
          ${mq(`lg`)} {
            color: white;
          }
        }
      }
    `}
  >
    <span>
      <AnimTitle delay={250}>
        <span
          css={css`
            color: black;
          `}
        >
          Natur
        </span>
        <span
          css={css`
            ${mq(`lg`)} {
              color: white;
            }
          `}
        >
          a
        </span>
      </AnimTitle>
    </span>
    <span
      css={css`
        color: white;

        ${mq(`lg`)} {
          color: black;
          position: relative;
          left: 33px;
        }
      `}
    >
      <AnimTitle delay={500}>
        <span
          css={css`
            color: white;

            ${mq(`lg`)} {
              color: black;
            }
          `}
        >
          Perfe
        </span>
        <span
          css={css`
            color: white;
          `}
        >
          ct
        </span>
      </AnimTitle>
    </span>
  </h1>
);

interface StaticQueryType {
  hero: ImageType;
  heroSM: ImageType;
  heroMD: ImageType;
  heroLG: ImageType;
  heroXL: ImageType;
}

const Hero: React.FC = () => {
  const { hero, heroSM, heroMD, heroLG, heroXL } = useStaticQuery<
    StaticQueryType
  >(query);
  const [ref, value] = useParallax();

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
        margin-bottom: 100px;
        margin-top: 50px;
        overflow: hidden;

        ${mq(`lg`)} {
          margin-bottom: 0;
          height: 800px;
          padding-left: 50px;
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
            padding-top: 30px;
          }
        `}
      >
        <Title />
        <div
          css={css`
            text-align: center;
            margin-bottom: 50px;
            display: none;

            ${mq(`lg`)} {
              display: initial;
              text-align: left;
              padding-top: 40px;
              padding-left: 100px;
            }
          `}
        >
          <Link to="/contact" variant="black">
            Devis gratuit
          </Link>
        </div>
        <div
          css={css`
            position: relative;
            top: -78px;
            overflow: hidden;

            ${mq(`sm`)} {
              top: -105px;
            }

            ${mq(`md`)} {
              top: -130px;
            }

            ${mq(`lg`)} {
              margin-bottom: 0;
              position: absolute;
              width: 100%;
              left: 377px;
              top: 0;
            }
          `}
        >
          <div
            css={css`
              height: 400px;
              overflow: hidden;

              ${mq(`lg`)} {
                height: 600px;
              }
            `}
            style={{
              transform: `translate3d(0px, ${value * 2}px, 0px)`,
            }}
          >
            <Img
              fluid={sources}
              css={css`
                position: initial !important;
                max-width: 768px;
                margin: 0 auto;

                ${mq(`lg`)} {
                  max-width: initial;
                  margin: initial;
                }
              `}
            />
          </div>
        </div>
        <div
          css={css`
            text-align: center;

            ${mq(`lg`)} {
              display: none;
            }
          `}
        >
          <Link to="/contact" variant="black">
            Devis gratuit
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
