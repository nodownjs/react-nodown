import React from "react";
import { childrenMap } from "../render";

function Strong({ children }) {
  const content = childrenMap(children);
  return <strong className="nodown-strong">{content}</strong>;
}

export default Strong;
