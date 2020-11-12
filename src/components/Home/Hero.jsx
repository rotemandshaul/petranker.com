import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeroImg from '../Image/HeroImg';
import Fade from 'react-reveal/Fade';
import HomepageContext from '../../context/context';

const Hero = () => {
  const { hero } = useContext(HomepageContext);
  const { img, title, line1, line2, line3, line4, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <div className="hero-text-wrapper">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">{title}</h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-text">{line1}</p>
            <p className="hero-text">{line2}</p>
            <p className="hero-text">{line3}</p>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1500} distance="30px">
            <p className="hero-cta">
              <a className="cta-btn cta-btn--hero" href="#cards-section-top">
                {cta}
              </a>
            </p>
          </Fade>
        </div>
        <div className="hero-image-holder">
          <HeroImg alt="headshot" filename={img} classname="hero-image" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
