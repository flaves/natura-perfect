import React, { useCallback, useEffect, useRef } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Img from 'gatsby-image';
import { animated as a, useSpring } from 'react-spring';
import useMeasure from 'react-use-measure';
import AliceCarousel from 'react-alice-carousel';

import Close from '../../../svg/close.svg';

import mq from '../../../styles/mq';

import { ImageType } from '../../../types/image';
import { ThemeType } from '../../../styles/theme';

interface GalleryProps {
  active: boolean;
  images: ImageType[];
  name: string;
  setCurrent: (S: number | undefined) => void;
}

const Gallery: React.FC<GalleryProps> = ({
  active,
  images,
  name,
  setCurrent,
}) => {
  const element = useRef<HTMLDivElement>(null);
  const [heightRef, { height }] = useMeasure();
  const collapse = useSpring({
    maxHeight: active ? `${height}px` : `0px`,
    overflow: `hidden`,
  });
  const { color } = useTheme<ThemeType>();
  const id = useRef<number>(0);

  useEffect(() => {
    if (active) {
      window.setTimeout(() => {
        id.current = requestAnimationFrame(() => {
          window.scrollTo({
            top: element?.current?.offsetTop,
            behavior: `smooth`,
          });
        });
      }, 500);
    }
    return () => cancelAnimationFrame(id.current);
  }, [active]);

  const renderImages = useCallback(
    () => (
      <AliceCarousel
        autoPlay
        autoPlayInterval={3000}
        responsive={{
          0: {
            items: 1,
          },
          576: {
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
        {images?.map((image, key) => (
          <div
            key={key}
            css={css`
              margin: 0 20px;
              overflow: hidden;
            `}
          >
            <Img
              fluid={image?.childImageSharp?.fluid}
              css={css`
                height: 350px;

                ${mq(`sm`)} {
                  width: 350px;
                }
              `}
            />
          </div>
        ))}
      </AliceCarousel>
    ),
    [images]
  );

  return (
    <div ref={element}>
      <a.section
        style={collapse}
        css={css`
          overflow: hidden;
          background-color: ${color.primary};
          margin: 0 -50px;

          ${mq(`md`)} {
            margin: 0 -100px;
          }

          ${mq(`xl`)} {
            margin: 0 -200px;
          }
        `}
      >
        <div ref={heightRef}>
          <div
            css={css`
              padding: 50px 0 150px 0;
              position: relative;
            `}
          >
            <h3
              css={css`
                color: hsl(164, 19%, 15%);
                font-size: 50px;
                margin-bottom: 50px;
                text-align: center;
              `}
            >
              {name}
            </h3>
            <div
              css={css`
                ${mq(`lg`)} {
                  margin: 0 -100px;
                }
              `}
            >
              {renderImages()}
            </div>
            <div
              css={css`
                width: 50px;
                height: 50px;
                background-color: hsl(164, 19%, 15%);
                position: absolute;
                left: 50%;
                transform: translate(-50%);
                bottom: 50px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: transform 0.3s;

                &:hover {
                  transform: translate(-50%) rotate(90deg);
                }

                svg {
                  width: 15px;
                  height: 15px;
                  fill: white;
                }
              `}
              onClick={() => setCurrent(undefined)}
            >
              <Close />
            </div>
          </div>
        </div>
      </a.section>
    </div>
  );
};

export default React.memo(Gallery);
