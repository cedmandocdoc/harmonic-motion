import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Range from "./Range";
import SMS from "./SMS";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
  padding: 20px 0px;
`;

const DSMS = () => {
  const [mass, setMass] = useState(100);
  const [stiffness, setStiffness] = useState(3000);
  const [damping, setDamping] = useState(100);
  const [initialDisplacement, setInitialDisplacement] = useState(100);
  const [initialVelocity, setInitialVelocity] = useState(0);

  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(0);

  const getDHMDisplacement = () => {
    const t = (time - startTime) / 1000;
    const b = damping;
    const m = mass;
    const k = stiffness;
    const x0 = initialDisplacement;
    const x1 = initialVelocity;

    const z = b / Math.sqrt(4 * k * m);
    if (z < 1) {
      // underdamped
      const w = Math.sqrt(Math.abs(Math.pow(b / m, 2) - (4 * k) / m));
      const B = -(x1 + (x0 * b) / (2 * m)) / w;
      const A = x0;
      return (
        Math.exp((-b * t) / (2 * m)) *
        (A * Math.cos(w * t) + B * Math.sin(w * t))
      );
    } else if (z === 1) {
      // critically damped
      const r = -(b / (2 * m));
      const C2 = x1 - x0 * r;
      const C1 = x0;
      const res = C1 * Math.exp(r * t) + C2 * t * Math.exp(r * t);
      return res;
    } else if (z > 1) {
      // overdamped
      const w = Math.sqrt(Math.abs(Math.pow(b / m, 2) - (4 * k) / m));
      const r1 = 0.5 * (-b / m + w);
      const r2 = 0.5 * (-b / m - w);
      const B = (x1 - r1 * x0) / (r2 - r1);
      const A = x0 - B;
      return A * Math.exp(r1 * t) + B * Math.exp(r2 * t);
    }
  };

  useEffect(() => {
    let raf;
    const tick = time => {
      setTime(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(time => {
      tick(time);
      setStartTime(time);
    });
    return () => cancelAnimationFrame(raf);
  }, [mass, stiffness, damping, initialDisplacement, initialVelocity]);

  return (
    <Container>
      <SMS
        displacement={getDHMDisplacement()}
        amplitude={initialDisplacement}
      />
      <div>
        <Range
          label="Mass (m):"
          value={mass}
          min="10"
          max="500"
          onChange={e => setMass(+e.target.value)}
        />
        <Range
          label="Stiffness (k):"
          value={stiffness}
          min="10"
          max="5000"
          onChange={e => setStiffness(+e.target.value)}
        />
        <Range
          label="Damping (b):"
          value={damping}
          min="10"
          max="5000"
          onChange={e => setDamping(+e.target.value)}
        />
        <Range
          label="Initial Displacement (x):"
          value={initialDisplacement}
          min="50"
          max="100"
          onChange={e => setInitialDisplacement(+e.target.value)}
        />
        <Range
          label="Initial Velocity (v):"
          value={initialVelocity}
          min="0"
          max="100"
          onChange={e => setInitialVelocity(+e.target.value)}
        />
      </div>
    </Container>
  );
};

export default DSMS;
