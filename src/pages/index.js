import React from 'react';
import { Helmet } from 'react-helmet';
import Home from '../components/Home/Home';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}|Home</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <Home />
    </>
  );
};
