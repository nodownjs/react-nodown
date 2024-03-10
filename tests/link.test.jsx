import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Link", () => {
  it("Basic link", () => {
    const { container } = renderNodown("[](https://exemple.com/image.png)");
    const element = container.querySelector("a");
    expect(element).toMatchInlineSnapshot(`
      <a
        href="https://exemple.com/image.png"
      >
        https://exemple.com/image.png
      </a>
    `);
  });

  it("With alt", () => {
    const { container } = renderNodown("[Text](https://exemple.com/image.png)");
    const element = container.querySelector("a");
    expect(element).toMatchInlineSnapshot(`
      <a
        href="https://exemple.com/image.png"
      >
        Text
      </a>
    `);
  });

  it("With title", () => {
    const { container } = renderNodown(
      "[](https://exemple.com/image.png;Title text)"
    );
    const element = container.querySelector("a");
    expect(element).toMatchInlineSnapshot(`
      <a
        href="https://exemple.com/image.png"
        title="Title text"
      >
        https://exemple.com/image.png
      </a>
    `);
  });

  it("With alt and title", () => {
    const { container } = renderNodown(
      "[Text](https://exemple.com/image.png;Title text)"
    );
    const element = container.querySelector("a");
    expect(element).toMatchInlineSnapshot(`
      <a
        href="https://exemple.com/image.png"
        title="Title text"
      >
        Text
      </a>
    `);
  });
});
