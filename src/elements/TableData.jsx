import React from "react";
import { childrenMap } from "../render";

function TableData({ children, align }) {
  const content = childrenMap(children);
  const tableAlign = align === "default" ? "left" : align;

  return <td align={tableAlign}>{content}</td>;
}

export default TableData;
