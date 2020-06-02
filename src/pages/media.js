import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/layout';

const Media = () => (
  <>
    <Helmet>
      <title>Media</title>
    </Helmet>
    <Layout>
      <h1>This is the Media page</h1>
      <p>Here are all of Rotems media appearences</p>
      <div>
        <a href="https://www.youtube.com/watch?v=RPabDletUmw">Video</a>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </>
);

export default Media;
