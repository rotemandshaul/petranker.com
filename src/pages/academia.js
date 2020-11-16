import React from 'react';
import { Helmet } from 'react-helmet';
import Academia from '../components/Academia/Academia';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rotem Petranker | Psychedelic Scholar - Academic Publications</title>
        <html lang={lang} />
        <meta
          name="description"
          content="Read all of Rotem Petranker's academic publications and get informed about cutting edge research in the field of psychedelics."
        />
      </Helmet>
      <Academia />
    </>
  );
};
