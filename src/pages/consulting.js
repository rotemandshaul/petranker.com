import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/layout';

const Consulting = () => (
  <>
    <Helmet>
      <title>Consulting</title>
    </Helmet>
    <Layout>
      <h1>This is the Consulting page</h1>
      <p>Here are all of Rotems partners</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </>
);

export default Consulting;
