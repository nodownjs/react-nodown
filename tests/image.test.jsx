import { getByRole, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src/";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Image", () => {
  it("Basic image", () => {
    const { container } = renderNodown("![](https://exemple.com/image.png)");
    const element = getByRole(container, "img");
    expect(element).toMatchInlineSnapshot(`
      <img
        class="nodown-image"
        src="https://exemple.com/image.png"
      />
    `);
  });

  it("With alt", () => {
    const { container } = renderNodown(
      "![alt text](https://exemple.com/image.png)"
    );
    const element = getByRole(container, "img");
    expect(element).toMatchInlineSnapshot(`
      <img
        alt="alt text"
        class="nodown-image"
        src="https://exemple.com/image.png"
      />
    `);
  });

  it("With title", () => {
    const { container } = renderNodown(
      "![](https://exemple.com/image.png;Title text)"
    );
    const element = getByRole(container, "img");
    expect(element).toMatchInlineSnapshot(`
      <img
        alt="Title: Title text"
        class="nodown-image"
        src="https://exemple.com/image.png"
        title="Title text"
      />
    `);
  });

  it("With alt and title", () => {
    const { container } = renderNodown(
      "![alt text](https://exemple.com/image.png;Title text)"
    );
    const element = getByRole(container, "img");
    expect(element).toMatchInlineSnapshot(`
      <img
        alt="alt text"
        class="nodown-image"
        src="https://exemple.com/image.png"
        title="Title text"
      />
    `);
  });
});
