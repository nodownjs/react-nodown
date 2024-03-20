import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Citation", () => {
  it("Basic citation", () => {
    const { container } = renderNodown("> Citation text\n> - Author");
    const element = container.querySelector("blockquote");
    expect(element).toMatchInlineSnapshot(`
      <blockquote
        class="nodown-citation"
      >
        <p
          class="nodown-paragraph"
        >
          Citation text
        </p>
        <p
          class="nodown-paragraph"
        >
          - Author
        </p>
      </blockquote>
    `);
  });

  it("Only one line", () => {
    const { container } = renderNodown("> Citation text");
    const element = container.querySelector("blockquote");
    expect(element).toMatchInlineSnapshot(`
      <blockquote
        class="nodown-citation"
      >
        <p
          class="nodown-paragraph"
        >
          Citation text
        </p>
      </blockquote>
    `);
  });
});
