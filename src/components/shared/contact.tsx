import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Button from './button';
import mq from '../../styles/mq';

import Container from '../styled/container';

import { ImageType } from '../../types/image';
import { ThemeType } from '../../styles/theme';

const query = graphql`
  {
    contact: file(name: { eq: "contact" }) {
      childImageSharp {
        fluid(
          maxWidth: 450
          maxHeight: 550
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
      `}
    >
      <Container>
        <div
          css={css`
            display: flex;
            align-items: center;
            position: relative;

            ${mq(`md`)} {
              height: 700px;
            }
          `}
        >
          <div
            css={css`
              position: absolute;
              width: 450px;
              height: 550px;
              top: 50%;
              right: 100px;
              transform: translateY(-50%);
              z-index: 1;
            `}
          >
            <Img fluid={contact?.childImageSharp?.fluid} />
          </div>
          <div
            css={css`
              position: relative;
              z-index: 2;
            `}
          >
            <h2
              css={css`
                color: ${color?.white};
                margin-bottom: 75px;
              `}
            >
              A lot of companies are working with us.
              <br />
              Are you ready to become our partner?
            </h2>
            <Button to="/contact">Contact us</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default React.memo(Contact);
