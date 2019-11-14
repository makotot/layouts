import * as React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import * as FixedHeader from "./components/FixedHeader";
import * as Centered from "./components/Centered";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <FixedHeader.Block>header</FixedHeader.Block>
      <Centered.Block>center</Centered.Block>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
