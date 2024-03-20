import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Code", () => {
  it("Basic code", () => {
    const { container } = renderNodown("`Code text`");
    const element = container.querySelector("code");
    expect(element).toMatchInlineSnapshot(`
      <code
        class="nodown-code"
      >
        Code text
      </code>
    `);
  });

  it("With backslash", () => {
    const { container } = renderNodown("`Code text\\`");
    const element = container.querySelector("code");
    expect(element).toMatchInlineSnapshot(`
      <code
        class="nodown-code"
      >
        Code text\\
      </code>
    `);
  });
});
