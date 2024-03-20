import React from "react";
import { childrenMap } from "../render";

function Paragraph({ children }) {
  const content = childrenMap(children);
  return <p className="nodown-paragraph">{content}</p>;
}

export default Paragraph;
