import React from 'react';
import { css } from '@emotion/core';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import { useTheme } from 'emotion-theming';

import { ThemeType } from '../../styles/theme';

interface LinkProps extends GatsbyLinkProps<any> {
  children: React.ReactNode;
  variant?: `black` | `white`;
}

const Link: React.FC<LinkProps> = ({ children, variant, ...props }) => {
  const { color } = useTheme<ThemeType>();

  const renderVariant = () => {
    switch (variant) {
      case `black`:
        return css`
          color: ${color.primary};

          span:first-of-type {
            background-color: hsl(164, 19%, 77%);
          }

          &:hover {
            color: white;

            span:first-of-type {
              background-color: ${color.primary};
            }
          }
        `;
      case `white`:
        return css`
          color: white;

          &:hover {
            color: hsl(164, 19%, 15%);

            span:first-of-type {
              background-color: white;
            }
          }
        `;
      default:
        return css`
          color: white;

          &:hover {
            color: hsl(164, 19%, 15%);

            span:first-of-type {
              background-color: white;
            }
          }
        `;
    }
  };

  return (
    <GatsbyLink
      {...props}
      css={css`
        ${renderVariant()};
        appearance: none;
        border: 0;
        background-color: transparent;
        font-family: Mixta, sans-serif;
        font-size: 30px;
        font-weight: 700;
        position: relative;
        transition: color 0.5s;
        padding: 0 5px;
        cursor: pointer;

        &:hover {
          span:first-of-type {
            height: 38px;
          }
        }
      `}
    >
      <span
        css={css`
          position: absolute;
          left: 0;
          bottom: 0;
          height: 20px;
          background-color: hsl(164, 19%, 15%);
          width: 100%;
          transition: background-color 0.2s, height 0.3s;
        `}
      />
      <span
        css={css`
          position: relative;
          z-index: 2;
        `}
      >
        {children}
      </span>
    </GatsbyLink>
  );
};

export default React.memo(Link);
