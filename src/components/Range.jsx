import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-bottom: 10px;
`;

const Label = styled.label`
  padding-left: 10px;
`;

const Range = ({ label, value, onChange, min, max }) => (
  <Container>
    <input type="range" value={value} min={min} max={max} onChange={onChange} />
    <Label>
      {label} <span>{value}</span>
    </Label>
  </Container>
);

export default Range;
