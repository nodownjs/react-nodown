import React from "react";
import { recursiveRender } from "../render";

const Div = (obj) => {
  const content = obj.children.map((child, index) =>
    recursiveRender({ ...child, total: obj.children.length }, index)
  );
  const renderedContent = content.map((child, index) => (
    <React.Fragment key={index}>{child}</React.Fragment>
  ));

  const styles = {
    display: obj.display === "inline" ? "flex" : undefined,
    justifyContent: obj.display === "inline" ? obj.align : undefined,
    textAlign: obj.display !== "inline" ? obj.align : undefined,
  };

  return <div style={styles}>{...renderedContent}</div>;
};

export default Div;
