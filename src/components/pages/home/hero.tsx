import React from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import AnimTitle from '../../animation/animTitle';
import Link from '../../shared/link';

import mq from '../../../styles/mq';

import { ImageType } from '../../../types/image';
import useParallax from '../../../hooks/useParallax';

const query = graphql`
  {
    hero: file(name: { eq: "hero" }, relativeDirectory: { eq: "home" }) {
      childImageSharp {
        fluid(
          maxWidth: 1440
          maxHeight: 650
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
        Natur
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
        Perfe
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
}

const Hero: React.FC = () => {
  const { hero } = useStaticQuery<StaticQueryType>(query);
  const [ref, value] = useParallax();

  return (
    <section
      ref={ref}
      css={css`
        margin-bottom: 100px;
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
              position: absolute;
              height: 650px;
              width: 100%;
              left: 377px;
              top: 0;
            }
          `}
        >
          <div
            style={{
              transform: `translate3d(0px, ${value * 2}px, 0px)`,
            }}
          >
            <Img
              fluid={hero?.childImageSharp?.fluid}
              css={css`
                // max-width: 768px;
                // margin: 0 auto;

                ${mq(`lg`)} {
                  position: initial !important;
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
