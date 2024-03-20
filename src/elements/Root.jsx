import React from "react";
import { childrenMap } from "../render";

function Root({ children }) {
  const content = childrenMap(children);
  return (
    <div className="nodown-root" id="nodown-render">
      {content}
    </div>
  );
}

export default Root;
