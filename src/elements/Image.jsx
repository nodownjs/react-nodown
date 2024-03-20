import React from "react";

function Image({ source, title, width, height, render, alt }) {
  const altText = generateAltText(alt, title);
  const titleText = title || null;

  const styles = {
    width: getSizeValue(width),
    minWidth: getSizeValue(width),
    height: getSizeValue(height),
    minHeight: getSizeValue(height),
    imageRendering: generateImageRendering(render),
  };

  return (
    <img
      className="nodown-image"
      alt={altText}
      title={titleText}
      src={source}
      style={styles}
    />
  );
}

function generateImageRendering(render) {
  const validRenderValues = ["auto", "crisp-edges", "pixelated"];
  return validRenderValues.includes(render) ? render : null;
}

function generateAltText(alt, title) {
  return alt ? alt : title ? `Title: ${title}` : null;
}

function getSizeValue(size) {
  return size ? (size.endsWith("%") ? size : `${size}px`) : null;
}

export default Image;
