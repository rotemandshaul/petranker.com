import React from 'react';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';
import Home from '../components/Home/Home';
import '../style/layout/layout.css';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <Home />
    </>
  );
};
