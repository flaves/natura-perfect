import React, { useEffect, useState } from 'react';

import Header from './header';
import Footer from './footer';
import Loader from '../shared/loader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoaderFull, setIsLoaderFull] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaderFull(!!localStorage.getItem(`isLoaderFull`));
  }, []);

  return (
    <section>
      {!isLoaderFull && <Loader />}
      <Header />
      <main role="main">{children}</main>
      <Footer />
    </section>
  );
};

export default React.memo(Layout);
