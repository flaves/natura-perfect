import React, { useState } from 'react';

import NavDesktop from './navDesktop';
import NavMobile from './navMobile';

import { LinkType } from '../../types/link';
import { css } from '@emotion/core';
import mq from '../../styles/mq';

export const links: LinkType[] = [
  {
    label: `Accueil`,
    path: `/`,
  },
  {
    label: `Nos Services`,
    path: `/services`,
  },
  {
    label: `À propos de nous`,
    path: `/about`,
  },
  {
    label: `Contactez-nous`,
    path: `/contact`,
  },
];

const Header: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <header>
      <NavDesktop links={links} />
      <NavMobile active={active} links={links} />
      <div
        css={css`
          position: fixed;
          right: 30px;
          bottom: 30px;
          width: 65px;
          height: 65px;
          z-index: 1001;
          background-color: hsl(164, 19%, 15%);
          border-radius: 50%;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          box-shadow: 0 0 10px hsl(164, 19%, 15%, 0.5);
          cursor: pointer;

          ${mq(`lg`)} {
            display: none;
          }
        `}
        onClick={() => setActive(!active)}
      >
        {active ? `fermer` : `menu`}
      </div>
    </header>
  );
};

export default Header;
