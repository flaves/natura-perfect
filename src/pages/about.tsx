import React from 'react';
import Layout from '../components/layout';

import Hero from '../components/pages/about/hero';
import Gallery from '../components/pages/about/gallery';
import Contact from '../components/shared/contact';

const About: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Gallery />
      <Contact />
    </Layout>
  );
};

export default About;
