import React, { useCallback } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Link } from 'gatsby';

import mq from '../../styles/mq';

import Flaves from '../../svg/flaves.svg';

import { links } from './header';

import { LinkType } from '../../types/link';
import { ThemeType } from '../../styles/theme';

const Footer: React.FC = () => {
  const { color } = useTheme<ThemeType>();

  const renderLinks = useCallback(
    (links: LinkType[]) => (
      <ul
        css={css`
          margin-bottom: 50px;

          ${mq(`md`)} {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      >
        {links?.map((link, key) => (
          <li
            key={key}
            css={css`
              ${mq(`md`)} {
                padding: 0 50px;
              }

              a {
                font-size: 14px;
                font-weight: 500;
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
    <footer
      css={css`
        padding: 50px;
        text-align: center;
      `}
    >
      {renderLinks(links)}
      <div
        css={css`
          font-size: 18px;
          line-height: 2;
          margin-bottom: 50px;
        `}
      >
        <div>+32 499 62 95 59</div>
        <div>florian@natura-perfect.be</div>
      </div>
      <div>
        <div
          css={css`
            color: ${color?.primary};
            font-family: Mixta, sans-serif;
            font-size: 20px;
            font-weight: 900;
            margin-bottom: 5px;
          `}
        >
          Natura Perfect
        </div>
        <div
          css={css`
            color: ${color?.primary};
            font-size: 12px;
            font-weight: 500;
          `}
        >
          &copy; {new Date().getFullYear()}
        </div>
      </div>
      <div
        css={css`
          margin-top: 50px;
          text-align: center;
        `}
      >
        <a href="https://flav.es" target="_blank" rel="noopener noreferrer">
          <Flaves />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
