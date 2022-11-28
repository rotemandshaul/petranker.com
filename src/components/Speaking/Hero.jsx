import React from 'react';
import { Container } from 'react-bootstrap';
import SpeakingHeroContent from './SpeakingHeroContent';

const Hero = () => (
  <section id="speaking">
    <Container fluid>
      <SpeakingHeroContent
        alt="speaking-image"
        filename="speaking_main.png"
        classname="hero-wrapper"
      />
    </Container>
  </section>
);

export default Hero;
