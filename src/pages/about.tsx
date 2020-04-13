import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/helpers/seo';

import Hero from '../components/pages/about/hero';
import Gallery from '../components/pages/about/gallery';
import Contact from '../components/shared/contact';
import Presentation from '../components/pages/about/presentation';

const About: React.FC = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Hero />
      <Gallery />
      <Presentation />
      <Contact />
    </Layout>
  );
};

export default React.memo(About);
