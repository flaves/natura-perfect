import React, { useCallback, useMemo, useRef } from 'react';
import { css } from '@emotion/core';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import AliceCarousel from 'react-alice-carousel';

import mq from '../../../styles/mq';

import Container from '../../styled/container';
import services from '../../../data/services.json';

import ServiceEntity from '../../../types/service';
import { ImageType } from '../../../types/image';

const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "home/services" } }) {
      edges {
        node {
          childImageSharp {
            fluid(
              maxWidth: 300
              maxHeight: 400
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

interface StaticQuery {
  allFile: {
    edges: {
      node: ImageType;
    }[];
  };
}

const Services: React.FC = () => {
  const carousel = useRef(null);
  const { allFile } = useStaticQuery<StaticQuery>(query);

  const images = useMemo(() => allFile?.edges?.map((item) => item?.node), []);

  const servicesWithImage: ServiceEntity[] = useMemo(
    () =>
      services?.map((service: ServiceEntity, key: number) => ({
        ...service,
        image: images[key],
      })),
    []
  );

  console.log(carousel?.current);

  const renderServices = useCallback(
    () => (
      <AliceCarousel
        ref={carousel}
        autoPlay
        autoPlayInterval={3000}
        responsive={{
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 4,
          },
          1200: {
            items: 5,
          },
        }}
        buttonsDisabled
        dotsDisabled
      >
        {servicesWithImage?.map((service, key) => (
          <div
            key={key}
            css={css`
              margin: 0 20px;
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
                    padding: 0 1rem;

                    h3 {
                      color: white;
                      font-size: 40px;
                      text-align: center;
                    }
                  `}
                >
                  <h3>{service?.name}</h3>
                </div>
                <Img fluid={service?.image?.childImageSharp?.fluid} />
              </article>
            </Link>
          </div>
        ))}
      </AliceCarousel>
    ),
    []
  );

  return (
    <section
      css={css`
        margin-bottom: 150px;
        overflow: hidden;
      `}
    >
      <Container>
        <div
          css={css`
            margin-bottom: 100px;

            ${mq(`md`)} {
              text-align: center;
            }
          `}
        >
          <h2>Services</h2>
          <p
            css={css`
              ${mq(`md`)} {
                margin: auto;
                max-width: 490px;
              }
            `}
          >
            Vous disposez d’un budget serré ou vous rêvez de grands projets ?{' '}
            Notre large gamme de services est entièrement personnalisable.
          </p>
        </div>
      </Container>
      <div
        css={css`
          ${mq(`lg`)} {
            margin: 0 -100px;
          }
        `}
      >
        {renderServices()}
      </div>
    </section>
  );
};

export default React.memo(Services);
