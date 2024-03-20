import React from "react";
import { childrenMap } from "../render";

function ListElement({ children }) {
  const content = childrenMap(children);
  return <li className="nodown-list-element">{content}</li>;
}

export default ListElement;
