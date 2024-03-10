import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Ordered list", () => {
  it("Basic ordered list", () => {
    const { container } = renderNodown(
      "1. List element\n2. List element\n3. List element\n"
    );
    const element = container.querySelector("ol");
    expect(element).toMatchInlineSnapshot(`
      <ol>
        <li>
          List element
        </li>
        <li>
          List element
        </li>
        <li>
          List element
        </li>
      </ol>
    `);
  });

  it("With sub list", () => {
    const { container } = renderNodown(
      "1. List element\n  1. List element\n  2. List element\n"
    );
    const element = container.querySelector("ol");
    expect(element).toMatchInlineSnapshot(`
      <ol>
        <li>
          List element
          <ol>
            <li>
              List element
            </li>
            <li>
              List element
            </li>
          </ol>
        </li>
      </ol>
    `);
  });

  it("With custom start", () => {
    const { container } = renderNodown(
      "10. List element\n11. List element\n12. List element\n"
    );
    const element = container.querySelector("ol");
    expect(element).toMatchInlineSnapshot(`
      <ol
        start="10"
      >
        <li>
          List element
        </li>
        <li>
          List element
        </li>
        <li>
          List element
        </li>
      </ol>
    `);
  });
});
