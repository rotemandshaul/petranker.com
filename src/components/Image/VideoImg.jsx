import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import PlayIconImg from './PlayIconImg';

const VideoImage = ({ filename, alt, classname, title, src }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(quality: 100, maxWidth: 550) {
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
      const [modalShow, setModalShow] = useState(false);

      return (
        <>
          <BackgroundImage alt={alt} fluid={imageFluid} title={title} className={classname}>
            <div className="media-video-info">
              <Button
                variant="link"
                className="video-play-link"
                onClick={() => setModalShow(true)}
                style={{ border: 0 }}
              >
                <PlayIconImg classname="play_icon" />
              </Button>
              <h2 className="video-info-title">{title}</h2>
            </div>
          </BackgroundImage>

          <Modal src={src} show={modalShow} onHide={() => setModalShow(false)}>
            <iframe
              src={src}
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; autoplay; fullscreen"
              allowFullScreen
              width="940"
              height="528"
              scrolling="no"
              className="iframe-item"
              title={uuidv4()}
            />
          </Modal>
        </>
      );
    }}
  />
);

VideoImage.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
  classname: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string,
};

export default VideoImage;
