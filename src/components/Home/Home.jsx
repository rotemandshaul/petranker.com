import React, { useState, useEffect } from 'react';
import Layout from '../Layout/layout';
import Hero from './Hero';
import CardsTop from './CardsTop';
import CardsBottom from './CardsBottom';
import Previews from './Previews';

import { HomepageProvider } from '../../context/context';

import { heroData, cardsData, articlesData, podcastData, videosData } from '../../mock/data';

function Home() {
  const [hero, setHero] = useState({});
  const [cards, setCards] = useState([]);
  const [articles, setArticles] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setHero({ ...heroData });
    setCards([...cardsData]);
    setArticles([...articlesData]);
    setPodcasts([...podcastData]);
    setVideos([...videosData]);
  }, []);

  return (
    <HomepageProvider value={{ hero, cards, articles, podcasts, videos }}>
      <Layout>
        <Hero />
        <CardsTop />
        <Previews />
        <CardsBottom />
      </Layout>
    </HomepageProvider>
  );
}

export default Home;
