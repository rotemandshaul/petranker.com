import React, { useContext, useState, useEffect } from 'react';
import HomepageContext from '../../context/context';
import VideoImg from '../Image/VideoImg';
import { Container } from 'react-bootstrap';

const Videos = () => {
  const { videos } = useContext(HomepageContext);

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
    <section id="media-video">
      <Container>
          <div id="media-header">
            <h1>Videos</h1>
          </div>
          <div className="media-video-holder">
            <div className="media-video-main">
              {videos.slice(0, 1).map((video) => (
                <VideoImg
                  alt={`${video.id}-thumbnail`}
                  key={video.id}
                  title={video.title}
                  filename={video.img}
                  src={video.iframe}
                  classname="media-video-item"
                />
              ))}
            </div>
            <div className="media-video-collection">
              {videos.slice(1, 5).map((video) => (
                <VideoImg
                  alt={`${video.id}-thumbnail`}
                  key={video.id}
                  title={video.title}
                  filename={video.img}
                  src={video.iframe}
                  classname="media-video-item-small"
                />
              ))}
            </div>
          </div>    
          <div className="media-video-holder">
            <div className="media-video-collection">
              {videos.slice(5, videos.length).map((video) => (
                <VideoImg
                  alt={`${video.id}-thumbnail`}
                  key={video.id}
                  title={video.title}
                  filename={video.img}
                  src={video.iframe}
                  classname="media-video-item-small"
                />
              ))}
            </div>
          </div>    
          <div className="video-button-holder">
            <a className="cta-btn cta-btn--hero" href="#podcasts">
              More Media
            </a>{' '}
          </div>
      </Container>
    </section>
  );
};

export default Videos;
