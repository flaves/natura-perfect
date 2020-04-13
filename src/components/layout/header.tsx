import React from 'react';

import NavDesktop from './navDesktop';

import { LinkType } from '../../types/link';

export const links: LinkType[] = [
  {
    label: `Home`,
    path: `/`,
  },
  {
    label: `Services`,
    path: `/services`,
  },
  {
    label: `About`,
    path: `/about`,
  },
  {
    label: `Contact us`,
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
