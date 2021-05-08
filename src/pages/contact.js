import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/layout';
import ContactForm from '../components/Contact/ContactForm';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const Contactpage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{headData.contact.title}</title>
      <html lang="en" />
      <meta name="description" content={headData.contact.description} />
    </Helmet>
    <Layout>
      <ContactForm />
    </Layout>
  </>
);

export default Contactpage;
