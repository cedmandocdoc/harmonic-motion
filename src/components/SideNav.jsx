import React from "react";
import styled from "styled-components";
import Link from "./Link";

const links = [
  { to: "#dhm", label: "Damped Harmonic Motion" },
  { to: "#shm", label: "Simple Harmonic Motion" }
];

const LinkList = styled.div`
  border-left: 1px solid #d6d4d4;
  padding-left: 10px;
`;

const Container = styled.div`
  position: sticky;
  top: 50px;
  width: 100%;
  height: 100vh;
`;

const SideNav = () => (
  <Container>
    <LinkList>
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.to}>{link.label}</Link>
        </li>
      ))}
    </LinkList>
  </Container>
);

export default SideNav;
