import React from "react";
import { childrenMap } from "../render";

function Emphasis({ children }) {
  const content = childrenMap(children);
  return <em>{content}</em>;
}

export default Emphasis;
