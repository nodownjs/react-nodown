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

describe("Div", () => {
  it("Basic div", () => {
    const { container } = renderNodown(`===\nDiv text`);
    const element = container.querySelector("#nodown-render > div");
    expect(element).toMatchInlineSnapshot(`
      <div
        class="nodown-div"
      >
        <div
          class="nodown-sub-div"
          style="overflow-y: hidden; flex: 1 0 0%;"
        />
        <div
          class="nodown-sub-div"
          style="overflow-y: hidden; text-align: left; flex: 1 0 0%;"
        >
          <p
            class="nodown-paragraph"
          >
            Div text
          </p>
        </div>
      </div>
    `);
  });

  it("right aligned", () => {
    const { container } = renderNodown(`===:\nDiv text`);
    const element = container.querySelector("#nodown-render > div");
    expect(element).toMatchInlineSnapshot(`
      <div
        class="nodown-div"
      >
        <div
          class="nodown-sub-div"
          style="overflow-y: hidden; flex: 1 0 0%;"
        />
        <div
          class="nodown-sub-div"
          style="overflow-y: hidden; text-align: right; flex: 1 0 0%;"
        >
          <p
            class="nodown-paragraph"
          >
            Div text
          </p>
        </div>
      </div>
    `);
  });
});
