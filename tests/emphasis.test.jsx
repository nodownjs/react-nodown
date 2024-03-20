import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Emphasis", () => {
  it("Basic emphasis", () => {
    const { container } = renderNodown(`*emphasis text*`);
    const divider = container.querySelector("p");
    expect(divider).toMatchInlineSnapshot(`
      <p
        class="nodown-paragraph"
      >
        <em
          class="nodown-emphasis"
        >
          emphasis text
        </em>
      </p>
    `);
  });

  it("With strong", () => {
    const { container } = renderNodown(`*emphasis **text***`);
    const element = container.querySelector("p");
    expect(element).toMatchInlineSnapshot(`
      <p
        class="nodown-paragraph"
      >
        <em
          class="nodown-emphasis"
        >
          emphasis 
          <strong
            class="nodown-strong"
          >
            text
          </strong>
        </em>
      </p>
    `);
  });
});
