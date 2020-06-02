import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/layout';

const About = () => (
  <>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Layout>
      <h1>This is the About page</h1>
      <p>Here is everything Rotem wants you to know about him</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </>
);

export default About;
