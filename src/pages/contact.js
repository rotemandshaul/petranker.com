import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/layout';
import ContactForm from '../components/Contact/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const Contact = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Contact</title>
      <html lang="en" />
      <meta name="description" content="Rotem Petranker | Psychedelic research - Contact" />
    </Helmet>
    <Layout>
      <ContactForm />
    </Layout>
  </>
);

export default Contact;
