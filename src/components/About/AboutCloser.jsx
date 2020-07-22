import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const AboutCloser = ({ filename, alt, classname }) => (
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
      return <Img alt={alt} fluid={imageFluid} className={classname} />;
    }}
  />
);

AboutCloser.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
  classname: PropTypes.string,
};

export default AboutCloser;

// import BackgroundImage from 'gatsby-background-image';

// const AboutCloser = ({ filename, alt, classname }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         images: allFile {
//           edges {
//             node {
//               relativePath
//               name
//               childImageSharp {
//                 fluid(maxWidth: 1600) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={(data) => {
//       const image = data.images.edges.find((n) => {
//         return n.node.relativePath.includes(filename);
//       });

//       if (!image) return null;

//       const imageFluid = image.node.childImageSharp.fluid;
//       return (
//         <BackgroundImage
//           alt={alt}
//           fluid={imageFluid}
//           className={classname}
//           sizes={{ aspectRatio: '21/9' }}
//         ></BackgroundImage>
//       );
//     }}
//   />
// );

// AboutCloser.propTypes = {
//   filename: PropTypes.string,
//   alt: PropTypes.string,
//   classname: PropTypes.string,
// };

// export default AboutCloser;
