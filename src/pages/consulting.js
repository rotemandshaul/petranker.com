import React from 'react';
import { Helmet } from 'react-helmet';
import Consulting from '../components/Consulting/Consulting';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Consulting</title>
        <html lang={lang} />
        <meta name="description" content="Rotem Petranker | Psychedelic research - Consulting" />
      </Helmet>
      <Consulting />
    </>
  );
};
