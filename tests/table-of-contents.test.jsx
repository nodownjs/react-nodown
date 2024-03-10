import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Table of contents", () => {
  it("Basic table of contents ", () => {
    const { container } = renderNodown(
      "## Table of contents\n[[table-of-contents]]"
    );
    const element = container.querySelector(".table-of-contents");
    expect(element).toMatchInlineSnapshot(`
      <div
        class="table-of-contents"
      >
        <ul>
          <li>
            <a
              href="#title-1"
            >
              Table of contents
            </a>
          </li>
        </ul>
      </div>
    `);
  });
});
