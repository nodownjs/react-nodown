import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Alert", () => {
  it("Without title", () => {
    const { container } = renderNodown(">! Warning");
    const element = container.querySelector(".nodown-alert");
    expect(element).toMatchInlineSnapshot(`
      <div
        class="nodown-alert warning"
      >
        <p
          class="nodown-paragraph"
        >
          Warning
        </p>
      </div>
    `);
  });

  it("With title", () => {
    const { container } = renderNodown(">! # Warning\n> Warning message");
    const element = container.querySelector(".nodown-alert");
    expect(element).toMatchInlineSnapshot(`
      <div
        class="nodown-alert warning"
      >
        <h4>
          Warning
        </h4>
        <p
          class="nodown-paragraph"
        >
          Warning message
        </p>
      </div>
    `);
  });
});
