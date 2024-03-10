import React from "react";
import { childrenMap } from "../render";

function Title({ level, children, id }) {
  const Heading = `h${level}`;
  let content = childrenMap(children);

  return React.createElement(Heading, { id: id }, ...content);
}

export default Title;
