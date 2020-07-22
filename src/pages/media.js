import React from 'react';
import { Helmet } from 'react-helmet';
import Media from '../components/Media/Media';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  return (
    <>
      <Helmet>
        <title>Media</title>
      </Helmet>
      <Media />
    </>
  );
};
