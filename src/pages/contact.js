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
      <title>Rotem Petranker | Psychedelics Researcher - Contact</title>
      <html lang="en" />
      <meta
        name="description"
        content="Want to know more about Rotem Petranker's work, or simply talk science? Reach out!"
      />
    </Helmet>
    <Layout>
      <ContactForm />
    </Layout>
  </>
);

export default Contact;
