import React, { useState, useEffect } from "react";
import styled from "styled-components";

import spring from "../assets/spring.png";
import wall from "../assets/wall.png";

const Label = styled.label`
  position: absolute;
  bottom: -15px;
  transform: translateX(-50%);
  left: 50%;
  font-size: 11px;
`;

const Line = props => (
  <div
    style={{
      ...props,
      position: "absolute",
      border: `0.5px ${props.border} grey`
    }}
    {...props}
  >
    <Label>{props.label}</Label>
  </div>
);

const VerticalDashedLine = ({ top, left, label }) => (
  <Line border="dashed" height="100%" top={top} left={left} label={label} />
);

const HorizontalDashedLine = ({ left, width, label }) => (
  <Line
    border="dashed"
    height="1px"
    top="50%"
    transform="translateY(-50%)"
    width={width}
    left={left}
    label={label}
  />
);

const Container = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  position: relative;
`;

const Box = styled.div`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background-color: tomato;
  opacity: 0.8;
`;

const Wall = styled.img`
  width: 30px;
  height: 100px;
`;

const Spring = styled.img`
  height: 50px;
  width: 150px;
`;

const SMS = ({ displacement, amplitude }) => (
  <Container>
    <Wall src={wall} />
    <Spring src={spring} style={{ width: `${150 + displacement}px` }} />
    <Box>
      <Line
        background="blue"
        left="calc(50% - 2.5px)"
        top="0px"
        width="5px"
        height="100%"
        border="solid"
      />
    </Box>
    <VerticalDashedLine left="220px" label="equilibrium" />
    <VerticalDashedLine left={`${220 + amplitude}px`} label="+A" />
    <VerticalDashedLine left={`${220 - amplitude}px`} label="-A" />
    <HorizontalDashedLine left="220px" width={`${amplitude}px`} label="+x" />
    <HorizontalDashedLine
      left={`${220 - amplitude}px`}
      width={`${amplitude}px`}
      label="-x"
    />
  </Container>
);

export default SMS;
