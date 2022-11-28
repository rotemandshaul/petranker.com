import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Layout from '../Layout/layout';
import ConsultingImg from '../Image/ConsultingImg';

const Consulting = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);
  return (
    <>
      <Layout>
        <section id="consulting">
          <div className="consulting-banner">
            <div className="consulting-text-box">
              <h1 className="consulting-text-header">Consulting</h1>
              <Fade bottom={isMobile} duration={1500} delay={500} distance="30px">
                {' '}
                <p>Rotem may be able to help you make your business more science-based.</p>
              </Fade>
              <Fade bottom={isMobile} duration={1500} delay={500} distance="30px">
                {' '}
                <p className="bolder">Get in touch to find out:</p>
              </Fade>
              <Fade bottom={isMobile} duration={1500} delay={500} distance="30px">
                <div className="btn-holder">
                  <a
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--cards-consulting"
                    href="/contact"
                  >
                    Contact
                  </a>
                </div>
              </Fade>
            </div>
          </div>
          <div className="partner-holder">
            <Fade bottom={isMobile} duration={1500} delay={500} distance="30px">
              <div className="consulting-partner-link">
                <a
                  href="https://www.petranker.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ConsultingImg
                    alt="consulting_image"
                    filename="private_consulting.png"
                    classname="partner-logo"
                  />
                </a>
              </div>
            </Fade>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Consulting;
