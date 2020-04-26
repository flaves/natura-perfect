import React from 'react';

import Layout from '../components/layout';
import Hero from '../components/pages/services/hero';
import List from '../components/pages/services/list';

const Services: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <List />
    </Layout>
  );
};

export default React.memo(Services);
