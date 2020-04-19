import React from 'react';

import NavDesktop from './navDesktop';

import { LinkType } from '../../types/link';

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
  return (
    <header>
      <NavDesktop links={links} />
    </header>
  );
};

export default Header;
