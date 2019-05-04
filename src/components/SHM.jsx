import React from "react";
import styled from "styled-components";
import MathJax from "react-mathjax2";
import SSMS from "./SSMS";

const Container = styled.div`
  min-height: 100vh;
`;

const MathJaxNode = ({ children }) => (
  <p>
    <MathJax.Node>{children}</MathJax.Node>
  </p>
);

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
    <MathJaxNode>{"F_(r) prop -x"}</MathJaxNode>
    <MathJaxNode>{"F_(r) = -kx"}</MathJaxNode>
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
    <MathJaxNode>{"sum_(F) = ma"}</MathJaxNode>
    <p>
      and the only force on the system is the restoring force, substituting it
      gives us:
    </p>
    <MathJaxNode>{"ma = -kx"}</MathJaxNode>
    <p>
      since velocity is the derivative of displacement and accelaration is the
      derivate of velocity, we can write:
    </p>
    <MathJaxNode>{"m d^2x/dt = -kx"}</MathJaxNode>
    <p>
      for this kind of equation we have a general solution of{" "}
      <MathJax.Node inline>{"x(t) = e^(alpha t)"}</MathJax.Node>, and taking the
      derivative we'll have
    </p>
    <MathJaxNode>{"malpha^2 e^(alpha t) + k e^(alpha t) = 0"}</MathJaxNode>
    <MathJaxNode>{"e^(alpha t) (malpha^2 + k) = 0"}</MathJaxNode>
    <p>since e raise to anything can never be 0, therefore:</p>
    <MathJaxNode>{"(malpha^2 + k) = 0"}</MathJaxNode>
    <MathJaxNode>{"alpha = sqrt(-k/m) or alpha = i sqrt(k/m)"}</MathJaxNode>
    <p>
      and let's say{" "}
      <MathJax.Node inline>
        {"omega = sqrt(k/m) and alpha = +- iw"}
      </MathJax.Node>
    </p>
    <span>
      then it gives us two roots and a familiar one because of Eulers identity{" "}
      <MathJax.Node inline>
        {"e^(+- i omega t) = cos(omega t) +- isin(omega t)"}
      </MathJax.Node>
    </span>
    <MathJaxNode>{"x(t) = e^(i omega t) and x = e^(-i omega t)"}</MathJaxNode>
    <p>
      The general solution for two roots is we combine them with multiplying
      some constant
    </p>
    <MathJaxNode>{"x(t) = Ae^(i omega t) + Be^(-i omega t)"}</MathJaxNode>
    <MathJaxNode>
      {
        "x(t) = A(cos(omega t) + isin(omega t)) + B(cos(omega t) - isin(omega t))"
      }
    </MathJaxNode>
    <MathJaxNode>
      {"x(t) = (A + B) cos(omega t) + (Ai + Bi) sin(omega t)"}
    </MathJaxNode>
    <p>
      replacing the constants{" "}
      <MathJax.Node inline>{"(A + B) = M"}</MathJax.Node> and{" "}
      <MathJax.Node inline>{"(Ai + Bi) = N"}</MathJax.Node>, note we are just
      replacing the name. We will reduce the number of variable, by evaluating
      the initial condition: when time = 0, x(t) = 0, because there is no
      displacement yet.
    </p>
    <MathJaxNode>{"x(t) = Mcos(omega t) + N sin(omega t)"}</MathJaxNode>
    <MathJaxNode>{"when, t = 0"}</MathJaxNode>
    <MathJaxNode>{"x(0) = Mcos(0) + N sin(0)"}</MathJaxNode>
    <MathJaxNode>{"0 = M"}</MathJaxNode>
    <p>so M is equal to zero, the variable was reduced and equation became</p>
    <MathJaxNode>{"x(t) = N sin(omega t)"}</MathJaxNode>
    <p>
      we know what <MathJax.Node inline>{"omega = sqrt(k/m)"}</MathJax.Node> but
      still we don't know what N is. Let's try to take the condition when x(t) =
      N.
    </p>
    <MathJaxNode>{"N = Nsin(omega t)"}</MathJaxNode>
    <MathJaxNode>{"1 = sin(omega t)"}</MathJaxNode>
    <MathJaxNode>{"omega t = pi/2"}</MathJaxNode>
    <MathJaxNode>{"t = pi / (2omega)"}</MathJaxNode>
    <p>
      the formula states, that when x(t) = N the time it takes is given by{" "}
      <MathJax.Node inline>{"t = pi / (2omega)"}</MathJax.Node>. We can take
      advantage of this and try to know what is the velocity at this point of
      time
    </p>
    <MathJaxNode>{"x(t) = N sin(omega t)"}</MathJaxNode>
    <MathJaxNode>{"v(t) = N w cos(omega t)"}</MathJaxNode>
    <MathJaxNode>{"v(t) = N w cos(omega pi/(2omega))"}</MathJaxNode>
    <MathJaxNode>{"v(t) = N w cos(pi/2)"}</MathJaxNode>
    <MathJaxNode>{"v(t) = N w * 0"}</MathJaxNode>
    <MathJaxNode>{"v(t) = 0"}</MathJaxNode>
    <p>
      when velocity is 0 it that is the moment that it will change the
      direction, therefore the mass is on the maximum amplitude, so N is the
      maximum amplitude at time pi/2, and gives us the quation of motion
    </p>
    <MathJaxNode>{"x(t) = A sin(omega t)"}</MathJaxNode>
    <MathJaxNode>{"x(t) = A sin(sqrt(k/m) t)"}</MathJaxNode>
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
