import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/layout';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => (
  <>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <Layout>
      <ContactForm />
    </Layout>
  </>
);

export default Contact;
