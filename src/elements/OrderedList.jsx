import React from "react";
import { childrenMap } from "../render";

function OrderedList({ children, start }) {
  const content = childrenMap(children);
  const startAttribute = !isNaN(start) && start > 1 ? start : null;

  return <ol start={startAttribute}>{content}</ol>;
}

export default OrderedList;
