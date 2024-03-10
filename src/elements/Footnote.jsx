import React from "react";
import { addFootnoteId, childrenMap } from "../render";

function Footnote({ children, id }) {
  const content = childrenMap(children);
  addFootnoteId(id);
  return (
    <li className="footnote" id={`fn-${id}`}>
      {content}
    </li>
  );
}

export default Footnote;
