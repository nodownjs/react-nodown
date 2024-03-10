import React from "react";
import { childrenMap } from "../render";

function Link({ children, href, title }) {
  let content = childrenMap(children);
  let extraSpace = null;
  if (href.startsWith("#fnref-")) extraSpace = " ";
  if (content.length <= 1 && content[0].props.children.trim() === "")
    content = [<>{href}</>];

  return (
    <a href={href} title={title}>
      {extraSpace}
      {content}
    </a>
  );
}

export default Link;
