import React from 'react';

import Layout from '../components/layout';
import Hero from '../components/pages/contact/hero';
import Form from '../components/pages/contact/form';
import Join from '../components/pages/contact/form/join';

const Contact: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Form />
      <Join />
    </Layout>
  );
};

export default React.memo(Contact);
