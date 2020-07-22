import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const CardsImg = ({ filename, alt, classname }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1052) {
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
      return <Img alt={alt} fluid={imageFluid} className={classname} />;
    }}
  />
);

CardsImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
  classname: PropTypes.string,
};

export default CardsImg;
