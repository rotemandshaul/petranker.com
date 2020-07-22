import React from 'react';
import Layout from '../Layout/layout';
import AboutHero from '../About/AboutHero';
import AboutCloser from '../About/AboutCloser';
import { Container } from 'react-bootstrap';

const About = () => (
  <>
    <Layout>
      <section id="media-title">
        <h1>About Rotem</h1>
        <a href="#about-top">
          <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
        </a>
      </section>
      <section id="about-top">
        <Container>
          <div className="about-top-wrapper">
            <div className="about-image-holder">
              <AboutHero
                alt="about-top-image"
                filename="about1.png"
                classname="about-section-top-image"
              />
              <div className="photo-credit">
                <p>Photo: Ammar Ijaz</p>
              </div>
            </div>
            <div className="about-text-holder">
              <p>Rotem was born in Haifa, Israel, and emigrated to Toronto at the age of 24.</p>
              <p>
                He started his academic career as a physics major in the pursuit of the fundamental
                principles of reality, but quickly realized that we are limited more by our
                psychology than anything else.
              </p>
              <p>
                He started doing research with various international collaborators as of the second
                year of his undergraduate degree, and hasn’t stopped since.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section id="about-bottom">
        <Container>
          <div className="about-bottom-wrapper">
            <div className="about-text-holder">
              <p>
                Rotem’s interests have since become more focused on learning how to live a good
                life, and how to teach these principles.
              </p>
              <p>
                He believes that being able to weather life’s storms is an important part of the
                Good Life, but being creative and attentive to the process are equally important
                parts.
              </p>
              <p>
                Rotem is particularly excited about psychedelics as a means to transcend normal
                conscious experience in a way that helps individuals live the Good Life.{' '}
              </p>
            </div>
            <div className="about-text-holder">
              <p>
                While doing research is important, Rotem feels strongly that doing research the
                right way is necessary.
              </p>
              <p>
                Rotem is a strong proponent of Open Science, and has published about the topic in
                both popular and academic media outlets.
              </p>
              <p>
                Rotem spends much of his free time walking his dog, training for marathons,
                meditating, and travelling.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section id="about-doggo">
        <Container fluid>
          <AboutCloser
            alt="about-hero-closer"
            filename="about3.png"
            classname="about-section-bottom-image"
          />
        </Container>
      </section>
      <section id="media-footer">
        <a href="#media-title">
          <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
        </a>
      </section>
    </Layout>
  </>
);

export default About;
