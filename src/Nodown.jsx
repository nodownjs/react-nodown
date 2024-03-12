import React from "react";
import { parser } from "../node_modules/nodown/dist/main";
import renderToReact from "./render";

function Nodown({ content, parserOptions, renderOptions }) {
  const tree = parser(content, parserOptions);
  const html = renderToReact(tree, renderOptions);

  return <>{html}</>;
}

export default Nodown;
