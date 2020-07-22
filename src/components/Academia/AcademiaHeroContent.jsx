import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
// import { Container } from 'react-bootstrap';

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
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(filename);
      });

      if (!image) return null;

      const imageFluid = image.node.childImageSharp.fluid;
      return (
        <BackgroundImage alt={alt} fluid={imageFluid} className={classname}>
          <div className="hero-content">
            <h1 style={{ paddingBottom: '2rem' }}>
              Rotem's
              <br /> Academic <br /> Background
            </h1>
            <p>
              Rotem graduated with a BsC in psychology from the University of Toronto and an MA in
              social psychology from York University.
            </p>
            <p>
              His master’s thesis modeled the contribution of affective regulation to the
              relationship between mindfulness and sustained attention.
            </p>
            <p>
              He is currently a clinical psychology PhD student at York University, working under
              the tutelage of Dr. John Eastwood at the{' '}
              <a
                href="http://boredomlab.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '100%' }}
              >
                Boredom lab
              </a>
              .
            </p>
            <div className="btn-holder">
              <a rel="noopener noreferrer" className="cta-btn cta-btn--cards" href="#publications">
                Publications
              </a>
            </div>
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
