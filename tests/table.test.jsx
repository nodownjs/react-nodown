import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Table", () => {
  it("Basic table", () => {
    const { container } = renderNodown(
      "| Header 1 | Header 2 |\n| --- | --- |\n| Row 1 | Row 2 |"
    );
    const element = container.querySelector("table");
    expect(element).toMatchInlineSnapshot(`
      <table
        class="nodown-table"
      >
        <thead>
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
        </thead>
        <tbody>
          <tr
            class="nodown-table-row"
          >
            <td
              align="left"
              class="nodown-table-data"
            >
              Row 1
            </td>
            <td
              align="left"
              class="nodown-table-data"
            >
              Row 2
            </td>
          </tr>
        </tbody>
      </table>
    `);
  });
});
