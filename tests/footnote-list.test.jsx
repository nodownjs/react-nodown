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

describe("Footnote list", () => {
  it("Basic footnote list", () => {
    const { container } = renderNodown(`test[^1]\n\n[^1]: footnote text`);
    const element = container.querySelector("#footnotes > ol");
    expect(element).toMatchInlineSnapshot(`
      <ol
        class="nodown-ordered-list nodown-footnote-list"
      >
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
      </ol>
    `);
  });
});
