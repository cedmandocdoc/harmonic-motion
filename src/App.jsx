import React from "react";
import styled from "styled-components";

import SideNav from "./components/SideNav";
import Articles from "./components/Articles";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 20px;
`;

const App = () => (
  <Container>
    <Articles />
    <SideNav />
  </Container>
);

export default App;
