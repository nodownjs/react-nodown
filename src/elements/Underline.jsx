import React from "react";
import { childrenMap } from "../render";

function Underline({ children }) {
  const content = childrenMap(children);
  return <u className="nodown-underline">{content}</u>;
}

export default Underline;
