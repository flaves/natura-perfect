import React from 'react';

import Layout from '../components/layout';
import Hero from '../components/pages/services/hero';
import List from '../components/pages/services/list';
import Contact from '../components/shared/contact';

const Services: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <List />
      <Contact />
    </Layout>
  );
};

export default React.memo(Services);
