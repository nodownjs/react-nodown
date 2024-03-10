import React from "react";
import { childrenMap } from "../render";

function Strikethrough({ children }) {
  const content = childrenMap(children);
  return <del>{content}</del>;
}

export default Strikethrough;
