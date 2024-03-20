import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Var", () => {
  it("Basic var", () => {
    const { container } = renderNodown("<test>\n<test>: Var value");
    const element = container.querySelector("p");
    expect(element).toMatchInlineSnapshot(`
      <p
        class="nodown-paragraph"
      >
        <span
          class="nodown-var"
        >
          Var value
        </span>
      </p>
    `);
  });

  it("Code var", () => {
    const { container } = renderNodown("<`<test>`>\n<test>: Var value");
    const element = container.querySelector("p");
    expect(element).toMatchInlineSnapshot(`
      <p
        class="nodown-paragraph"
      >
        <code
          class="nodown-code"
        >
          <span
            class="nodown-var"
          >
            Var value
          </span>
        </code>
      </p>
    `);
  });
});
