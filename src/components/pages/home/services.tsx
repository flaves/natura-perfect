import React, { useCallback, useMemo } from 'react';
import { css } from '@emotion/core';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import AliceCarousel from 'react-alice-carousel';

import mq from '../../../styles/mq';

import Next from '../../shared/carousel/next';
import Container from '../../styled/container';
import services from '../../../data/services.json';
import AnimTitle from '../../animation/animTitle';

import ServiceEntity from '../../../types/service';
import { ImageType } from '../../../types/image';

const query = graphql`
  {
    allFile(
      filter: { relativeDirectory: { eq: "home/services" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(
              maxWidth: 350
              maxHeight: 450
              fit: COVER
              cropFocus: ATTENTION
              quality: 90
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

let carousel: AliceCarousel | null;

const Services: React.FC = () => {
  const { allFile } = useStaticQuery<StaticQuery>(query);

  const images = useMemo(() => allFile?.edges?.map((item) => item?.node), []);

  const servicesWithImage: ServiceEntity[] = useMemo(
    () =>
      services?.map((service: ServiceEntity, key: number) => ({
        ...service,
        image: images?.[key],
      })),
    []
  );

  const renderServices = useCallback(
    () => (
      <AliceCarousel
        autoPlay
        autoPlayInterval={3000}
        disableAutoPlayOnAction
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
        ref={(el) => (carousel = el)}
      >
        {servicesWithImage?.map((service, key) => (
          <div
            key={key}
            css={css`
              margin: 0 20px;
            `}
          >
            <Link
              to="/services"
              onClick={() => localStorage.setItem(`service`, key.toString())}
            >
              <article
                css={css`
                  position: relative;

                  &:hover {
                    &::after,
                    & > div {
                      opacity: 1;
                    }
                  }

                  ${mq(`lg`)} {
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
                  }
                `}
              >
                <div
                  css={css`
                    opacity: 1;
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
                      font-size: 40px;
                      text-align: center;
                      color: white;
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
          <h2>
            <AnimTitle delay={500}>Services</AnimTitle>
          </h2>
          <p
            css={css`
              ${mq(`md`)} {
                margin: auto;
                max-width: 490px;
              }
            `}
          >
            <AnimTitle variant="fade" delay={750}>
              Vous disposez d’un budget serré ou vous rêvez de grands projets ?{' '}
              Notre large gamme de services est entièrement personnalisable.
            </AnimTitle>
          </p>
        </div>
      </Container>
      <div
        css={css`
          text-align: center;

          ${mq(`lg`)} {
            margin: 0 -100px;
          }
        `}
      >
        {renderServices()}
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 100px;
            margin: auto;
          `}
        >
          <Next onClick={() => carousel?.slidePrev()} right={false} />
          <Next onClick={() => carousel?.slideNext()} />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Services);
