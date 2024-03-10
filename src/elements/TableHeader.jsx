import React from "react";
import { childrenMap } from "../render";

function TableHeader({ children, align }) {
  const content = childrenMap(children);
  const headerAlign = align === "default" ? "left" : align;

  return <th align={headerAlign}>{content}</th>;
}

export default TableHeader;
