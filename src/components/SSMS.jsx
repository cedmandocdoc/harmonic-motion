import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Range from "./Range";
import SMS from "./SMS";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
  padding: 20px 0px;
`;

const getSHMDisplacement = ({ amplitude, stiffness, mass, time }) => amplitude * Math.sin((Math.sqrt(stiffness / mass) * time) / 1000)

const SSMS = () => {
  const [mass, setMass] = useState(500);
  const [stiffness, setStiffness] = useState(2000);
  const [amplitude, setAmplitude] = useState(100);

  const [displacement, setDisplacement] = useState(0);

  const raf = useRef();

  useEffect(() => {
    let startTime = 0;

    const tick = time => {
      startTime = startTime || time;
      const displacement = getSHMDisplacement({ time, amplitude, mass, stiffness });
      setDisplacement(displacement);
      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    const stop = () => cancelAnimationFrame(raf.current);
    return stop;
  }, [mass, amplitude, stiffness]);

  return (
    <Container>
      <SMS displacement={displacement} amplitude={amplitude} />
      <div>
        <Range
          label="Mass (m):"
          value={mass}
          min="20"
          max="500"
          onChange={e => setMass(+e.target.value)}
        />
        <Range
          label="Stiffness (k):"
          value={stiffness}
          min="1000"
          max="5000"
          onChange={e => setStiffness(+e.target.value)}
        />
        <Range
          label="Amplitude (A):"
          value={amplitude}
          min="50"
          max="100"
          onChange={e => setAmplitude(+e.target.value)}
        />
      </div>
    </Container>
  );
};

export default SSMS;
