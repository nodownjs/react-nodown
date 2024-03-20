import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Subscript", () => {
  it("Basic subscript", () => {
    const { container } = renderNodown("<_Subscript text>");
    const element = container.querySelector("sub");
    expect(element).toMatchInlineSnapshot(`
      <sub
        class="nodown-subscript"
      >
        Subscript text
      </sub>
    `);
  });
});
