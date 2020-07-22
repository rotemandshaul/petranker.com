import React from 'react';
import Layout from '../Layout/layout';
import ConsultingImg from '../Image/ConsultingImg';
import { Container } from 'react-bootstrap';

const Consulting = () => (
  <>
    <Layout>
      <section id="consulting">
        <div className="consulting-banner">
          <div className="consulting-text-box">
            <h1 className="consulting-text-header">Consulting</h1>
            <p>
              Rotem is currently consulting exclusively with{' '}
              <a href="https://www.cybin.com/" target="_blank">
                Cybin Corp
              </a>
              , <br />a leading company in the psychedelic space.
            </p>
            <p>He may be able to help you make your business more science-based, however.</p>
            <p>Get in touch to find out.</p>
            <div className="btn-holder">
              <a
                rel="noopener noreferrer"
                className="cta-btn cta-btn--cards-consulting"
                href="/contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="partner-holder">
          <div className="consulting-partner-link">
            <a href="https://www.cybin.com/" target="_blank" rel="noopener noreferrer">
              <ConsultingImg alt="Cybin_logo" filename="cybin_logo.png" classname="partner-logo" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  </>
);

export default Consulting;
