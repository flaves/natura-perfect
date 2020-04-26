import React, { useCallback, useMemo } from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import mq from '../../../styles/mq';

import Container from '../../styled/container';

import { ImageType } from '../../../types/image';

const query = graphql`
  {
    allFile(
      filter: { relativeDirectory: { eq: "home/about" } }
      sort: { fields: [name], order: [ASC] }
    ) {
      edges {
        node {
          childImageSharp {
            id
            fluid(
              maxWidth: 450
              maxHeight: 500
              fit: COVER
              cropFocus: CENTER
              quality: 80
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

interface StaticQueryProps {
  allFile: {
    edges: {
      node: ImageType;
    }[];
  };
}

const About: React.FC = () => {
  const { allFile } = useStaticQuery<StaticQueryProps>(query);

  const images = useMemo(() => allFile?.edges?.map((item) => item?.node), []);

  const renderImages = useCallback(
    (images: ImageType[]) => (
      <ul
        css={css`
          ${mq(`md`)} {
            display: flex;
            margin: 0 -20px;
          }
        `}
      >
        {images?.map((image) => (
          <li
            key={image?.childImageSharp?.id}
            css={css`
              margin-bottom: 50px;

              &:last-of-type {
                margin-bottom: 0;
              }

              ${mq(`md`)} {
                flex: 0 0 33.3333333%;
                max-width: 33.3333333%;
                margin-bottom: 0;
                padding: 0 20px;

                &:first-of-type {
                  height: 400px;
                  overflow: hidden;
                  margin-top: 50px;
                }

                &:nth-of-type(2) {
                  height: 500px;
                  overflow: hidden;
                  margin-top: 100px;
                }

                &:last-of-type {
                  height: 450px;
                  overflow: hidden;
                }
              }
            `}
          >
            <Img fluid={image?.childImageSharp?.fluid} />
          </li>
        ))}
      </ul>
    ),
    []
  );

  return (
    <section
      css={css`
        margin-bottom: 150px;
      `}
    >
      <Container>
        <div
          css={css`
            margin-bottom: 75px;
          `}
        >
          <h2>À propos</h2>
          <p
            css={css`
              max-width: 550px;
            `}
          >
            Quelles que soient vos envies, nous sommes à l’écoute de vos besoins
            <br />
            pour vous proposer des solutions à la hauteur de vos attentes.
          </p>
        </div>
        <div>{renderImages(images)}</div>
      </Container>
    </section>
  );
};

export default React.memo(About);
