declare module "react-nodown" {
  import { FC, ReactElement } from "react";

  type ParserOptions = object;
  type RenderOptions = object;
  type Tree = object;

  interface NodownProps {
    content: string;
    parserOptions?: ParserOptions;
    renderOptions?: RenderOptions;
  }

  const Nodown: FC<NodownProps>;

  function renderToReact(tree: Tree, optionsArg?: RenderOptions): ReactElement;

  export { Nodown, renderToReact };
}
