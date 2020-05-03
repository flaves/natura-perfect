import React, { useEffect, useRef } from 'react';
import { css } from '@emotion/core';
import Img from 'gatsby-image';

import mq from '../../../styles/mq';

import Button from '../../shared/button';

import ServiceEntity from '../../../types/service';
import AnimTitle from '../../animation/animTitle';

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
  const element = useRef<HTMLDivElement>(null);
  const animation = useRef<number>(0);

  useEffect(() => {
    if (scrollTo) {
      animation.current = requestAnimationFrame(() => {
        window.scrollTo({
          top: (element?.current?.offsetTop || 0) - 100,
          behavior: 'smooth',
        });
      });
    }
    return () => cancelAnimationFrame(id);
  }, [scrollTo]);

  return (
    <article
      ref={element}
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
          <AnimTitle delay={250}>{service?.name}</AnimTitle>
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
          <AnimTitle variant="fade" delay={500}>
            {service?.description}
          </AnimTitle>
        </p>
        <Button variant="black" onClick={() => toggleCurrent(id)}>
          Découvrez
        </Button>
      </div>
    </article>
  );
};

export default React.memo(Service);
