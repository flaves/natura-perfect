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
          maxWidth: 500
          maxHeight: 450
          cropFocus: CENTER
          fit: COVER
          quality: 80
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroSM: file(name: { eq: "hero" }, relativeDirectory: { eq: "services" }) {
      childImageSharp {
        fluid(
          maxWidth: 600
          maxHeight: 450
          cropFocus: CENTER
          fit: COVER
          quality: 80
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroMD: file(name: { eq: "hero" }, relativeDirectory: { eq: "services" }) {
      childImageSharp {
        fluid(
          maxWidth: 800
          maxHeight: 450
          cropFocus: CENTER
          fit: COVER
          quality: 80
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroLG: file(name: { eq: "hero" }, relativeDirectory: { eq: "services" }) {
      childImageSharp {
        fluid(
          maxWidth: 1000
          maxHeight: 450
          cropFocus: CENTER
          fit: COVER
          quality: 80
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroXL: file(name: { eq: "hero" }, relativeDirectory: { eq: "services" }) {
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
  heroSM: ImageType;
  heroMD: ImageType;
  heroLG: ImageType;
  heroXL: ImageType;
}

const Hero: React.FC = () => {
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
        Des services adaptés
        <br />
        <span
          css={css`
            color: white;
          `}
        >
          à vos besoins.
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
          fluid={sources}
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
