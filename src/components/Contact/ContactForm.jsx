/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { navigate } from 'gatsby-link';
import { Container } from 'react-bootstrap';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
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
      // eslint-disable-next-line no-alert
      .catch((error) => alert(error));
  };

  return (
    <>
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
                  required
                  placeholder="Your Name*"
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
                  required
                  placeholder="Your Email Address*"
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
                  required
                  placeholder="Your Message for Rotem*"
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
          <i className="fa fa-arrow-circle-up" aria-hidden="true" />
        </a>
      </section>
    </>
  );
};

export default ContactForm;
