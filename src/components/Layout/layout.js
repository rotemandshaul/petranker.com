import React from 'react';
import PropTypes from 'prop-types';
import { headData, menuLinks } from '../../mock/data';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { title } = headData;

  return (
    <>
      <Header menuLinks={menuLinks} siteTitle={title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
