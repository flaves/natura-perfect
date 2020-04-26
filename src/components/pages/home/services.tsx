import React, { useCallback, useMemo } from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import services from '../../../data/services.json';
import ServiceEntity from '../../../types/service';
import { graphql, useStaticQuery } from 'gatsby';
import { ImageType } from '../../../types/image';

const query = graphql`
  {
    image: file(name: { eq: "hero" }, relativeDirectory: { eq: "contact" }) {
      childImageSharp {
        fluid(
          maxWidth: 400
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
`;

interface StaticQuery {
  image: ImageType;
}

const Services: React.FC = () => {
  const { image } = useStaticQuery<StaticQuery>(query);

  const servicesWithImage: ServiceEntity[] = useMemo(
    () =>
      services?.map((service: ServiceEntity) => ({
        ...service,
        image,
      })),
    []
  );

  const renderServices = useCallback(
    () => (
      <ul
        css={css`
          display: flex;
          margin: 0 -1rem;
          overflow: hidden;
        `}
      >
        {servicesWithImage?.map((service) => (
          <li
            css={css`
              flex: 0 0 25%;
              padding: 0 1rem;
            `}
          >
            <Link to="/services">
              <article
                css={css`
                  position: relative;

                  &:hover {
                    &::after,
                    & > div {
                      opacity: 1;
                    }
                  }

                  &::after {
                    opacity: 0;
                    transition: opacity 0.4s;
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: hsla(164, 19%, 27%, 0.8);
                  }
                `}
              >
                <div
                  css={css`
                    opacity: 0;
                    transition: opacity 0.5s;
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 2;

                    h3 {
                      color: white;
                      font-size: 40px;
                    }
                  `}
                >
                  <h3>{service?.name}</h3>
                </div>
                <Img fluid={service?.image?.childImageSharp?.fluid} />
              </article>
            </Link>
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
      <div
        css={css`
          text-align: center;
          margin-bottom: 100px;
        `}
      >
        <h2>Services</h2>
        <p
          css={css`
            max-width: 550px;
            margin: auto;
          `}
        >
          Nullam sodales rhoncus dignissim. Nulla ut congue quam, vel dapibus
          nulla. Duis quis neque auctor, congue nunc sed, porttitor ante.
        </p>
      </div>
      {renderServices()}
    </section>
  );
};

export default React.memo(Services);
