import React from 'react';
import { Helmet } from 'react-helmet';
import Academia from '../components/Academia/Academia';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const Academiapage = () => {
  const { lang } = headData;
  const { title, description } = headData.academia;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <Academia />
    </>
  );
};
export default Academiapage;
