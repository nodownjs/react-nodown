import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Task list element", () => {
  it("Basic task list element", () => {
    const { container } = renderNodown("- [ ] List element");
    const element = container.querySelector("li");
    expect(element).toMatchInlineSnapshot(`
      <li>
        <input
          readonly=""
          type="checkbox"
        />
         List element
      </li>
    `);
  });

  it("Checked", () => {
    const { container } = renderNodown("- [x] List element");
    const element = container.querySelector("li");
    expect(element).toMatchInlineSnapshot(`
      <li>
        <input
          checked=""
          readonly=""
          type="checkbox"
        />
         List element
      </li>
    `);
  });
});
