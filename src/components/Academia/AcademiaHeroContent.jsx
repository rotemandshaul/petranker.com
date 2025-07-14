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
                fluid(maxWidth: 1080) {
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
            <h1 style={{ paddingBottom: '2rem' }}>
              Rotem's
              <br /> Academic <br /> Background
            </h1>
            <Fade bottom={isMobile} duration={1500} delay={500} distance="30px">
              <p>
                Rotem graduated with a BsC in psychology from the University of Toronto and an MA in
                social psychology from York University.
              </p>
            </Fade>
            <Fade bottom={isMobile} duration={1500} delay={500} distance="30px">
              {' '}
              <p>
                His master’s thesis modeled the contribution of affective regulation to the
                relationship between mindfulness and sustained attention.
              </p>
            </Fade>
            <Fade bottom={isMobile} duration={1500} delay={500} distance="30px">
              <p>
                Rotem earned his PhD from McMaster University, working with Dr. David Shore.
                His dissertation focused on a double-blind, placebo-controlled psilocybin study.
              </p>
            </Fade>
            <Fade bottom={isMobile} duration={1500} delay={500} distance="30px">
              <div className="btn-holder">
                <a
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--cards"
                  href="#publications"
                >
                  Publications
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
