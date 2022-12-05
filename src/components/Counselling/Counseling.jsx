import React from 'react';
import { Container } from 'react-bootstrap';
import HeroImg from '../Image/HeroImg';

export default function Counseling() {
  return (
    <>
      <section id="media-title">
        <h1>Individual Psychotherapy & Microdosing Coaching Services*</h1>
        <Container className="contact-hero-holder">
          <div className="hero-text-box">
            <p className="hero-info">Working together to get you to where you deserve to be.</p>
          </div>
          <div className="hero-image-holder">
            <HeroImg
              alt="contact_headshot"
              filename="contact_headshot.png"
              classname="hero-image"
            />
          </div>
        </Container>
      </section>
      <section id="about-top">
        <Container>
          <div className="hero-text-box">
            <h1 className="hero-info-text">
              I offer Individual therapy with a focus on Depression, anxiety & OCD.
            </h1>
            <h1 className="hero-info-text">
              As Canada's lead expert on the subject, I also offer microdosing coaching*.
            </h1>
          </div>
          <div className="read-more-info">
            <h2>Read more about the services that Rotem offers:</h2>
            <a href="https://www.psychologytoday.com/ca/therapists/rotem-petranker-toronto-on/1009425">
              To Rotem's profile on Psychology Today.
            </a>
          </div>
          <div className="info-warning-box">
            <p className="info-warning-text">
              *Coaching does not include supplying psychedelics or therapy while using psychedelics.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
