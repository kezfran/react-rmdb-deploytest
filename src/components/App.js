import React from "react";
// import { createGlobalStyle } from "styled-components";
import { Router } from "@reach/router";

import Header from "./elements/Header";
import Home from "./Home";
import Movie from './Movie';
import NotFound from './NotFound';

import { GlobalStyle } from "./styles/GlobalStyle";

// const GlobalStyle = createGlobalStyle`
//     body {
//         margin: 0;
//         padding: 0;
//         box-sizing: border-box;
//     }
// `;

const App = () => (
  <>
    <Header />
    <Router>
      <Home path="/" />
      <Movie path="/:movieId" />
      <NotFound default />
    </Router>
    <GlobalStyle />
  </>
);

export default App;

// 1. JSX is syntactic sugar for React.creactElement
// 2. JSX can selfclose
// 3. User defined components should start with a capital letter
// 4. You can JavaScript expressions inside of JSX
// 5. You can nest components just like you can in HTML
// 6. Nested content can be accessed in props.children
