import React, { Component } from 'react';

import Collapsible from '../components/Collapsible';
import './About.scss';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import aboutHero from '../images/aboutHero.png';
export class About extends Component {
  render() {
    return (
      <>
        <div className='about-container'>
          <HeroSection>
            <img src={aboutHero} alt='about hero' />
          </HeroSection>

          <div className='about'>
            <Collapsible label='Reliability'>
              Caring is one of the founding values of Kasa. Any discriminatory
              behavior or disruptive behavior in the neighborhood will result in
              exclusion from our platform.
            </Collapsible>
            <Collapsible label='Respect'>
              Caring is one of the founding values of Kasa. Any discriminatory
              behavior or disruptive behavior in the neighborhood will result in
              exclusion from our platform.
            </Collapsible>
            <Collapsible label='Service'>
              Caring is one of the founding values of Kasa. Any discriminatory
              behavior or disruptive behavior in the neighborhood will result in
              exclusion from our platform.
            </Collapsible>
            <Collapsible label='Safety'>
              Caring is one of the founding values of Kasa. Any discriminatory
              behavior or disruptive behavior in the neighborhood will result in
              exclusion from our platform.
            </Collapsible>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default About;
