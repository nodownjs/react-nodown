import React from "react";
import { childrenMap } from "../render";

function FootnoteSection({ children }) {
  const content = childrenMap(children);
  return (
    <section className="nodown-section nodown-section-footnote" id="footnotes">
      {content}
    </section>
  );
}

export default FootnoteSection;
