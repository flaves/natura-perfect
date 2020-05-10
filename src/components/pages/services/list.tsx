import React, { useCallback, useMemo, useState } from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';

import services from '../../../data/services.json';
import Service from './service';
import Gallery from './gallery';

import mq from '../../../styles/mq';

import { ImageType } from '../../../types/image';
import ServiceEntity from '../../../types/service';

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
              maxWidth: 400
              maxHeight: 550
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

interface ListProps {
  number: number | null;
}

const List: React.FC<ListProps> = ({ number }) => {
  const [current, setCurrent] = useState<number | undefined>();
  const { allFile } = useStaticQuery<StaticQuery>(query);

  const images = useMemo(() => allFile?.edges?.map((item) => item?.node), []);

  const servicesWithImage: ServiceEntity[] = useMemo(
    () =>
      services?.map((service: ServiceEntity, key: number) => ({
        ...service,
        image: images?.[key],
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
          padding: 0 50px;

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
            <Service
              id={key}
              service={service}
              scrollTo={number === key}
              toggleCurrent={toggleCurrent}
            />
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
    [current, setCurrent, number, toggleCurrent]
  );

  return <section>{renderServices()}</section>;
};

export default React.memo(List);
