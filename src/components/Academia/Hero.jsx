import React from 'react';
import { Container } from 'react-bootstrap';
import AcademiaHeroContent from './AcademiaHeroContent';

const Hero = () => {
  return (
    <section id="academia">
      <Container fluid>
        <AcademiaHeroContent
          alt="academia-image"
          filename="academia.png"
          classname="hero-wrapper"
        />
      </Container>
    </section>
  );
};

export default Hero;
