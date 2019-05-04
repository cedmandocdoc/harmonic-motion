import React from "react";
import styled from "styled-components";
import SSMS from "./SSMS";

const Container = styled.div`
  height: 5000px;
`;

const SHM = () => (
  <Container id="shm">
    <h3>Simple Harmonic Motion</h3>
    <p>
      Simple Harmonic Motion (SHM) - is a back and forth motion through an
      equilibrium, where the restoring force is directly proportional to the
      displacement and acts in the direction of that displacement.{" "}
      <i>Considering that the system ignores friction.</i>
    </p>
    <p>Consider a mass that is attached to a spring (spring mass system):</p>
    <SSMS />
  </Container>
);

export default SHM;
