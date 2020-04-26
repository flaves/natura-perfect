import React, { useCallback, useEffect, useRef } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Img from 'gatsby-image';
import { animated as a, useSpring } from 'react-spring';
import { ResizeObserver as polyfill } from '@juggle/resize-observer/lib/ResizeObserver';
import useMeasure from 'react-use-measure';
import AliceCarousel from 'react-alice-carousel';

import Close from '../../svg/close.svg';

import mq from '../../../styles/mq';

import { ImageType } from '../../../types/image';
import { ThemeType } from '../../../styles/theme';

interface GalleryProps {
  active: boolean;
  images: ImageType[];
  setCurrent: (S: number | undefined) => void;
}

const Gallery: React.FC<GalleryProps> = ({ active, images, setCurrent }) => {
  const section = useRef<HTMLElement>(null);
  const [ref, { height }] = useMeasure({ polyfill });
  const collapse = useSpring({
    maxHeight: active ? `${height}px` : `0px`,
    overflow: `hidden`,
  });
  const { color } = useTheme<ThemeType>();

  useEffect(() => {
    let id = 0;
    if (active) {
      window.setTimeout(() => {
        id = window.requestAnimationFrame(() => {
          section?.current?.scrollIntoView({
            behavior: `smooth`,
          });
        });
      }, 500);
    }
    return () => window.cancelAnimationFrame(id);
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
                width: 350px;
                height: 350px;
              `}
            />
          </div>
        ))}
      </AliceCarousel>
    ),
    [images]
  );

  return (
    <a.section
      ref={section}
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
      <div ref={ref}>
        <div
          css={css`
            padding: 150px 0;
            position: relative;
          `}
        >
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
  );
};

export default React.memo(Gallery);
