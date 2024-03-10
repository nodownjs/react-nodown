import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Divider", () => {
  it("Basic divider", () => {
    const { container } = renderNodown(`---`);
    const element = container.querySelector("hr");
    expect(element).toMatchInlineSnapshot(`<hr />`);
  });
});
