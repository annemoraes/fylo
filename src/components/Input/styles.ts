import styled from 'styled-components';

export const Container = styled.div`

  height: 50px;
  border-radius: 24px;
  border: 0;
  padding: 0 14px;
  color: #FFF;
  font-family: 'Raleway', sans-serif;
  width: 580px;
  font-size: 14px;
  font-weight: 700;
  margin-top: 16px;
  transition: background-color 0.2s;
  background: #FFF;


  color: #666360;
  
  input {
    width: 100%;
    background: transparent;
    height: 50px;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }
`;