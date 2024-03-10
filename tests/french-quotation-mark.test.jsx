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
        "french-quotation-mark": {
          disabled: false,
        },
      }}
    />
  );
};

describe("French quotation mark", () => {
  it("Basic french quotation mark", () => {
    const { container } = renderNodown(`"Quotation"`);
    const element = container.querySelector("p");
    expect(element).toMatchInlineSnapshot(`
      <p>
        « 
        Quotation
         »
      </p>
    `);
  });
});
