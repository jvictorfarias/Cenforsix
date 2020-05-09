import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }

  body{
    background: #1f2023;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button{
    color: #f8f8f2;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }


  button {
    cursor: pointer
  }

`;
