import React from "react";
import { childrenMap } from "../render";

function Code({ children }) {
  const content = childrenMap(children);
  return <code>{content}</code>;
}

export default Code;
