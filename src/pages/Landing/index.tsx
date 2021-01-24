import React from 'react';

import Header from '../../components/Header';
import { Container, IntroContainer, IntroTitle } from './styles';

import ImageIntro from '../../assets/illustration-intro.png';

const Landing: React.FC = () => {
  return(
    <Container>
      <Header />
      <IntroContainer>
        <img src={ImageIntro} alt=""/>
        <IntroTitle>
          All your files in one secure location, 
        </IntroTitle>
        <IntroTitle>
          accessible anywhere.
        </IntroTitle>
      </IntroContainer>
    </Container>
  );
}

export default Landing;