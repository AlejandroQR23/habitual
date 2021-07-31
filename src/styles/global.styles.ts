import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    

    @media screen and (max-width: 1040px) {
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

  h6 {
    font-weight: 800;
    font-size: 12px;
    line-height: 12px;
    color: #3A3A3A;
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

  /* Keyframs */
  @keyframes slide-in-fwd-top {
    0% {
      -webkit-transform: translateZ(-1400px) translateY(-800px);
      transform: translateZ(-1400px) translateY(-800px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0) translateY(0);
      transform: translateZ(0) translateY(0);
      opacity: 1;
    }
  }

  @keyframes swing-in-top-fwd {
    0% {
      -webkit-transform: rotateX(-100deg);
              transform: rotateX(-100deg);
      -webkit-transform-origin: top;
              transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
              transform: rotateX(0deg);
      -webkit-transform-origin: top;
              transform-origin: top;
      opacity: 1;
    }
  }
`;
