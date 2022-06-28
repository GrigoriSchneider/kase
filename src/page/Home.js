import React from 'react';
import HeroSection from '../components/HeroSection';
import hero from '../images/heroBackground.png';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <div className='home-container'>
        <HeroSection>
          <img src={hero} alt='hero' />

          <h1>Home anywhere and everywhere</h1>
        </HeroSection>
        <Gallery />
        <Footer />
      </div>
    </>
  );
}
