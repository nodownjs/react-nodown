import React from "react";
import { childrenMap } from "../render";

function ListElement({ children }) {
  const content = childrenMap(children);
  return <li>{content}</li>;
}

export default ListElement;
