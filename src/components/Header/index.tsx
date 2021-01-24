import React from 'react';
import { Container, Content } from './styles';
import Logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return(
    <Container>
      <img src={Logo} alt="logo"/>
      <Content>
        <a href="#">Features</a>
        <a href="#">Team</a>
        <a href="#">Sign In</a>
      </Content>
    </Container>  
  );
}

export default Header;