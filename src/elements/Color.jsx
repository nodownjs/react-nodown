import React from "react";
import { childrenMap } from "../render";

function Color({ children, color }) {
  const codeClass = "color";
  const colorClass = "preview";
  const size = "1em";
  const styles = {
    backgroundColor: color,
    display: "inline-block",
    marginRight: "0.375em",
    transform: "translateY(.1em)",
    height: size,
    width: size,
  };
  const colorSpan = <span style={styles} className={colorClass}></span>;
  const content = childrenMap(children);
  return (
    <code className={codeClass}>
      {colorSpan}
      {content}
    </code>
  );
}

export default Color;
