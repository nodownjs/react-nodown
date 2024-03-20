import React from "react";
import { recursiveRender } from "../render";

function BlockCode({ children, language }) {
  const content = children.map((child, index) => (
    <React.Fragment key={`text-${index}`}>
      {recursiveRender(child)}
      {"\n"}
    </React.Fragment>
  ));

  const className = language ? language : null;
  return (
    <pre className={["nodown-block-code", className]}>
      <code className="nodown-code">{content}</code>
    </pre>
  );
}

export default BlockCode;
