import React, { useEffect } from 'react';
import { css } from '@emotion/core';
import Img from 'gatsby-image';
import useMeasure from 'react-use-measure';

import mq from '../../../styles/mq';

import Button from '../../shared/button';

import ServiceEntity from '../../../types/service';

const isEven = (n: number) => n % 2 === 0;

interface ServiceProps {
  id: number;
  service: ServiceEntity;
  scrollTo: boolean;
  toggleCurrent: Function;
}

const Service: React.FC<ServiceProps> = ({
  id,
  service,
  scrollTo,
  toggleCurrent,
}) => {
  const [ref, { top, bottom }] = useMeasure();

  useEffect(() => {
    let id = 0;

    if (scrollTo) {
      id = window.requestAnimationFrame(() => {
        window.scrollTo({
          top: top - 100,
          behavior: 'smooth',
        });
      });
    }

    return () => window.cancelAnimationFrame(id);
  }, [scrollTo, top]);

  return (
    <article
      ref={ref}
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
            order: ${isEven(id) ? 1 : 2};
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
            order: ${isEven(id) ? 2 : 1};
            padding-left: ${isEven(id) ? 50 : 0}px;
            padding-right: ${isEven(id) ? 0 : 50}px;
          }

          ${mq(`lg`)} {
            padding-left: ${isEven(id) ? 75 : 0}px;
            padding-right: ${isEven(id) ? 0 : 75}px;
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
        <Button variant="black" onClick={() => toggleCurrent(id, bottom)}>
          Découvrez
        </Button>
      </div>
    </article>
  );
};

export default React.memo(Service);
