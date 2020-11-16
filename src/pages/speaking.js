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
        <title>Request Rotem To Speak About His Research</title>
        <html lang="en" />
        <meta
          name="description"
          content="Rotem Petranker has vast experience speaking about his research, get in touch to invite Rotem to talk. "
        />
      </Helmet>
      <Speaking />
    </>
  );
};
