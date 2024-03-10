import React from "react";
import { childrenMap } from "../render";

function Alert({ title, variant, children }) {
  const content = childrenMap(children);
  const titleContent = title ? childrenMap(title) : null;

  return (
    <div className={`alert ${variant}`}>
      <h4>{titleContent ? { ...titleContent } : null}</h4>
      {content}
    </div>
  );
}

export default Alert;
