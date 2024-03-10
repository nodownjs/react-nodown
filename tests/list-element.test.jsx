import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("List element", () => {
  it("Basic list element", () => {
    const { container } = renderNodown("- List element");
    const element = container.querySelector("li");
    expect(element).toMatchInlineSnapshot(`
      <li>
        List element
      </li>
    `);
  });
});
