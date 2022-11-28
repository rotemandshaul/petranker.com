import React from 'react';
import { Container } from 'react-bootstrap';
import HeroImg from '../Image/HeroImg';

export default function Counseling() {
  return (
    <>
      <section id="media-title">
        <h1>Individual Psychotherapy & Microdosing Coaching Services</h1>
        <Container className="contact-hero-holder">
          <div className="hero-text-box">
            <p className="hero-info-text">
              Working together to get you to where you deserve to be.
            </p>
            <p className="hero-info-text">Located in Downtown Toronto, serving the GTA online.</p>
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
          <div className="about-top-wrapper">
            <div className="about-text-holder">
              <div id="media-header">
                <h1>
                  I offer Individual therapy with a focus on Depression, anxiety & OCD. As Canada's
                  lead expert on the subject, I also offer microdosing coaching.
                </h1>
              </div>
              <div className="read-more-info">
                <h1>Read more about the services that Rotem offers:</h1>
                <a href="https://www.psychologytoday.com/ca/therapists/rotem-petranker-toronto-on/1009425">
                  https://www.psychologytoday.com/ca/therapists/rotem-petranker-toronto-on/1009425
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
