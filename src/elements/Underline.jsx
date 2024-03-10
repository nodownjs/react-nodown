import React from "react";
import { childrenMap } from "../render";

function Underline({ children }) {
  const content = childrenMap(children);
  return <u>{content}</u>;
}

export default Underline;
