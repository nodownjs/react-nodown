import React from "react";
import { childrenMap } from "../render";

function FrenchQuotationMark({ children }) {
  const open = `« `;
  const close = ` »`;
  const content = childrenMap(children);
  return (
    <>
      {open}
      {content}
      {close}
    </>
  );
}

export default FrenchQuotationMark;
