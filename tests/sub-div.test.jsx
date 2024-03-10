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
        horizontalAlignment: { disabled: false },
      }}
    />
  );
};

describe("Sub div", () => {
  it("Basic sub div", () => {
    const { container } = renderNodown("------\nSub div created");
    const element = container.firstChild;
    expect(element).toMatchInlineSnapshot(`
      <div
        id="nodown-render"
      >
        <div>
          <div />
        </div>
        <div
          style="text-align: left;"
        >
          <div
            style="overflow-y: hidden; flex: 1 0 0%;"
          >
            <p>
              Sub div created
            </p>
          </div>
        </div>
      </div>
    `);
  });
  it("New sub div", () => {
    const { container } = renderNodown(
      "------\nSub div created\n===\nNew sub div"
    );
    const element = container.firstChild;
    expect(element).toMatchInlineSnapshot(`
      <div
        id="nodown-render"
      >
        <div>
          <div />
        </div>
        <div
          style="text-align: left;"
        >
          <div
            style="overflow-y: hidden; flex: 1 0 0%;"
          >
            <p>
              Sub div created
            </p>
          </div>
          <div
            style="overflow-y: hidden; text-align: left; flex: 1 0 0%;"
          >
            <p>
              New sub div
            </p>
          </div>
        </div>
      </div>
    `);
  });
});
