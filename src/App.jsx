import React from "react";
import styled from "styled-components";
import MathJax from "react-mathjax2";

import SideNav from "./components/SideNav";
import Articles from "./components/Articles";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 20px;
`;

const App = () => (
  <MathJax.Context input="ascii">
    <Container>
      <Articles />
      <SideNav />
    </Container>
  </MathJax.Context>
);

export default App;
