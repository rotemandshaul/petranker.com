import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/layout';
import ContactForm from '../components/Contact/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

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
