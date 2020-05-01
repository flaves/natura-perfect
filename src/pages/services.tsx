import React, { useEffect, useState } from 'react';

import Layout from '../components/layout';
import Hero from '../components/pages/services/hero';
import List from '../components/pages/services/list';
import Contact from '../components/shared/contact';

const Services: React.FC = () => {
  const [currentService, setCurrentService] = useState<number | null>(null);

  useEffect(() => {
    setCurrentService(parseInt(localStorage.getItem(`service`) || ``));
    localStorage.removeItem(`service`);
  }, []);

  return (
    <Layout>
      <Hero />
      <List number={currentService} />
      <Contact />
    </Layout>
  );
};

export default React.memo(Services);
