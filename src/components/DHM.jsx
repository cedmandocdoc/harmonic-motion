import React from "react";
import styled from "styled-components";
import DSMS from "./DSMS";

const Container = styled.div`
  min-height: 100vh;
`;

const DHM = () => (
  <Container id="dhm">
    <h3>Damped Harmonic Motion</h3>
    <DSMS />
  </Container>
);

export default DHM;
