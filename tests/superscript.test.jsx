import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Superscript", () => {
  it("Basic superscript", () => {
    const { container } = renderNodown("<^Superscript text>");
    const element = container.querySelector("sup");
    expect(element).toMatchInlineSnapshot(`
      <sup
        class="nodown-superscript"
      >
        Superscript text
      </sup>
    `);
  });
});
