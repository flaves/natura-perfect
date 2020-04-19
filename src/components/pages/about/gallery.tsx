import React, { useCallback, useMemo } from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import mq from '../../../styles/mq';

import { ImageType } from '../../../types/image';

const query = graphql`
  {
    allFile(
      filter: {
        relativeDirectory: { eq: "about/gallery" }
        name: { nin: ["1", "2"] }
      }
      sort: { fields: [name], order: [ASC] }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(
              maxWidth: 400
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
    }
    leftOne: file(
      name: { eq: "1" }
      relativeDirectory: { eq: "about/gallery" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 300
          maxHeight: 250
          cropFocus: CENTER
          fit: COVER
          quality: 80
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    leftTwo: file(
      name: { eq: "2" }
      relativeDirectory: { eq: "about/gallery" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 300
          maxHeight: 250
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

interface StaticQueryProps {
  allFile: {
    edges: {
      node: ImageType;
    }[];
  };
  leftOne: ImageType;
  leftTwo: ImageType;
}

const Gallery: React.FC = () => {
  const { allFile, leftOne, leftTwo } = useStaticQuery<StaticQueryProps>(query);

  const images = useMemo(() => allFile?.edges?.map((item) => item?.node), []);

  const renderImages = useCallback(
    (images: ImageType[]) => (
      <ul
        css={css`
          ${mq(`md`)} {
            display: flex;
            align-items: flex-end;
            margin: 0 -100px;
          }
        `}
      >
        <li
          css={css`
            ${mq(`md`)} {
              flex: 0 0 25%;
              max-width: 25%;
              padding: 0 10px;
            }
          `}
        >
          <Img
            fluid={leftOne?.childImageSharp?.fluid}
            css={css`
              margin-bottom: 20px;
              height: 250px;
            `}
          />
          <Img
            fluid={leftTwo?.childImageSharp?.fluid}
            css={css`
              height: 250px;
            `}
          />
        </li>
        {images?.map((image) => (
          <li
            css={css`
              overflow: hidden;

              ${mq(`md`)} {
                flex: 0 0 25%;
                max-width: 25%;
                padding: 0 10px;
              }

              &:nth-of-type(1) {
                img {
                  height: 250px;
                }
              }

              &:nth-of-type(2) {
                height: 570px;
              }

              &:nth-of-type(3) {
                height: 500px;
              }

              &:last-of-type {
                height: 570px;
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
    <div
      css={css`
        overflow: hidden;
        margin-bottom: 150px;
      `}
    >
      {renderImages(images)}
    </div>
  );
};

export default React.memo(Gallery);
