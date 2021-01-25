import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
`; 

export const IntroContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;

  img {
    height: 534px;
    width: 720px;
    padding-bottom: 50px;
  }
`;

export const IntroTitle = styled.text`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
  font-weight: 700;
  z-index: 10;
`;

export const SubtitleContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  padding-bottom: 20px;
  z-index: 10;
`;

export const IntroSubtitle = styled.text`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  z-index: 10;
`;

export const CurvyImage = styled.div`
  width: 100vw;
  
  img {
    width: 100%;
    margin-top: -200px;
  }
`;

export const InfoContainer = styled.div`
  background: hsl(218, 28%, 13%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -55px;
`;

export const InfoContent = styled.div`
  width: 580px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -55px;

  img {
    padding-top: 50px;
  }

  strong {
    padding-top: 30px;
    padding-bottom: 10px;
  }

  p {
    font-size: 14px;
  }
`;

export const ProductiveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: hsl(218, 28%, 13%);
  padding-top: 60px;
  padding-bottom: 30px;
`;

export const ProductiveText = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFF;
  
  strong {
    font-size: 40px;
    padding-left: 60px;
  }

  p {
    padding-left: 60px;
    padding-top: 5px;
  }

  div {
    padding-bottom: 13px; 
    display: flex;
    flex-direction: column;
  }

  a {
    padding-left: 60px;
    padding-top: 5px;
    text-decoration: none;
    color: #FFF;
  }

  a:hover {
      text-decoration: underline;
    }
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 800px;
  background: hsl(218, 28%, 13%);
  justify-content: space-around;
  align-items: center;
`;

export const Card = styled.div`
  background: hsl(217, 28%, 15%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  border-radius: 5px;
  z-index: 10;

  p {
    padding-left: 30px;
    padding-right: 30px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding-top: 40px;
    padding-left: 30px;
  }

  img {
    width: 35px;
    height: 35px;
    border-radius: 15px;
  }

  span {
    padding-left: 10px;
  }
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  justify-content: center;
  background: hsl(216, 53%, 9%);
`;

export const FooterCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: hsl(219, 30%, 18%);
  width: 70vw;
  height: 250px;
  border-radius: 8px;
  margin-top: -125px;

  strong {
    font-size: 28px;
    padding-bottom: 15px;
  }
`;

export const FooterCardEmail = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  padding-top: 15px;
`;