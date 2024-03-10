import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Table header", () => {
  it("Basic table header", () => {
    const { container } = renderNodown(
      "| Header 1 | Header 2 |\n| --- | --- |\n| Row 1 | Row 2 |"
    );
    const element = container.querySelector("th");
    expect(element).toMatchInlineSnapshot(`
      <th
        align="left"
      >
        Header 1
      </th>
    `);
  });
});
