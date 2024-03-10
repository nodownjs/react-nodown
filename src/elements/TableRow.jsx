import React from "react";
import { childrenMap } from "../render";

function TableRow({ children }) {
  const content = childrenMap(children);
  return <tr>{content}</tr>;
}

export default TableRow;
