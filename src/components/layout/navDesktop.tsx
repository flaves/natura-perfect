import React, { useCallback } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Link } from 'gatsby';

import Logo from '../../svg/logo.svg';

import mq from '../../styles/mq';

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
          display: none;
          height: 110px;

          ${mq(`lg`)} {
            flex: 1;
            display: flex;
            align-items: center;
          }
        `}
      >
        {links?.map((link, key) => (
          <li
            key={key}
            css={css`
              padding: 5px 30px 0 30px;

              & > a {
                color: ${color.primary};
                position: relative;

                &:hover {
                  color: hsl(164, 19%, 15%);
                }

                &.active {
                  &::after {
                    content: '';
                  }
                }

                &::after {
                  position: absolute;
                  width: 6px;
                  height: 6px;
                  left: 50%;
                  transform: translateX(-50%);
                  bottom: -12px;
                  border-radius: 50%;
                  background-color: ${color.primary};
                }
              }

              &:last-of-type {
                margin-left: auto;

                a {
                  color: ${color?.primary};
                  font-family: Mixta, sans-serif;
                  font-size: 20px;
                  font-weight: 900;
                  position: relative;

                  ${mq(`lg`)} {
                    font-size: 24px;
                  }

                  ${mq(`xl`)} {
                    font-size: 30px;
                  }
                }
              }

              a {
                font-weight: 600;
              }
            `}
          >
            <Link to={link?.path} activeClassName="active">
              {link?.label}
            </Link>
          </li>
        ))}
      </ul>
    ),
    []
  );

  return (
    <nav
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 110px;

        ${mq(`lg`)} {
          justify-content: initial;
          padding: 0 50px;
        }

        ${mq(`xl`)} {
          padding: 0 100px;
        }
      `}
    >
      <Link
        to="/"
        css={css`
          padding-top: 10px;

          svg {
            width: 50px;
            height: auto;
          }

          ${mq(`lg`)} {
            margin-right: 20px;
          }
        `}
      >
        <Logo />
      </Link>
      {renderLinks(links)}
    </nav>
  );
};

export default NavDesktop;
