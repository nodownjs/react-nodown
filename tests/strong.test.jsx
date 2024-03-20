import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Strong", () => {
  it("Basic strong", () => {
    const { container } = renderNodown("**Strong**");
    const element = container.querySelector("p");
    expect(element).toMatchInlineSnapshot(`
      <p
        class="nodown-paragraph"
      >
        <strong
          class="nodown-strong"
        >
          Strong
        </strong>
      </p>
    `);
  });
});
