import React from 'react';
import { navigate } from 'gatsby-link';
import { Container } from 'react-bootstrap';
import HeroImg from '../Image/HeroImg';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const ContactForm = () => {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    <>
      <section id="media-title">
        <Container className="contact-hero-holder">
          <div className="hero-text-wrapper">
            <p className="contact-info">
              You can contact Rotem via email at{' '}
              <a href="mailto:rotem@boredomlab.org">rotem@boredomlab.org</a> or you can fill out the
              form below.
            </p>
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
      <section id="form-section">
        <Container>
          <form
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                {/* Name*: */}
                <input
                  className="name-input"
                  type="text"
                  name="name"
                  placeHolder="Name"
                  onChange={handleChange}
                />
              </label>
            </p>
            <p>
              <label>
                {/* Email*: */}
                <input
                  className="email-input"
                  type="email"
                  name="email"
                  placeHolder="Email"
                  onChange={handleChange}
                />
              </label>
            </p>
            <p>
              <label>
                {/* Message*: */}
                <textarea
                  className="message-input"
                  name="message"
                  placeHolder="Message"
                  onChange={handleChange}
                />
              </label>
            </p>
            <p>
              <button className="cta-btn cta-btn--contact" type="submit">
                Submit
              </button>
            </p>
          </form>
        </Container>
      </section>
      <section id="media-footer">
        <a href="#media-title">
          <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
        </a>
      </section>
    </>
  );
};

export default ContactForm;
