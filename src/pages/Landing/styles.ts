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
  width: 90%;
  color: #FFF;
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
  font-weight: 700;
`;