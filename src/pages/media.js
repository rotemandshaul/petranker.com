import React from 'react';
import { Helmet } from 'react-helmet';
import Media from '../components/Media/Media';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { lang } = headData;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rotem Petranker in the Media</title>
        <html lang="en" />
        <meta
          name="description"
          content="Experience Rotem Petranker's videos, podcast and radio interviews, and fascinating articles."
        />
      </Helmet>
      <Media />
    </>
  );
};
