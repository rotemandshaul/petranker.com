import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const ThanksImgHero = ({ filename, alt, classname }) => (
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
          <section id="thanks-title">
            <Container>
              <Fade bottom={true} duration={1500} delay={1000} distance="50px">
                <h1>
                  Thank You for <br /> Contacting Rotem
                </h1>
              </Fade>
            </Container>
          </section>
        </BackgroundImage>
      );
    }}
  />
);

ThanksImgHero.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
  classname: PropTypes.string,
};

export default ThanksImgHero;
