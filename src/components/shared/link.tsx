import React from 'react';
import { css } from '@emotion/core';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';

interface LinkProps extends GatsbyLinkProps<any> {
  children: React.ReactNode;
  variant?: `black` | `white`;
}

const Link: React.FC<LinkProps> = ({ children, variant, ...props }) => {
  const renderVariant = () => {
    switch (variant) {
      case `black`:
        return css`
          color: black;
        `;
      case `white`:
        return css`
          color: white;
        `;
      default:
        return css`
          color: white;
        `;
    }
  };

  return (
    <GatsbyLink
      {...props}
      css={css`
        ${renderVariant()};
        font-family: Mixta, sans-serif;
        font-size: 30px;
        font-weight: 700;
        position: relative;
        transition: color 0.5s;
        padding: 0 5px;

        &:hover {
          color: hsl(164, 19%, 15%);

          span:first-of-type {
            background-color: white;
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
