import React from "react";
import styled from "styled-components";

import spring from "../assets/spring.png";
import wall from "../assets/wall.png";

const Container = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  position: relative;
`;

const Box = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background-color: tomato;
`;

const Wall = styled.img`
  height: 100px;
`;

const Spring = styled.img`
  height: 50px;
  width: 150px;
`;

const SMS = ({ displacement }) => (
  <Container>
    <Wall src={wall} />
    <Spring src={spring} alt="" style={{ width: `${150 - displacement}px` }} />
    <Box style={{ transform: `translateX(${displacement})px` }} />
  </Container>
);

export default SMS;
