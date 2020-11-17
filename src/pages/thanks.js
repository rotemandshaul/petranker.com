import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/layout';
import ThanksImgHero from '../components/Image/ThanksImgHero';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const ThanksPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Thank You for Contacting Rotem!</title>
      <html lang="en" />
      <meta
        name="description"
        content="Rotem will get back to you as soon as possible, meanwhile take a look at this beautiful photo from Israeli desert."
      />
    </Helmet>
    <Layout>
      <section id="thanks">
        <ThanksImgHero
          alt="thanks-image"
          filename="thank_you_image.png"
          classname="thanks-image-wrapper"
        />
      </section>
    </Layout>
  </>
);

export default ThanksPage;
