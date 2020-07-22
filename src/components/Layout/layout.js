import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { headData, menuLinks } from '../../mock/data';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { title } = headData;

  return (
    <>
      <Header menuLinks={menuLinks} siteTitle={title} />
      <main>{children}</main>
      <Footer menuLinks={menuLinks} siteTitle={title} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
