import React from 'react';

import Layout from '../components/layout';
import Hero from '../components/pages/contact/hero';

const Contact: React.FC = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default React.memo(Contact);
