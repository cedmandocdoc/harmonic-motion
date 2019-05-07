import React from "react";
import styled from "styled-components";
import Equation from "./Equation";
import DSMS from "./DSMS";

const Container = styled.div`
  min-height: 100vh;
`;

const DHM = () => (
  <Container id="dhm">
    <h3>Damped Harmonic Motion</h3>
    <p>
      Damped Harmonic Motion (DHM) - is a simple harmonic motion that reduces
      overtime due to external force such as friction. In a simple harmonic we
      know that it oscillates forever because of the restoring force goes up to
      the maximum every half oscillation, in DHM the restoring force decreases
      due to energy loss on the spring maybe some converted to heat or any force
      that that affects the oscillation.
    </p>
    <p>
      So the damping force depends on the surrounding, it is proportional to the
      velocity of the mass and acts opposite to the direction of the velocity.
      Mathematically we can say:
    </p>
    <Equation inline>{""}</Equation>
    <Equation>{"F_(d) prop -v"}</Equation>
    <Equation>{"F_(d) = -bv"}</Equation>
    <p>
      where:
      <br />
      <Equation inline>{"prop"}</Equation> is the proportionality constant and
      <br />
      <Equation inline>{"b"}</Equation> is the equivalence of{" "}
      <Equation inline>{"prop"}</Equation> or the damping constant.
    </p>
    <p>Consider a mass attached to spring (spring mass system) shown below:</p>
    <DSMS />
    <p>
      As the motion goes with the time, the oscillation decreases until it goes
      back to the equilibrium. The mass and stiffness has the same law on the
      simple harmonic, the only difference here is that we have a damping. As we
      increase the damping the spring will reduced number of oscillation.
    </p>
    <h4>Equation of Motion</h4>
    <p>
      We will use the Newton's law that states that the net force of a system is
      equal to the product of mass and accelaration
    </p>
    <Equation>{"sum_(F) = ma"}</Equation>
    <p>
      and the net force on the system is the restoring force{" "}
      <Equation inline>{"F_r"}</Equation> and the damping force{" "}
      <Equation inline>{"F_d"}</Equation>, substituting those gives us:
    </p>
    <Equation>{"ma = -kx - bv"}</Equation>
    <p>
      since velocity is the derivative of displacement and accelaration is the
      derivate of velocity, we can write:
    </p>
    <Equation>{"m d^2x/dt = - b dx/dt -kx"}</Equation>
    <Equation>{"m d^2x/dt + b dx/dt + kx = 0"}</Equation>
    <p>
      for this kind of equation we have a general solution of{" "}
      <Equation inline>{"x = e^(alpha t)"}</Equation>, and taking the derivative
      we'll have
    </p>
    <Equation>
      {"malpha^2 e^(alpha t) + balpha e^(alpha + t) + k e^(alpha t) = 0"}
    </Equation>
    <Equation>{"e^(alpha t) (malpha^2 + balpha + k) = 0"}</Equation>
    <Equation>{"malpha^2 + balpha + k = 0"}</Equation>
    <p>
      then getting the value of <Equation inline>{"alpha"}</Equation> we will
      use the quadractic formula and would result into:
    </p>
    <Equation>{"alpha = (-b/m +- sqrt(b^2/m^2 - (4k)/m)) / 2"}</Equation>
    <p>
      we will have 3 solutions, since the value inside the square root can be
      negative, we will have additional set of numbers called complex
    </p>
    <p>
      Inside the square root <Equation inline>{"b^2/m^2 - (4k)/m"}</Equation> we
      will get the ratio of <Equation inline>{"b"}</Equation> to{" "}
      <Equation inline>{"k"}</Equation> and <Equation inline>{"m"}</Equation>
    </p>
    <Equation>{"(b^2m-4km^2)/m^3"}</Equation>
    <Equation>{"(b^2-4km)/m^2"}</Equation>
    <p>
      and we can say that the ratio is{" "}
      <Equation inline>{"b^2 / (4km)"}</Equation>.
    </p>
    <p>
      When:
      <br />
      <Equation inline>{"b^2 < 4km"}</Equation>, the ratio is less than 1 and
      would result into negative value or complex number (the value inside the
      square root), we will call this <i>Underdamped.</i> <br />
      <Equation inline>{"b^2 = 4km"}</Equation>, the ratio is one and would
      result into 0 (the value inside the square root), we will call this{" "}
      <i>Critically damped.</i> <br />
      <Equation inline>{"b^2 > 4km"}</Equation>, the ratio is greater than 1 and
      would result into positive value (the value inside the square root), we
      will call this <i>Overdamped.</i>
    </p>
    {/* Underdamped */}
    <div>
      <h4>Underdamped</h4>
      <p>
        In underdamped case the value of{" "}
        <Equation inline>
          {"alpha_(1,2) = (-b/m +- isqrt(b^2/m^2 - (4k)/m)) / 2"}
        </Equation>
        , since <Equation inline>{"b^2 < 4km"}</Equation> the value inside the
        square root is negative and would result into complex number.
      </p>
      <p>
        Let's introduce new name called <Equation inline>{"w"}</Equation> where
        it is equal to{" "}
        <Equation inline>{"sqrt(b^2/m^2 - (4k)/m) / 2"}</Equation>, therefore
      </p>
      <Equation>{"alpha_(1,2) = -b/(2m) +- iw"}</Equation>
      <p>The general solution is</p>
      <Equation>{"x(t) = Ae^(alpha_1 t) + Be^(alpha_2 t)"}</Equation>
      <Equation>
        {"x(t) = Ae^((-b/(2m) + iw) t) + Be^((-b/(2m) - iw) t)"}
      </Equation>
      <Equation>
        {"x(t) = Ae^((-bt)/(2m))e^(iwt) + Be^((-bt)/(2m)e^(-iwt)"}
      </Equation>
      <p>Using Euler's identity:</p>
      <Equation>
        {"x(t) = e^((-bt)/(2m))[A(cos(wt) + isin(wt)) + B(cos(wt - isin(wt))]"}
      </Equation>
      <Equation>
        {"x(t) = e^((-bt)/(2m))[(A + B)cos(wt) + (Ai - Bi)sin(wt)]"}
      </Equation>
      <p>
        Since <Equation inline>{"(A+B)"}</Equation> and{" "}
        <Equation inline>{"(Ai - Bi)"}</Equation> are just both constant lets
        call them just &nbsp;
        <Equation inline>{"A"}</Equation> and &nbsp;
        <Equation inline>{"B"}</Equation> again respectively, so the solution
        would be
      </p>
      <Equation>{"x(t) = e^((-bt)/(2m))[Acos(wt) + Bsin(wt)]"}</Equation>
      <p>
        Taking the 2nd derivative to get the velocity function would result
        into:
      </p>
      <Equation>
        {
          "x'(t) = [Acos(wt) + Bsin(wt)](-b/(2m)) (e^((-bt)/(2m))) + (-Awsin(wt) + Bwcos(wt)) (e^((-bt)/(2m)))"
        }
      </Equation>
      <p>
        Taking the initial condition, where{" "}
        <Equation inline>{"t = 0"}</Equation>, in displacement function
      </p>
      <Equation>{"x(t) = e^((-bt)/(2m))[Acos(wt) + Bsin(wt)]"}</Equation>
      <Equation>{"x(0) = e^(0)[Acos(0) + Bsin(0)]"}</Equation>
      <Equation>{"x(0) = A"}</Equation>
      <p>
        so we can say that <Equation inline>{"A = x(t)"}</Equation>
      </p>
      <p>Let's try the initial condition in velocity function</p>
      <Equation>
        {
          "x'(t) = [Acos(wt) + Bsin(wt)](-b/(2m)) (e^((-bt)/(2m))) + (-Awsin(wt) + Bwcos(wt)) (e^((-bt)/(2m)))"
        }
      </Equation>
      <Equation>
        {
          "x'(0) = [Acos(0) + Bsin(0)](-b/(2m)) (e^0) + (-Awsin(0) + Bwcos(0)) (e^0)"
        }
      </Equation>
      <Equation>{"x'(0) = A(-b/(2m)) + Bw"}</Equation>
      <p>
        Substituting <Equation inline>{"A = x(t)"}</Equation>
      </p>
      <Equation>{"x'(t) = x(t)(-b/(2m)) + Bw"}</Equation>
      <p>
        so we can say that,{" "}
        <Equation inline>{"B = -(x'(t) + ((x(t)b)/(2m)))/w"}</Equation>
      </p>
      <p>
        Now we have the value of unknowns <Equation inline>{"A"}</Equation> and{" "}
        <Equation inline>{"B"}</Equation> , we can now solve the displacement
        function. Where:
        <br />
        <Equation inline>{"x(t)"}</Equation> is the initial displacement
        <br />
        <Equation inline>{"x'(t)"}</Equation> is the initial velocity
      </p>
    </div>

    {/* Critically Damped */}
    <div>
      <h4>Critically Damped</h4>
      <p>
        In overdamped case the value of{" "}
        <Equation inline>{"alpha = -b/(2m) +- 0"}</Equation>, since{" "}
        <Equation inline>{"b^2 = 4km"}</Equation>
      </p>
      <p>then we will have a solution of</p>
      <Equation>{"x(t) = Ae^(alpha t) + Bte^(alpha t)"}</Equation>
      <p>
        we will also take the derivative of the displacement function to get the
        velocity function, we will be needing this on determinig the unknowns in
        the equation
      </p>
      <Equation>
        {"x'(t) = Aalphae^(alpha t) + B(e^(alpha t) + te^(alpha t))"}
      </Equation>
      <p>
        To reduce the number of unknowns, we can use the initial conditions.
        Let's take when <Equation inline>{"t = 0"}</Equation>
      </p>
      <Equation>{"x(0) = Ae^(alpha t) + Bte^(alpha t)"}</Equation>
      <Equation>{"x(0) = Ae^(0) + B(0)e^(0)"}</Equation>
      <Equation>{"x(0) = A"}</Equation>
      <p>
        so we can say that <Equation inline>{"A = x(t)"}</Equation>, let's try
        the velocity function.
      </p>
      <Equation>
        {"x'(t) = Aalphae^(alpha t) + B(e^(alpha t) + te^(alpha t))"}
      </Equation>
      <Equation>{"x'(0) = Aalphae^(0) + B(e^(0) + (0)e^(0))"}</Equation>
      <Equation>{"x'(0) = Aalpha + B"}</Equation>
      <p>
        Substituting <Equation inline>{"A = x(t)"}</Equation>
      </p>
      <Equation>{"x'(t) = x(t)alpha + B"}</Equation>
      <p>
        so we can say that <Equation inline>{"B = x'(t) - x(t)alpha"}</Equation>
      </p>
      <p>
        Now we have the value of unknowns <Equation inline>{"A"}</Equation> and{" "}
        <Equation inline>{"B"}</Equation> , we can now solve the displacement
        function. Where:
        <br />
        <Equation inline>{"x(t)"}</Equation> is the initial displacement
        <br />
        <Equation inline>{"x'(t)"}</Equation> is the initial velocity
      </p>
    </div>

    {/* Overdamped */}
    <div>
      <h4>Overdamped</h4>
      <p>
        In overdamped case the value of{" "}
        <Equation inline>
          {"alpha_(1,2) = (-b/m +- sqrt(b^2/m^2 - (4k)/m)) / 2"}
        </Equation>
        , since <Equation inline>{"b^2 > 4km"}</Equation> the value inside the
        square root is positive or real
      </p>
      <p>The general solution for this case is</p>
      <Equation>{"x(t) = Ae^(alpha_1 t) + Be^(alpha_2 t)"}</Equation>
      <p>
        we will also take the derivative of the displacement function to get the
        velocity function and would result into
      </p>
      <Equation>
        {"x'(t) = Aalpha_1e^(alpha_1 t) + Balpha_2e^(alpha_2 t)"}
      </Equation>
      <p>Taking the initial conditions again to reduce the unknowns</p>
      <Equation>{"x(0) = Ae^(0) + Be^(0)"}</Equation>
      <Equation>{"x(0) = A + B"}</Equation>
      <p>
        so we can say that <Equation inline>{"A = x(t) - B"}</Equation>
      </p>
      <p>Now in terms of velocity function, it would give us</p>
      <Equation>
        {"x'(t) = Aalpha_1e^(alpha_1 t) + Balpha_2e^(alpha_2 t)"}
      </Equation>
      <Equation>{"x'(0) = Aalpha_1e^(0) + Balpha_2e^(0)"}</Equation>
      <Equation>{"x'(0) = Aalpha_1 + Balpha_2"}</Equation>
      <p>
        Substituting <Equation inline>{"A = x(t) - B"}</Equation>
      </p>
      <Equation>{"x'(t) = (x(t) - B)alpha_1 + Balpha_2"}</Equation>
      <p>
        so we can say that{" "}
        <Equation inline>
          {"B = (x'(t) - alpha_1 x(t)) / (alpha_2 - alpha_1)"}
        </Equation>
      </p>
      <p>
        Now we have the value of unknowns <Equation inline>{"A"}</Equation> and{" "}
        <Equation inline>{"B"}</Equation> , we can now solve the displacement
        function. Where:
        <br />
        <Equation inline>{"x(t)"}</Equation> is the initial displacement
        <br />
        <Equation inline>{"x'(t)"}</Equation> is the initial velocity
      </p>
    </div>
  </Container>
);

export default DHM;
