import React from 'react';
import Image from '../Image/image';

const Hero = () => {
  return (
    <section id="hero">
      <div>
        <h1>Rotem Petranker</h1>
        <p>
          Clinical psychology PhD student, Associate Director, Center for Psychedelic Studies at the
          University of Toronto
        </p>
        <div style={{ maxWidth: `250px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </div>
    </section>
  );
};

export default Hero;
