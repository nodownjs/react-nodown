declare module "react-nodown" {
  import { FC } from "react";

  type ParserOptions = object;
  type RenderOptions = object;

  interface NodownProps {
    content: string;
    parserOptions?: ParserOptions;
    renderOptions?: RenderOptions;
  }

  const Nodown: FC<NodownProps>;

  export default Nodown;
}
