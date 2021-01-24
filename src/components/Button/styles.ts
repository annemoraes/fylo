import styled from 'styled-components';

export const Container = styled.button`
  background: hsl(198, 60%, 50%);
  height: 50px;
  border-radius: 24px;
  border: 0;
  padding: 0 14px;
  color: #FFF;
  font-family: 'Raleway', sans-serif;
  width: 200px;
  font-size: 14px;
  font-weight: 700;
  margin-top: 16px;
  transition: background-color 0.2s;
  &:hover {
    background: hsl(176, 68%, 64%);
  }
`;