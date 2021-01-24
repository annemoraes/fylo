import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 120px;
  display: flex;
  align-items: center; 
  justify-content: space-between;

  :first-child {
    padding-left: 50px;
  }
`;

export const Content = styled.div`
  width: 300px;
  display: flex;
  align-items: center; 
  justify-content: space-between;
  padding-right: 40px;
  
  a {
    color: #FFF;
    text-decoration: none;
    font-family: 'Raleway', sans-serif;
  }

  a:hover {
    text-decoration: underline;
  }
`;