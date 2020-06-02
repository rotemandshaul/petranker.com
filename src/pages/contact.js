import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/layout';

const Contact = () => (
  <>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <Layout>
      <h1>This is the Contact page</h1>
      <p>Here is how you can contact Rotem</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </>
);

export default Contact;
