import React from "react";
import { childrenMap } from "../render";

function FootnoteList({ children }) {
  const content = childrenMap(children);
  return <ol className="nodown-footnote-list">{content}</ol>;
}

export default FootnoteList;
