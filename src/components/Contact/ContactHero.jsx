import React from 'react';
import { Container } from 'react-bootstrap';
import HeroImg from '../Image/HeroImg';

export default function ContactHero() {
  return (
    <section id="media-title">
      <Container className="contact-hero-holder">
        <div className="hero-text-wrapper">
          <p className="contact-info">
            You can contact Rotem via email at{' '}
            <a href="mailto:rotem@petranker.com">rotem@petranker.com</a> or you can fill out the
            form below.
          </p>
        </div>
        <div className="hero-image-holder">
          <HeroImg alt="contact_headshot" filename="contact_headshot.png" classname="hero-image" />
        </div>
      </Container>
    </section>
  );
}
