import React from "react";
import styled from "styled-components";

import SHM from "./SHM";
import DHM from "./DHM";

const Container = styled.div`
  margin: 20px;
`;

const Articles = () => (
  <Container>
    <DHM />
    <SHM />
  </Container>
);

export default Articles;
