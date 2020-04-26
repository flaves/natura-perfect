import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Link from './link';
import Container from '../styled/container';

import mq from '../../styles/mq';

import { ImageType } from '../../types/image';
import { ThemeType } from '../../styles/theme';

const query = graphql`
  {
    contact: file(name: { eq: "contact" }) {
      childImageSharp {
        fluid(
          maxWidth: 900
          maxHeight: 1100
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

interface StaticQueryType {
  contact: ImageType;
}

const Contact: React.FC = () => {
  const { contact } = useStaticQuery<StaticQueryType>(query);
  const { color } = useTheme<ThemeType>();

  return (
    <section
      css={css`
        background-color: ${color?.primary};
        overflow: hidden;
        position: relative;
      `}
    >
      <Container>
        <div
          css={css`
            padding: 200px 0;

            ${mq(`md`)} {
              position: relative;
            }
          `}
        >
          <h2
            css={css`
              position: relative;
              z-index: 2;
              color: ${color?.white};
              margin-bottom: 75px;
              text-align: center;
              font-size: 24px;

              ${mq(`md`)} {
                font-size: 40px;
              }

              ${mq(`lg`)} {
                text-align: left;
                font-size: 60px;
              }
            `}
          >
            {`Besoin d'aide pour votre projet ?`}
            <br />
            {`Recevez une offre gratuitement.`}
          </h2>
          <div
            css={css`
              text-align: center;

              ${mq(`lg`)} {
                text-align: left;
              }
            `}
          >
            <Link to="/contact">Contact us</Link>
          </div>
          <div
            css={css`
              position: absolute;
              width: 400px;
              height: 500px;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);

              ${mq(`lg`)} {
                width: auto;
                left: 500px;
                // right: 100px;
                right: 50px;
                transform: translateY(-50%);
              }

              ${mq(`xl`)} {
                left: 650px;
                right: 100px;
              }
            `}
          >
            <Img
              fluid={contact?.childImageSharp?.fluid}
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
        </div>
      </Container>
    </section>
  );
};

export default React.memo(Contact);
