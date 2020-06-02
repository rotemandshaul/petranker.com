import React from 'react';
import Layout from '../Layout/layout';
import Hero from './Hero';
import Work from './Work';
import Previews from './Previews';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Work />
      <Previews />
      <Work />
    </Layout>
  );
};

export default Home;
