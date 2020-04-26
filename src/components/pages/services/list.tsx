import React, { useCallback, useMemo, useState } from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import services from '../../../data/services.json';
import Gallery from './gallery';
import Button from '../../shared/button';

import mq from '../../../styles/mq';

import { ImageType } from '../../../types/image';
import ServiceEntity from '../../../types/service';

const isEven = (n: number) => n % 2 === 0;

const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "home/services" } }) {
      edges {
        node {
          childImageSharp {
            fluid(
              maxWidth: 400
              maxHeight: 550
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

const List: React.FC = () => {
  const [current, setCurrent] = useState<number | undefined>();
  const { allFile } = useStaticQuery<StaticQuery>(query);

  const images = useMemo(() => allFile?.edges?.map((item) => item?.node), []);

  const servicesWithImage: ServiceEntity[] = useMemo(
    () =>
      services?.map((service: ServiceEntity, key: number) => ({
        ...service,
        image: images[key],
        images,
      })),
    []
  );

  const toggleCurrent = useCallback(
    (key: number) =>
      current === key ? setCurrent(undefined) : setCurrent(key),
    [current]
  );

  const renderServices = useCallback(
    () => (
      <ul
        css={css`
          padding: 0px 50px;

          ${mq(`lg`)} {
            padding: 0 100px;
          }

          ${mq(`xl`)} {
            padding: 0 200px;
          }
        `}
      >
        {servicesWithImage?.map((service, key) => (
          <li
            key={key}
            css={css`
              margin-bottom: 75px;

              ${mq(`md`)} {
                margin-bottom: 100px;
              }
            `}
          >
            <article
              css={css`
                margin-bottom: 75px;

                ${mq(`md`)} {
                  display: flex;
                  justify-content: center;
                  margin-bottom: 100px;
                }
              `}
            >
              <div
                css={css`
                  margin-bottom: 50px;

                  ${mq(`md`)} {
                    margin-bottom: 0;
                    flex: 0 0 300px;
                    order: ${isEven(key) ? 1 : 2};
                  }

                  ${mq(`lg`)} {
                    flex: 0 0 350px;
                  }

                  ${mq(`xl`)} {
                    flex: 0 0 400px;
                  }
                `}
              >
                <Img fluid={service?.image?.childImageSharp?.fluid} />
              </div>
              <div
                css={css`
                  ${mq(`md`)} {
                    padding-top: 40px;
                    order: ${isEven(key) ? 2 : 1};
                    padding-left: ${isEven(key) ? 50 : 0}px;
                    padding-right: ${isEven(key) ? 0 : 50}px;
                  }

                  ${mq(`lg`)} {
                    padding-left: ${isEven(key) ? 75 : 0}px;
                    padding-right: ${isEven(key) ? 0 : 75}px;
                  }
                `}
              >
                <h2
                  css={css`
                    font-size: 40px;

                    ${mq(`lg`)} {
                      font-size: 60px;
                    }

                    ${mq(`xl`)} {
                      font-size: 80px;
                    }
                  `}
                >
                  {service?.name}
                </h2>
                <p
                  css={css`
                    text-align: justify;
                    margin-bottom: 50px;

                    ${mq(`xl`)} {
                      max-width: 600px;
                    }
                  `}
                >
                  {service?.description}
                </p>
                <Button variant="black" onClick={() => toggleCurrent(key)}>
                  Découvrez
                </Button>
              </div>
            </article>
            <Gallery
              active={current === key}
              images={service?.images}
              name={service?.name}
              setCurrent={setCurrent}
            />
          </li>
        ))}
      </ul>
    ),
    [current, setCurrent]
  );

  return <section>{renderServices()}</section>;
};

export default React.memo(List);
