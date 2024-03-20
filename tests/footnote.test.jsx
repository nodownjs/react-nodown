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

describe("Footnote", () => {
  it("Basic footnote", () => {
    const { container } = renderNodown(`test[^1]\n\n[^1]: footnote text`);
    const divider = container.querySelector("#footnotes > ol > li");
    expect(divider).toMatchInlineSnapshot(`
      <li
        class="nodown-footnote"
        id="fn-1"
      >
        footnote text
        <a
          class="nodown-link"
          href="#fnref-1"
        >
           
          ↩
        </a>
      </li>
    `);
  });

  it("With id", () => {
    const { container } = renderNodown(
      `test[^custom-id]\n\n[^custom-id]: footnote text`
    );
    const divider = container.querySelector("#footnotes > ol > li");
    expect(divider).toMatchInlineSnapshot(`
      <li
        class="nodown-footnote"
        id="fn-custom-id"
      >
        footnote text
        <a
          class="nodown-link"
          href="#fnref-custom-id"
        >
           
          ↩
        </a>
      </li>
    `);
  });
});
