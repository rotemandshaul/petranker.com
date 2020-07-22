import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
const Footer = ({ siteTitle, menuLinks }) => (
  <section id="footer">
    <Container>
      <Navbar expand="lg" className="footer-links">
        <Navbar.Brand id="nav-brand" className="footer-brand" href="/">
          {siteTitle}
        </Navbar.Brand>
        <Nav as="ul" id="nav">
          {menuLinks.map((link) => (
            <Nav.Item as="li" key={link.name}>
              <Link to={link.link} className="footer-link">
                {link.name}
              </Link>
            </Nav.Item>
          ))}
        </Nav>
      </Navbar>
      designed by{' '}
      <a href="https://github.com/shaulitto" target="_blank">
        shaul
      </a>{' '}
      ©Rotem Petranker.All rights reserved <br /> Icons made by{' '}
      <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">
        Eucalyp
      </a>{' '}
      from{' '}
      <a href="https://www.flaticon.com/" title="Flaticon">
        {' '}
        www.flaticon.com
      </a>
    </Container>
  </section>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
  /* eslint-disable react/forbid-prop-types */
  menuLinks: PropTypes.array,
};

export default Footer;
