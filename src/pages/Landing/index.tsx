import React from 'react';

import Header from '../../components/Header';
import Button from '../../components/Button';
import { Container, IntroContainer, IntroTitle, SubtitleContainer ,IntroSubtitle } from './styles';

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
        <SubtitleContainer>
          <IntroSubtitle>          
            Fylo stores all your most important files in one secure location.
          </ IntroSubtitle>   
          <IntroSubtitle>
            Access them wherever you need, share and collaborate with
          </IntroSubtitle> 
          <IntroSubtitle>
            friends damily, and co-workers. 
          </IntroSubtitle>
        </SubtitleContainer>
        <Button>Get Started</Button>
      </IntroContainer>
    </Container>
  );
}

export default Landing;