import React from "react";
import { childrenMap } from "../render";

function TaskListElement({ children, checked }) {
  const content = childrenMap(children);
  const checkbox = <input type="checkbox" checked={checked} readOnly />;

  return (
    <li>
      {checkbox}
      {content}
    </li>
  );
}

export default TaskListElement;
