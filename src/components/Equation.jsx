import React from "react";
import MathJax from "react-mathjax2";

const Equation = ({ inline, children }) =>
  inline ? (
    <MathJax.Node inline>{children}</MathJax.Node>
  ) : (
    <p>
      <MathJax.Node>{children}</MathJax.Node>
    </p>
  );

export default Equation;
