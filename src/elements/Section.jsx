import React from "react";
import { childrenMap } from "../render";

function Section({ children }) {
  const content = childrenMap(children);
  return <section className="nodown-section">{content}</section>;
}

export default Section;
