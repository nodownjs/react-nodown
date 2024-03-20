import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nodown } from "../src";
import parserOptions from "./parserOptions.json";

const renderNodown = (content) => {
  return render(<Nodown content={content} parserOptions={parserOptions} />);
};

describe("Block code", () => {
  it("Without language", () => {
    const { container } = renderNodown(
      "```\nconsole.log('Hello, World!');\ntest\n```"
    );
    const element = container.querySelector("pre");
    expect(element).toMatchInlineSnapshot(`
      <pre
        class="nodown-block-code,"
      >
        <code
          class="nodown-code"
        >
          console.log('Hello, World!');
          

          test
          

        </code>
      </pre>
    `);
  });

  it("With language", () => {
    const { container } = renderNodown(
      "```javascript\nconsole.log('Hello, World!');\ntest\n```"
    );
    const element = container.querySelector("pre");
    expect(element).toMatchInlineSnapshot(`
      <pre
        class="nodown-block-code,javascript"
      >
        <code
          class="nodown-code"
        >
          console.log('Hello, World!');
          

          test
          

        </code>
      </pre>
    `);
  });
});
