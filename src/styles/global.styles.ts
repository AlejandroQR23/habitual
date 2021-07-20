import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    width: 100%;
    margin: 0 auto;
    max-width: 1080px;

    @media screen and (max-width: 900px) {
      text-align: center;
    }
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

  h5 {
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #3A3A3A;
  }

  .description {
    font-size: 12px;
    line-height: 16px;
    color: #A6A6AA;
  }

  span {
    font-weight: bold;
    font-size: 12px;
    line-height: 12px;
    text-decoration-line: line-through;
    color: #CBCBD4;
    opacity: 0.9;
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
      box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.05);
    }
  }
`;
