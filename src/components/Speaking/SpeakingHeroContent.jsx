import React, { useEffect, useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import Fade from 'react-reveal/Fade';

const AcademiaHeroContent = ({ filename, alt, classname }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      const imageFluid = image.node.childImageSharp.fluid;

      const [isMobile, setIsMobile] = useState(false);

      useEffect(() => {
        if (window.innerWidth > 769) {
          setIsMobile(false);
        } else {
          setIsMobile(true);
        }
      }, []);

      return (
        <BackgroundImage alt={alt} fluid={imageFluid} className={classname}>
          <div className="hero-content">
            <h1 style={{ paddingBottom: '2rem' }}>Speaking & Talks</h1>
            <Fade bottom={isMobile} duration={1500} delay={500} distance="30px">
              <p>
                Rotem has given talks in a variety of venues to diverse audiences ranging from
                laypeople to experts.
              </p>
            </Fade>
            <Fade bottom={isMobile} duration={1500} delay={500} distance="30px">
              <p>
                His experience includes giving talks online and in person to classes, businesses,
                and at conferences.
              </p>
            </Fade>
            <Fade bottom={isMobile} duration={1500} delay={500} distance="30px">
              <p>
                Get in touch for more information about Rotem’s availability and to create a talk
                specifically tailored for your needs.
              </p>
            </Fade>
            <Fade bottom={isMobile} duration={1500} delay={500} distance="30px">
              <div className="btn-holder">
                <a
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--cards-speaking"
                  href="/contact"
                >
                  Contact
                </a>
              </div>
            </Fade>
          </div>
        </BackgroundImage>
      );
    }}
  />
);

AcademiaHeroContent.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
  classname: PropTypes.string,
};

export default AcademiaHeroContent;
