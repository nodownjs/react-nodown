import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(
    <Nodown
      content={content}
      parserOptions={{
        ...parserOptions,
        section: {
          disabled: false,
        },
      }}
    />
  );
};

describe("Footnote ref", () => {
  it("Basic footnote ref", () => {
    const { container } = renderNodown(`test[^1]\n\n[^1]: footnote text`);
    const element = container.querySelector("p");
    expect(element).toMatchInlineSnapshot(`
      <p
        class="nodown-paragraph"
      >
        test
        <sup
          class="nodown-footnote-ref"
        >
          <a
            href="#fn-1"
            id="fnref-1"
          >
            1
          </a>
        </sup>
      </p>
    `);
  });

  it("With id", () => {
    const { container } = renderNodown(
      `test[^custom-id]\n\n[^custom-id]: footnote text`
    );
    const element = container.querySelector("p");
    expect(element).toMatchInlineSnapshot(`
      <p
        class="nodown-paragraph"
      >
        test
        <sup
          class="nodown-footnote-ref"
        >
          <a
            href="#fn-custom-id"
            id="fnref-custom-id"
          >
            1
          </a>
        </sup>
      </p>
    `);
  });
});
