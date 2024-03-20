import React from "react";
import { childrenMap } from "../render";

function Strikethrough({ children }) {
  const content = childrenMap(children);
  return <del className="nodown-strikethrough">{content}</del>;
}

export default Strikethrough;
