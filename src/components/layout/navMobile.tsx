import React, { useCallback } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Link } from 'gatsby';
import { animated as a, useSpring, useTrail } from 'react-spring';

import mq from '../../styles/mq';

import { LinkType } from '../../types/link';
import { ThemeType } from '../../styles/theme';
import AnimTitle from '../animation/animTitle';

interface NavMobileProps {
  active: boolean;
  links: LinkType[];
}

const NavMobile: React.FC<NavMobileProps> = ({ active = false, links }) => {
  const translate = useSpring({
    transform: active
      ? `translate3d(0px, 0%, 0px)`
      : `translate3d(0px, -100%, 0px)`,
  });
  const reveals = useTrail(links.length, {
    opacity: active ? 1 : 0,
    delay: 500,
  });
  const { color } = useTheme<ThemeType>();

  const renderLinks = useCallback(
    () => (
      <ul>
        {reveals?.map((props, key) => {
          const link = links[key];

          return (
            <a.li
              key={key}
              css={css`
                margin-bottom: 50px;
              `}
              style={props}
            >
              <Link
                to={link?.path}
                css={css`
                  color: white;
                  font-family: Mixta, sans-serif;
                  font-size: 28px;
                  font-weight: 700;
                  transition: color 0.3s;

                  ${mq(`sm`)} {
                    font-size: 36px;
                  }
                `}
                activeStyle={{
                  color: `hsl(164, 19%, 15%)`,
                }}
              >
                {link?.label}
              </Link>
            </a.li>
          );
        })}
      </ul>
    ),
    [reveals]
  );

  return (
    <a.nav
      style={translate}
      css={css`
        display: initial;
        padding: 100px 50px;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${color.primary};
        z-index: 1000;

        ${mq(`md`)} {
          padding: 100px;
        }

        ${mq(`xl`)} {
          display: none;
        }
      `}
    >
      <div
        css={css`
          margin-bottom: 100px;
        `}
      >
        {renderLinks()}
      </div>
      <div
        css={css`
          color: hsl(164, 19%, 10%);
          font-family: Mixta, sans-serif;
          font-size: 24px;
          line-height: 2;
        `}
      >
        <AnimTitle delay={750} triggerOnce={false}>
          +32 499 62 95 59
        </AnimTitle>
        <br />
        <AnimTitle delay={1000} triggerOnce={false}>
          florian@natura-perfect.be
        </AnimTitle>
      </div>
    </a.nav>
  );
};

export default React.memo(NavMobile);
