import React, { useCallback, useEffect, useRef } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Img from 'gatsby-image';
import { animated as a, useSpring } from 'react-spring';
import { ResizeObserver as polyfill } from '@juggle/resize-observer/lib/ResizeObserver';
import useMeasure from 'react-use-measure';

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
      <ul
        css={css`
          display: flex;
          justify-content: center;
          margin: 0 -2rem;
        `}
      >
        {images?.map((image, key) => (
          <li
            key={key}
            css={css`
              padding: 0 2rem;
            `}
          >
            <Img
              fluid={image?.childImageSharp?.fluid}
              css={css`
                width: 350px;
                height: 350px;
              `}
            />
          </li>
        ))}
      </ul>
    ),
    [images]
  );

  return (
    <a.section
      ref={section}
      style={collapse}
      css={css`
        background-color: ${color.primary};
        overflow: hidden;
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
          {renderImages()}
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
