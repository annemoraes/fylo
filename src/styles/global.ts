import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: hsl(217, 28%, 15%);
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  strong, p, a, span {
    font-family: 'Raleway', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;