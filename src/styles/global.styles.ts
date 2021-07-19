import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
  }

  a {
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
    text-decoration-line: underline;
    color: #000000;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 40px;
    color: #000000;
  }

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
    color: #000000;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #3A3A3A;
  }

  button {
    padding: 14px 24px;
    background-color: #FFE202;
    border: none;
    border-radius: 12px;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #3A3A3A;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
      filter: drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.05));
    }
  }
`;
