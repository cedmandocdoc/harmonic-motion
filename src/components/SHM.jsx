import React from "react";
import styled from "styled-components";
import Equation from "./Equation";
import SSMS from "./SSMS";

const Container = styled.div`
  min-height: 100vh;
`;

const SHM = () => (
  <Container id="shm">
    <h3>Simple Harmonic Motion</h3>
    <p>
      Simple Harmonic Motion (SHM) - is a back and forth motion through an
      equilibrium, where the restoring force{" "}
      <i>
        (F<sub>r</sub>)
      </i>{" "}
      is directly proportional to the displacement<i>(x)</i> and acts in
      opposite the direction of that displacement. Assuming that the system is{" "}
      <i>frictionless</i>.
    </p>
    <p>
      Consider, a mass that is attached to a spring (spring mass system or SMS),
      as shown below:
    </p>
    <SSMS />
    <p>
      as we displaced the mass from the equilibrium, we can see that the spring
      tries to bring it back and as we try to displace it even more the
      restoring force gets larger that is because, when we released the mass it
      goes back to equilibrium but then goes to the other side. From that, the
      mass was displaced again, so the restoring force tries to bring it back to
      equilibrium and it goes on forever. Considering that there is no friction
      on the system.
    </p>
    <p>
      So we can say, that the greater the displacement of the mass from the
      equilibrium the greater the restoring force. And we can mathematically
      write:
    </p>
    <Equation>{"F_(r) prop -x"}</Equation>
    <Equation>{"F_(r) = -kx"}</Equation>
    <p>
      where:
      <br />
      &alpha; is the proportionality constant, and; <br />k is the equivalence
      of &alpha; or the stiffness of the spring
    </p>
    <h4>Equation of Motion</h4>
    <p>
      We will use the Newton's law that states that the net force of a system is
      equal to the product of mass and accelaration
    </p>
    <Equation>{"sum_(F) = ma"}</Equation>
    <p>
      and the only force on the system is the restoring force, substituting it
      gives us:
    </p>
    <Equation>{"ma = -kx"}</Equation>
    <p>
      since velocity is the derivative of displacement and accelaration is the
      derivate of velocity, we can write:
    </p>
    <Equation>{"m d^2x/dt = -kx"}</Equation>
    <p>
      for this kind of equation we have a general solution of{" "}
      <Equation inline>{"x(t) = e^(alpha t)"}</Equation>, and taking the
      derivative we'll have
    </p>
    <Equation>{"malpha^2 e^(alpha t) + k e^(alpha t) = 0"}</Equation>
    <Equation>{"e^(alpha t) (malpha^2 + k) = 0"}</Equation>
    <Equation>{"(malpha^2 + k) = 0"}</Equation>
    <Equation>{"alpha = sqrt(-k/m) or alpha = i sqrt(k/m)"}</Equation>
    <p>
      and let's say <Equation inline>{"omega = sqrt(k/m)"}</Equation> then{" "}
      <Equation inline>{"alpha = +- iw"}</Equation>
    </p>
    <span>
      then it gives us two roots and a familiar one because of Eulers identity{" "}
      <Equation inline>
        {"e^(+- i omega t) = cos(omega t) +- isin(omega t)"}
      </Equation>
    </span>
    <Equation>{"x(t) = e^(i omega t) and x = e^(-i omega t)"}</Equation>
    <p>
      The general solution for two roots is we combine them with multiplying
      some constant
    </p>
    <Equation>{"x(t) = Ae^(i omega t) + Be^(-i omega t)"}</Equation>
    <Equation>
      {
        "x(t) = A(cos(omega t) + isin(omega t)) + B(cos(omega t) - isin(omega t))"
      }
    </Equation>
    <Equation>
      {"x(t) = (A + B) cos(omega t) + (Ai + Bi) sin(omega t)"}
    </Equation>
    <p>
      replacing the constants <Equation inline>{"(A + B) = M"}</Equation> and{" "}
      <Equation inline>{"(Ai + Bi) = N"}</Equation>, note we are just replacing
      the name. We will reduce the number of variable, by evaluating the initial
      condition: when time = 0, x(t) = 0, because there is no displacement yet.
    </p>
    <Equation>{"x(t) = Mcos(omega t) + N sin(omega t)"}</Equation>
    <Equation>{"when, t = 0"}</Equation>
    <Equation>{"x(0) = Mcos(0) + N sin(0)"}</Equation>
    <Equation>{"0 = M"}</Equation>
    <p>so M is equal to zero, the variable was reduced and equation became</p>
    <Equation>{"x(t) = N sin(omega t)"}</Equation>
    <p>
      we know what <Equation inline>{"omega = sqrt(k/m)"}</Equation> but still
      we don't know what N is. Let's try to take the condition when x(t) = N.
    </p>
    <Equation>{"N = Nsin(omega t)"}</Equation>
    <Equation>{"1 = sin(omega t)"}</Equation>
    <Equation>{"omega t = pi/2"}</Equation>
    <Equation>{"t = pi / (2omega)"}</Equation>
    <p>
      the formula states, that when x(t) = N the time it takes is given by{" "}
      <Equation inline>{"t = pi / (2omega)"}</Equation>. We can take advantage
      of this and try to know what is the velocity at this point of time
    </p>
    <Equation>{"x(t) = N sin(omega t)"}</Equation>
    <Equation>{"v(t) = N w cos(omega t)"}</Equation>
    <Equation>{"v(t) = N w cos(omega pi/(2omega))"}</Equation>
    <Equation>{"v(t) = N w cos(pi/2)"}</Equation>
    <Equation>{"v(t) = N w * 0"}</Equation>
    <Equation>{"v(t) = 0"}</Equation>
    <p>
      when velocity is 0 it that is the moment that it will change the
      direction, therefore the mass is on the maximum amplitude, so N is the
      maximum amplitude at time pi/2, and gives us the quation of motion
    </p>
    <Equation>{"x(t) = A sin(omega t)"}</Equation>
    <Equation>{"x(t) = A sin(sqrt(k/m) t)"}</Equation>
    <p>
      where{" "}
      <i>
        k is the stiffness of the spring, m is the mass that is attached to the
        spring and A is the amplitude or the displacement of the mass from
        equilibrium.
      </i>
    </p>
  </Container>
);

export default SHM;
