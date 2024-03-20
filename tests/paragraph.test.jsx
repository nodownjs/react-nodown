import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Paragraph", () => {
  it("Basic paragraph", () => {
    const { container } = renderNodown("Simple paragraph");
    const element = container.querySelector("p");
    expect(element).toMatchInlineSnapshot(`
      <p
        class="nodown-paragraph"
      >
        Simple paragraph
      </p>
    `);
  });
});
