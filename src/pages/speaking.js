import React from 'react';
import { Helmet } from 'react-helmet';
import Speaking from '../components/Speaking/Speaking';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Speaking</title>
        <html lang="en" />
        <meta
          name="description"
          content="Rotem Petranker | Psychedelic research - Public speaking"
        />
      </Helmet>
      <Speaking />
    </>
  );
};
