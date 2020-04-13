import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/helpers/seo';

import Hero from '../components/pages/home/hero';
import About from '../components/pages/home/about';
import Services from '../components/pages/home/services';
import Contact from '../components/shared/contact';

const Home: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Services />
    <Contact />
  </Layout>
);

export default React.memo(Home);
