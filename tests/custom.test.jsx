import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(
    <Nodown
      content={content}
      parserOptions={parserOptions}
      renderOptions={{
        title: {
          customRender: (obj) => {
            return <span>{obj.children}</span>;
          },
        },
      }}
    />
  );
};

describe("Custom", () => {
  it("Custom title", () => {
    const { container } = renderNodown(`### Custom title`);
    const element = container.querySelector("span");
    expect(element).toMatchInlineSnapshot(`
      <span>
        Custom title
      </span>
    `);
  });
});
