import React, { useContext, useState, useEffect } from 'react';
import HomepageContext from '../../context/context';
import PodImg from '../Image/PodImg';
import Media from 'react-bootstrap/Media';
import { Container } from 'react-bootstrap';

const Podcasts = () => {
  const { podcasts } = useContext(HomepageContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="podcasts">
      <Container>
        <div className="media-pod-holder">
          <div id="media-header">
            <h1>Podcasts & Radio</h1>
          </div>
          <div className="media-pod-list">
            {podcasts.map((podcast) => (
              <Media key={podcast.id} className="media-pod-item">
                <PodImg
                  width={64}
                  height={64}
                  className="mr-3"
                  alt="radio-logo"
                  filename="soundwave_icon.png"
                />
                <Media.Body className="media-pod-item-body">
                  <h5 className="media-pod-item-title">
                    <a href={podcast.url} target="_blank">
                      {podcast.title}
                    </a>
                  </h5>
                  <p>{podcast.host}</p>
                </Media.Body>
              </Media>
            ))}
          </div>
          <div className="video-button-holder">
            <a className="cta-btn cta-btn--hero" href="#articles">
              More Media
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Podcasts;
