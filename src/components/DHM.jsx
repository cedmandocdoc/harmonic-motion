import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 5000px;
`;

const DHM = () =>
  <Container id="dhm">
    <h3>Damped Harmonic Motion</h3>
    <p>
      Simple Harmonic Motion (SHM) - is a back and forth motion through an equilibrium,
      where the restoring force is directly proportional to the displacement and acts in
      the direction of that displacement. <i>Considering that the system ignores friction.</i>
    </p>
    <p>Consider a mass that is attached to a spring (spring mass system):</p>
  </Container>

export default DHM;
