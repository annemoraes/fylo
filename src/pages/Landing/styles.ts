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
    padding-top: 10px;
    padding-bottom: 10px;
  }

  p {
    font-size: 14px;
  }
`;