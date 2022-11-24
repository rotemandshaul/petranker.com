import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import useDocumentScrollThrottled from './useDocumentScrollThrottled';

const Header = ({ menuLinks }) => {
  const [showBorder, setShowBorder] = useState(false);

  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;

    setShowBorder(currentScrollTop > 2);
  });

  const borderBottomStyle = showBorder ? 'border' : '';

  return (
    <Navbar expand="md" sticky="top" className={`navbar-${borderBottomStyle}`}>
      <Navbar.Brand id="nav-brand" href="/">
        Rotem Petranker
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav as="ul" id="nav">
          {menuLinks.map((link) => (
            <Nav.Item as="li" key={link.id}>
              <Link to={link.link} key={link.id} activeStyle={{ borderBottom: 'solid 2px' }}>
                {link.name}
              </Link>
            </Nav.Item>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  menuLinks: PropTypes.array,
};

export default Header;
