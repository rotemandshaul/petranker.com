import React, { useContext, useState, useEffect } from 'react';
import HomepageContext from '../../context/context';
import Title from './Title';
import VideoImg from '../Image/VideoImg';
import PodImg from '../Image/PodImg';
import ArticleImg from '../Image/ArticleImg';
import Media from 'react-bootstrap/Media';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

const Previews = () => {
  const { articles, podcasts, videos } = useContext(HomepageContext);

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
    <section id="media-preview-section">
      <Container>
        <Title title="Media" />
        <div className="media-video">
          <div className="media-header">
            <h3 className="media-header-small">Videos</h3>
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
              {videos.slice(1, videos.length).map((video) => (
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
            <a className="cta-btn cta-btn--hero" href="/media">
              More Videos
            </a>
          </div>
        </div>
        <div className="media-pod-and-articles-holder">
          <div className="media-pod-holder">
            <div className="media-header">
              <h3 className="media-header-small">Podcast & Radio</h3>
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
                    <p>{podcast.date}</p>
                  </Media.Body>
                </Media>
              ))}
            </div>
            <div>
              <a className="cta-btn cta-btn--hero" href="/media">
                More Audio
              </a>
            </div>
          </div>
          <div className="media-articles-holder">
            <div className="media-header">
              <h3 className="media-header-small">Articles</h3>
            </div>
            <div className="carousel-holder">
              <Carousel interval="100000000">
                <Carousel.Item>
                  <CardDeck>
                    {articles.slice(0, 2).map((article) => (
                      <Card key={article.id} style={{ border: 'transparent' }}>
                        <div>
                          <ArticleImg alt="article-preview" filename={article.img} />
                        </div>
                        <Card.Body className="carousel-card-body">
                          <Card.Title>
                            <a href={article.url} target="_blank">
                              {article.title}
                            </a>
                          </Card.Title>
                          <br />
                        </Card.Body>
                      </Card>
                    ))}
                  </CardDeck>
                </Carousel.Item>
                <Carousel.Item>
                  <CardDeck>
                    {articles.slice(2, 4).map((article) => (
                      <Card key={article.id} style={{ border: 'transparent' }}>
                        <div>
                          <ArticleImg alt="article-preview" filename={article.img} />
                        </div>
                        <Card.Body className="carousel-card-body">
                          <Card.Title>
                            <a href={article.url} target="_blank">
                              {article.title}
                            </a>
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    ))}
                  </CardDeck>
                </Carousel.Item>
              </Carousel>
            </div>
            <div>
              <a className="cta-btn cta-btn--hero" href="/media">
                More News
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Previews;
