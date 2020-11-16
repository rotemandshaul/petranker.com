import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../components/About/About';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Read More About Rotem Petranker</title>
        <html lang={lang} />
        <meta
          name="description"
          content="Rotem Petranker, an international expert and ground breaking researcher in the field of psychedelics. Read more about his story and perspective."
        />
      </Helmet>
      <About />
    </>
  );
};
