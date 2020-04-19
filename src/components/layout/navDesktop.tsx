import React, { useCallback } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Link } from 'gatsby';

import { LinkType } from '../../types/link';
import { ThemeType } from '../../styles/theme';

interface NavDesktopProps {
  links: LinkType[];
}

const NavDesktop: React.FC<NavDesktopProps> = ({ links }) => {
  const { color } = useTheme<ThemeType>();
  const renderLinks = useCallback(
    (links: LinkType[]) => (
      <ul
        css={css`
          flex: 1;
          display: flex;
          align-items: center;
          height: 110px;
        `}
      >
        {links?.map((link, key) => (
          <li
            key={key}
            css={css`
              padding: 5px 30px 0 30px;

              &:last-of-type {
                margin-left: auto;

                a {
                  color: ${color?.primary};
                  font-family: Mixta, sans-serif;
                  font-size: 30px;
                  font-weight: 900;
                }
              }

              a {
                font-weight: 600;
              }
            `}
          >
            <Link to={link?.path}>{link?.label}</Link>
          </li>
        ))}
      </ul>
    ),
    []
  );

  return (
    <nav
      css={css`
        height: 110px;
        display: flex;
        align-items: center;
        padding: 0 100px;
      `}
    >
      <Link
        to="/"
        css={css`
          color: ${color?.primary};
          font-family: Mixta, sans-serif;
          font-size: 30px;
          font-weight: 900;
          margin-right: 20px;
        `}
      >
        Natura Perfect
      </Link>
      {renderLinks(links)}
    </nav>
  );
};

export default NavDesktop;
