import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Title", () => {
  it("Basic title h1", () => {
    const { container } = renderNodown("# Title");
    const element = container.querySelector("h1");
    expect(element).toMatchInlineSnapshot(`
      <h1
        class="nodown-title"
      >
        Title
      </h1>
    `);
  });

  it("Basic title h2", () => {
    const { container } = renderNodown("## Title");
    const element = container.querySelector("h2");
    expect(element).toMatchInlineSnapshot(`
      <h2
        class="nodown-title"
        id="title-1"
      >
        Title
      </h2>
    `);
  });

  it("With custom id", () => {
    const { container } = renderNodown("## Title {#custom-id}");
    const element = container.querySelector("h2");
    expect(element).toMatchInlineSnapshot(`
      <h2
        class="nodown-title"
        id="custom-id"
      >
        Title 
      </h2>
    `);
  });
});
