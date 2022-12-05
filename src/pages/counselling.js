import React from 'react';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';
import Layout from '../components/Layout/layout';
import Counselling from '../components/Counselling/Counseling';
import ContactForm from '../components/Contact/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const Counsellingpage = () => {
  const { lang } = headData;
  const { title, description } = headData.counseling;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <Layout>
        <Counselling />
        <div>
          <h1 className="hero-info-text">Directly Book With Rotem:</h1>
        </div>
        <ContactForm />
      </Layout>
    </>
  );
};
export default Counsellingpage;
