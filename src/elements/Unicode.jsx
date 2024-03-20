import React from "react";
import { childrenMap } from "../render";

function Unicode({ children, char }) {
  const content = childrenMap(children);
  const charSpan = <span>{content}</span>;
  const charElement = <span className="preview">{char}</span>;
  const codeElement = (
    <code className="nodown-unicode">
      {charElement}
      {charSpan}
    </code>
  );

  return codeElement;
}

export default Unicode;
