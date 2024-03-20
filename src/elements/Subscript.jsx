import React from "react";
import { childrenMap } from "../render";

function Subscript({ children }) {
  const content = childrenMap(children);
  return <sub className="nodown-subscript">{content}</sub>;
}

export default Subscript;
