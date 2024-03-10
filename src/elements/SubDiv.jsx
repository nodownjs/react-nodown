import React from "react";
import { childrenMap } from "../render";

function SubDiv({ total, size, align, children }) {
  const content = childrenMap(children);
  let styles = {
    overflowY: "hidden",
  };
  let flex = `1 0 0%`;
  if (!total) total = 1;
  if (size !== undefined) {
    flex = `${size} 0 0%`;
    if (Math.floor(size) === 0) {
      flex = `0 1 auto`;
      styles = {
        ...styles,
        maxWidth: `calc(${parseFloat(
          ((1 / (total || 1)) * 100).toFixed(2)
        )}% - ${parseFloat(((total - 1) / total).toFixed(2))}em)`,
      };
    }
  }
  if (align) styles = { ...styles, textAlign: align };
  styles = { ...styles, flex };

  return <div style={styles}>{content}</div>;
}

export default SubDiv;
