import React from "react";
import { childrenMap } from "../render";

function TableOfContents({ children }) {
  const content = childrenMap(children);

  return <div className="table-of-contents">{content}</div>;
}

export default TableOfContents;
