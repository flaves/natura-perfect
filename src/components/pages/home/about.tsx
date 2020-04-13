import React, { useCallback, useMemo } from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import mq from '../../../styles/mq';

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
            fluid(
              maxWidth: 400
              maxHeight: 500
              fit: COVER
              cropFocus: CENTER
              quality: 60
            ) {
              ...GatsbyImageSharpFluid
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
          }
        `}
      >
        {images?.map((image) => (
          <li
            key={image?.childImageSharp?.id}
            css={css`
              ${mq(`md`)} {
                flex: 0 0 33.3333333%;
                max-width: 0 0 33.3333333%;
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
    <section>
      <div>
        <h2>About us</h2>
        <p>
          Nullam sodales rhoncus dignissim. Nulla ut congue quam, vel dapibus
          nulla. Duis quis neque auctor, congue nunc sed, porttitor ante.
        </p>
      </div>
      <div>{renderImages(images)}</div>
    </section>
  );
};

export default React.memo(About);
