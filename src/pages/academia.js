import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/layout';
import PageHeader from '../components/pageHeader';

const Academia = () => (
  <>
    <Helmet>
      <title>Academia</title>
    </Helmet>
    <Layout>
      <PageHeader headerText="This is Rotem's Academic background" />
      <p>Here are all of Rotems academic achievments</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </>
);

export default Academia;
