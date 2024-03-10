import React from "react";
import { childrenMap } from "../render";

function FootnoteList({ children }) {
  const content = childrenMap(children);
  return <ol>{content}</ol>;
}

export default FootnoteList;
