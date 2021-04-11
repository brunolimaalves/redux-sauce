import { createGlobalStyle } from 'styled-components';

//import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle` 
  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #9B65E6;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }

  .container {
    display: flex; /* establish flex container */
    flex-direction: column; /* make main-axis vertical */
    justify-content: center; /* align items vertically, in this case */
    align-items: center; /* align items horizontally, in this case */
    height: 100%; /* for demo purposes */
}
  
.input { width: 80%; padding: 20px }
.row { width: 70%}
.btnAdicionar { height: 60px }
.lista { list-style: none;
    margin: 20px;
    width: 800px; }
.lista li { margin: 20px; }
.completeTodo { text-decoration: line-through}
`;
export default GlobalStyle;