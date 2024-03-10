import React from "react";
import { childrenMap } from "../render";

function Alert({ title, variant, children }) {
  const content = childrenMap(children);
  const titleContent = title ? childrenMap(title) : null;

  return (
    <div className={`alert ${variant}`}>
      {titleContent ? <h4>{titleContent}</h4> : null}
      {content}
    </div>
  );
}

export default Alert;
