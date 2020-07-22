import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import HomepageContext from '../../context/context';
import CardsImg from '../Image/CardsImg';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';

const CardsTop = () => {
  const { cards } = useContext(HomepageContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // const [inHover, setHover] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  // const onHover = inHover ? 'hover' : '';

  return (
    <section id="cards-section-top">
      <Title title="Rotem's Work" />
      <Container>
        <CardGroup>
          {cards.slice(0, 3).map((card) => {
            const { id, logo, title, text, btntext, url, fade } = card;
            return (
              <Card
                key={id}
                // className="card-wrapper"
                // onMouseEnter={() => setHover(true)}
                // onMouseLeave={() => setHover(false)}
              >
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1500}
                  delay={500}
                  distance="30px"
                >
                  <div className="cards-image-wrapper">
                    <CardsImg alt={`${id}logo`} filename={logo} classname="card-image" />
                  </div>
                </Fade>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1500}
                  delay={500}
                  distance="30px"
                >
                  <Card.Title>{title}</Card.Title>
                </Fade>
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1500}
                  delay={500}
                  distance="30px"
                >
                  <Card.Text>{text}</Card.Text>
                </Fade>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1500}
                  delay={500}
                  distance="30px"
                >
                  <Card.Footer>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--cards"
                      href={url}
                    >
                      {btntext}
                    </a>
                  </Card.Footer>
                </Fade>
              </Card>
            );
          })}
        </CardGroup>
      </Container>
    </section>
  );
};

export default CardsTop;
