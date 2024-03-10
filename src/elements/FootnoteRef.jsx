import React from "react";

function FootnoteRef({ id, refId, index, inactive, raw }) {
  let element = null;
  if (!inactive) {
    const a = (
      <a href={`#fn-${refId}`} id={`fnref-${id}`} className="footnote-ref">
        {index}
      </a>
    );
    const sup = <sup>{a}</sup>;
    element = sup;
  } else {
    element = <>{raw}</>;
  }
  return element;
}

export default FootnoteRef;
