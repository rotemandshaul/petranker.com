import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

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
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(filename);
      });

      if (!image) return null;

      const imageFluid = image.node.childImageSharp.fluid;
      return (
        <BackgroundImage alt={alt} fluid={imageFluid} className={classname}>
          <div className="hero-content">
            <h1 style={{ paddingBottom: '2rem' }}>Speaking & Talks</h1>
            <p>
              Rotem can give talks in a variety of venues <br /> to people with varied previous
              knowledge <br /> about psychedelics and microdosing.
            </p>
            <p>
              His experience includes giving talks <br />
              online, to classes, businesses,
              <br /> and at conferences.
            </p>
            <p>
              Get in touch for more information
              <br /> about Rotem’s availability and to create a talk
              <br />
              specifically tailored for your needs.
            </p>
            <div className="btn-holder">
              <a
                rel="noopener noreferrer"
                className="cta-btn cta-btn--cards-speaking"
                href="/contact"
              >
                Contact
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
