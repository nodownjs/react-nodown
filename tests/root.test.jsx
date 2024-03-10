import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Root", () => {
  it("Basic root", () => {
    const { container } = renderNodown(" ");
    const element = container.firstChild;
    expect(element).toMatchInlineSnapshot(`
      <div
        id="nodown-render"
      >
        <p>
           
        </p>
      </div>
    `);
  });
});
