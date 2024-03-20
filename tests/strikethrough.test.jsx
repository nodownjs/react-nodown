import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Strikethrough", () => {
  it("Basic strikethrough", () => {
    const { container } = renderNodown("~~Strikethrough~~");
    const element = container.querySelector("p");
    expect(element).toMatchInlineSnapshot(`
      <p
        class="nodown-paragraph"
      >
        <del
          class="nodown-strikethrough"
        >
          Strikethrough
        </del>
      </p>
    `);
  });
});
