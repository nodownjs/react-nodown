import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Date", () => {
  it("Basic date", () => {
    const { container } = renderNodown(`<i:20024-03-10:d>`);
    const element = container.querySelector(".nodown-date");
    expect(element).toMatchInlineSnapshot(`
      <span
        class="nodown-date"
        title="lundi 10 mars 1924 à 00:00"
      >
        3/10/24
      </span>
    `);
  });
});
