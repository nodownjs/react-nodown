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
        id="nodown-render"
      >
        <section>
          <p>
             
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
        id="nodown-render"
      >
        <section>
          <p>
            Simple paragraph
          </p>
        </section>
        <section>
          <h2
            id="title-1"
          >
            Heading
          </h2>
        </section>
      </div>
    `);
  });
});
