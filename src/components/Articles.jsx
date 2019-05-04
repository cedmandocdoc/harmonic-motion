import React from "react";
import styled from "styled-components";

import SHM from "./SHM";
import DHM from "./DHM";

const Container = styled.div`
  margin: 20px;
`;

const Articles = () => (
  <Container>
    <SHM />
    <DHM />
  </Container>
);

export default Articles;
