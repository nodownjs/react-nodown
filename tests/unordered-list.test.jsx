import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Unordered list", () => {
  it("Basic unordered list", () => {
    const { container } = renderNodown(
      "- List element\n- List element\n- List element\n"
    );
    const element = container.querySelector("ul");
    expect(element).toMatchInlineSnapshot(`
      <ul
        class="nodown-unordered-list"
      >
        <li
          class="nodown-list-element"
        >
          List element
        </li>
        <li
          class="nodown-list-element"
        >
          List element
        </li>
        <li
          class="nodown-list-element"
        >
          List element
        </li>
      </ul>
    `);
  });

  it("With sub list", () => {
    const { container } = renderNodown(
      "- List element\n  - List element\n  - List element\n"
    );
    const element = container.querySelector("ul");
    expect(element).toMatchInlineSnapshot(`
      <ul
        class="nodown-unordered-list"
      >
        <li
          class="nodown-list-element"
        >
          List element
          <ul
            class="nodown-unordered-list"
          >
            <li
              class="nodown-list-element"
            >
              List element
            </li>
            <li
              class="nodown-list-element"
            >
              List element
            </li>
          </ul>
        </li>
      </ul>
    `);
  });
});
