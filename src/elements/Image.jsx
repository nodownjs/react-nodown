import React from "react";

function Image({ source, title, width, height, render, alt }) {
  const altText = alt ?? (title ? `Title: ${title}` : null);
  const titleText = title ?? null;
  const validRenderValues = ["auto", "crisp-edges", "pixelated"];

  const getSizeValue = (size) => {
    return size ? (size.endsWith("%") ? size : `${size}px`) : null;
  };

  const styles = {
    width: getSizeValue(width),
    minWidth: getSizeValue(width),
    height: getSizeValue(height),
    minHeight: getSizeValue(height),
    imageRendering: validRenderValues.includes(render) ? render : null,
  };

  return <img alt={altText} title={titleText} src={source} style={styles} />;
}

export default Image;
