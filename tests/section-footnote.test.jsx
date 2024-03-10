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

describe("Section footnote", () => {
  it("Basic section footnote", () => {
    const { container } = renderNodown("Text[^1]\n[^1]: Footnote");
    const element = container.querySelector("#footnotes");
    expect(element).toMatchInlineSnapshot(`
      <section
        id="footnotes"
      >
        <ol>
          <li
            class="footnote"
            id="fn-1"
          >
            Footnote
            <a
              href="#fnref-1"
            >
               
              ↩
            </a>
          </li>
        </ol>
      </section>
    `);
  });
});
