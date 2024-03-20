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
        section: {
          disabled: false,
        },
      }}
    />
  );
};

describe("Section", () => {
  it("Basic section", () => {
    const { container } = renderNodown(" ");
    const element = container.firstChild;
    expect(element).toMatchInlineSnapshot(`
      <div
        class="nodown-root"
        id="nodown-render"
      >
        <section
          class="nodown-section"
        >
          <p
            class="nodown-paragraph"
          >
             
          </p>
        </section>
      </div>
    `);
  });

  it("New section by heading", () => {
    const { container } = renderNodown("Simple paragraph\n## Heading");
    const element = container.firstChild;
    expect(element).toMatchInlineSnapshot(`
      <div
        class="nodown-root"
        id="nodown-render"
      >
        <section
          class="nodown-section"
        >
          <p
            class="nodown-paragraph"
          >
            Simple paragraph
          </p>
        </section>
        <section
          class="nodown-section"
        >
          <h2
            class="nodown-title"
            id="title-1"
          >
            Heading
          </h2>
        </section>
      </div>
    `);
  });
});
