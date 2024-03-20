import React from "react";
import { childrenMap } from "../render";

function Superscript({ children }) {
  const content = childrenMap(children);
  return <sup className="nodown-superscript">{content}</sup>;
}

export default Superscript;
