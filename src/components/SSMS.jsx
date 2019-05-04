import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Range from "./Range";
import SMS from "./SMS";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
`;

const SSMS = () => {
  const [mass, setMass] = useState(50);
  const [stiffness, setStiffness] = useState(2000);
  const [amplitude, setAmplitude] = useState(50);

  const [time, setTime] = useState(0);

  const getSHMDisplacement = () =>
    amplitude * Math.sin((Math.sqrt(stiffness / mass) * time) / 1000);

  useEffect(() => {
    let raf;
    const tick = time => {
      setTime(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [mass, amplitude, stiffness]);

  return (
    <Container>
      <SMS displacement={getSHMDisplacement()} />
      <div>
        <Range
          label="Mass (m):"
          value={mass}
          min="10"
          max="500"
          onChange={e => setMass(e.target.value)}
        />
        <Range
          label="Stiffness (k):"
          value={stiffness}
          min="1000"
          max="5000"
          onChange={e => setStiffness(e.target.value)}
        />
        <Range
          label="Amplitude (A):"
          value={amplitude}
          min="10"
          max="100"
          onChange={e => setAmplitude(e.target.value)}
        />
      </div>
    </Container>
  );
};

export default SSMS;
