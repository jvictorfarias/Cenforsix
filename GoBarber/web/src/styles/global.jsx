import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus{
  outline: 0;
}

html, body, #root{
  height: 100%
}

body{
  background: #322c38;
}


body, input, button {
  -webkit-font-smoothing: antialiased !important;
  font: 14px 'Roboto', sans-serif
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button{
  cursor: pointer;
}

`;
