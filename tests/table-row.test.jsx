import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Table row", () => {
  it("Basic table row", () => {
    const { container } = renderNodown(
      "| Header 1 | Header 2 |\n| --- | --- |\n| Row 1 | Row 2 |"
    );
    const element = container.querySelector("tr");
    expect(element).toMatchInlineSnapshot(`
      <tr
        class="nodown-table-row"
      >
        <th
          align="left"
          class="nodown-table-header"
        >
          Header 1
        </th>
        <th
          align="left"
          class="nodown-table-header"
        >
          Header 2
        </th>
      </tr>
    `);
  });
});
