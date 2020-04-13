import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/helpers/seo';
import mq from '../styles/mq';

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <h1
      css={mq({
        color: [`red`, `blue`, `green`],
      })}
    >
      Hello
    </h1>
  </Layout>
);

export default Home;
