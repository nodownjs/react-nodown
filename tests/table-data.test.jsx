import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Table data", () => {
  it("Basic table data", () => {
    const { container } = renderNodown(
      "| Header 1 | Header 2 |\n| --- | --- |\n| Row 1 | Row 2 |"
    );
    const element = container.querySelector("td");
    expect(element).toMatchInlineSnapshot(`
      <td
        align="left"
      >
        Row 1
      </td>
    `);
  });
});
