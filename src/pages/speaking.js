import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/layout';

const Speaking = () => (
  <>
    <Helmet>
      <title>Speaking</title>
    </Helmet>
    <Layout>
      <h1>This is the Speaking page</h1>
      <p>Here are all of Rotems speeches</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </>
);

export default Speaking;
