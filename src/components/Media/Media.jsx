import React, { useState, useEffect } from 'react';
import Layout from '../Layout/layout';
import Videos from './Videos';
import Podcasts from './Podcasts';
import Articles from './Articles';

import { HomepageProvider } from '../../context/context';

import { articlesData, podcastData, videosData } from '../../mock/data';

function Media() {
  const [articles, setArticles] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setArticles([...articlesData]);
    setPodcasts([...podcastData]);
    setVideos([...videosData]);
  }, []);

  return (
    <HomepageProvider value={{ articles, podcasts, videos }}>
      <Layout>
        <section id="media-title">
          <h1>Here are all of Rotem's media appearences</h1>
          <a href="#media-preview-section-video">
            <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
          </a>
        </section>
        <Videos />
        <Podcasts />
        <Articles />
        <section id="media-footer">
          <a href="#media-title">
            <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
          </a>
        </section>
      </Layout>
    </HomepageProvider>
  );
}

export default Media;
