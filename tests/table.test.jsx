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
      <table>
        <thead>
          <tr>
            <th
              align="left"
            >
              Header 1
            </th>
            <th
              align="left"
            >
              Header 2
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              align="left"
            >
              Row 1
            </td>
            <td
              align="left"
            >
              Row 2
            </td>
          </tr>
        </tbody>
      </table>
    `);
  });
});
