import React from "react";
import { childrenMap } from "../render";

function Citation({ children }) {
  const content = childrenMap(children);
  return <blockquote>{content}</blockquote>;
}

export default Citation;
