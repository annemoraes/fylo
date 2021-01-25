import React from 'react';

import Header from '../../components/Header';
import Button from '../../components/Button';
import { 
  Container, 
  IntroContainer, 
  IntroTitle, 
  SubtitleContainer,
  IntroSubtitle, 
  CurvyImage,
  InfoContainer,
  InfoContent,
  ProductiveContainer,
  ProductiveText,
  CardContainer,
  Card
} from './styles';

import ImageIntro from '../../assets/illustration-intro.png';
import Curvy from '../../assets/bg-curvy-desktop.svg';
import FileIcon from '../../assets/icon-any-file.svg';
import SecurityIcon from '../../assets/icon-security.svg';
import CollaborationIcon from '../../assets/icon-collaboration.svg';
import AccessIcon from '../../assets/icon-access-anywhere.svg';
import ProductiveIcon from '../../assets/illustration-stay-productive.png';
import ProfileIcon from '../../assets/profile-1.jpg'; 
import ProfileIconTwo from '../../assets/profile-2.jpg'; 
import ProfileIconThree from '../../assets/profile-3.jpg'; 

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
        <CurvyImage>
        <img src={Curvy} alt=""/>
        </CurvyImage>
      </IntroContainer>

      <InfoContainer>
       <InfoContent>
          <img src={AccessIcon} alt=""/>
          <strong>Access your files, anywhere</strong>
          <p>The ability to use a smartphone, tablet, or computer</p>
          <p>to access your account means your files follow you</p>
          <p>everywhere</p>
          <img src={CollaborationIcon} alt=""/>
          <strong>Real-time collaboration</strong>
          <p>Securely share files and folders with friends, family and</p>
          <p>colleagues for live collaboration. No email attachments</p>
          <p>required.</p>
        </InfoContent>
        <InfoContent>
          <img src={SecurityIcon} alt=""/>
          <strong>Security you can trust</strong>
          <p>2-factor authentication and user-controlled encryption are</p>
          <p>just a couple of the security features we allow to help</p>
          <p>secure your files. </p>
          <img src={FileIcon} alt=""/>
          <strong>Store any type of file</strong>
          <p>Whether you're sharing holidays photos or work</p>
          <p>documents, Fylo has you covered allowing for all file</p>
          <p>types to be securely stored and shared.</p>
        </InfoContent>
      </InfoContainer>

      <ProductiveContainer>
        <img src={ProductiveIcon} alt=""/>
        <ProductiveText>
          <div>
            <strong>Stay productive,</strong>
            <strong>wherever you are</strong>
          </div>
          <div>
            <p>Never let location be an issue when accessing your files. Fylo has you</p>
            <p>covered for all of your storage needs.</p>
          </div>
          <div>
            <p>Securely share files and folders with friends, family and colleagues for</p>
            <p>collaboration. No email attachments required. </p>
          </div>
          <a href="#">See how Fylo works</a>
        </ProductiveText>
      </ProductiveContainer>

      <CardContainer>
        <Card>
          <p>Fylo has improved our team productivity by</p>
          <p>an order of magnitude. Since making the</p>
          <p>switch our team has become a well-oiled</p>
          <p>collaboration machine.</p>

          <div>
            <img src={ProfileIcon} alt=""/>
            <span>Satish Patel <br/> Founder and CEO</span>
          </div>
          
        </Card>
        <Card>
          <p>Fylo has improved our team productivity by</p>
          <p>an order of magnitude. Since making the</p>
          <p>switch our team has become a well-oiled</p>
          <p>collaboration machine.</p>

          <div>
            <img src={ProfileIconTwo} alt=""/>
            <span>Satish Patel <br/> Founder and CEO</span>
          </div>
          
        </Card>
        <Card>
          <p>Fylo has improved our team productivity by</p>
          <p>an order of magnitude. Since making the</p>
          <p>switch our team has become a well-oiled</p>
          <p>collaboration machine.</p>

          <div>
            <img src={ProfileIconThree} alt=""/>
            <span>Satish Patel <br/> Founder and CEO</span>
          </div>
          
        </Card>
      </CardContainer>
    </Container>
  );
}

export default Landing;