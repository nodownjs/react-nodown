import React from "react";
import { childrenMap } from "../render";

function DateElement({ children, timestamp }) {
  const title = new Date(timestamp).toLocaleString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  const content = childrenMap(children);
  const timeClass = "nodown-date";
  return (
    <span title={title} className={timeClass}>
      {content}
    </span>
  );
}

export default DateElement;
