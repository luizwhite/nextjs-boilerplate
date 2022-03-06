import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a,
  button {
    cursor: pointer;
    border: none;
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export { GlobalStyles };
