import React from 'react';
import Layout from '../components/Layout/layout';
import ThanksImgHero from '../components/Image/ThanksImgHero';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const ThanksPage = () => (
  <Layout>
    <section id="thanks">
      <ThanksImgHero
        alt="thanks-image"
        filename="thank_you_image.png"
        classname="thanks-image-wrapper"
      />
    </section>
  </Layout>
);

export default ThanksPage;
