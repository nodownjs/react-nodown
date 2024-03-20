import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

const colorHex = `#FFDAB9`;
const colorShortHex = `#FB9`;
const colorRgb = `rgb(204, 230, 255)`;
const colorRgba = `rgba(255, 235, 205, 0.5)`;
const colorHsl = `hsl(160, 100%, 96%)`;
const colorHsla = `hsla(260, 100%, 96%, 0.5)`;

describe("Color", () => {
  it("Hex color", () => {
    const { container } = renderNodown(`\`${colorHex}\``);
    const element = container.querySelector(".nodown-color");
    expect(element).toMatchInlineSnapshot(`
      <code
        class="nodown-color"
      >
        <span
          class="preview"
          style="background-color: rgb(255, 218, 185); display: inline-block; margin-right: 0.375em; transform: translateY(.1em); height: 1em; width: 1em;"
        />
        #FFDAB9
      </code>
    `);
  });
  it("RGBA color", () => {
    const { container } = renderNodown(`\`${colorRgba}\``);
    const element = container.querySelector(".nodown-color");
    expect(element).toMatchInlineSnapshot(`
      <code
        class="nodown-color"
      >
        <span
          class="preview"
          style="background-color: rgba(255, 235, 205, 0.5); display: inline-block; margin-right: 0.375em; transform: translateY(.1em); height: 1em; width: 1em;"
        />
        rgba(255, 235, 205, 0.5)
      </code>
    `);
  });
  it("HSLA color", () => {
    const { container } = renderNodown(`\`${colorHsla}\``);
    const element = container.querySelector(".nodown-color");
    expect(element).toMatchInlineSnapshot(`
      <code
        class="nodown-color"
      >
        <span
          class="preview"
          style="background-color: rgba(241, 235, 255, 0.5); display: inline-block; margin-right: 0.375em; transform: translateY(.1em); height: 1em; width: 1em;"
        />
        hsla(260, 100%, 96%, 0.5)
      </code>
    `);
  });
});
