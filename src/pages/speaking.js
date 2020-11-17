import React from 'react';
import { Helmet } from 'react-helmet';
import Speaking from '../components/Speaking/Speaking';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { lang } = headData;
  const { title, description } = headData.speaking;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <Speaking />
    </>
  );
};
