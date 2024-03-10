import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

const char1 = `\\u21AA`;
const char2 = `U+1DDF`;

describe("Unicode", () => {
  it("Basic unicode 1", () => {
    const { container } = renderNodown(`\`${char1}\``);
    const element = container.querySelector(".unicode");
    expect(element).toMatchInlineSnapshot(`
      <code
        class="unicode"
      >
        <span
          class="preview"
        >
          ↪
        </span>
        <span>
          \\u21AA
        </span>
      </code>
    `);
  });
  it("Basic unicode 2", () => {
    const { container } = renderNodown(`\`${char2}\``);
    const element = container.querySelector(".unicode");
    expect(element).toMatchInlineSnapshot(`
      <code
        class="unicode"
      >
        <span
          class="preview"
        >
          ᷟ
        </span>
        <span>
          U+1DDF
        </span>
      </code>
    `);
  });
});
