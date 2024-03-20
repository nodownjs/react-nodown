import React from "react";
import { childrenMap } from "../render.jsx";

function UnorderedList({ children }) {
  const content = childrenMap(children);
  return <ul className="nodown-unordered-list">{content}</ul>;
}

export default UnorderedList;
