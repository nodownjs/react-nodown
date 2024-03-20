import React from "react";
import { childrenMap } from "../render.jsx";

function Var({ children }) {
  const content = childrenMap(children);
  return <span className="nodown-var">{content}</span>;
}

export default Var;
