import React from "react";
import Alert from "./elements/Alert";
import BlockCode from "./elements/BlockCode";
import Citation from "./elements/Citation";
import Code from "./elements/Code";
import Color from "./elements/Color";
import DateElement from "./elements/Date";
import Div from "./elements/Div";
import Divider from "./elements/Divider";
import Emphasis from "./elements/Emphasis";
import Footnote from "./elements/Footnote";
import FootnoteList from "./elements/FootnoteList";
import FootnoteRef from "./elements/FootnoteRef";
import FrenchQuotationMark from "./elements/FrenchQuotationMark";
import Image from "./elements/Image";
import Link from "./elements/Link";
import ListElement from "./elements/ListElement";
import OrderedList from "./elements/OrderedList";
import Paragraph from "./elements/Paragraph";
import Root from "./elements/Root";
import Section from "./elements/Section";
import SectionFootnote from "./elements/SectionFootnote";
import Strikethrough from "./elements/Strikethrough";
import Strong from "./elements/Strong";
import SubDiv from "./elements/SubDiv";
import Subscript from "./elements/Subscript";
import Superscript from "./elements/Superscript";
import Table from "./elements/Table";
import TableData from "./elements/TableData";
import TableHeader from "./elements/TableHeader";
import TableOfContents from "./elements/TableOfContents";
import TableRow from "./elements/TableRow";
import TaskListElement from "./elements/TaskListElement";
import Title from "./elements/Title";
import Underline from "./elements/Underline";
import Unicode from "./elements/Unicode";
import UnorderedList from "./elements/UnorderedList";
import Var from "./elements/Var";

let footnoteIds = [];
export const addFootnoteId = (id) => {
  footnoteIds.push(id);
};

export const options = {};
const setOptions = (optionsArg) => {
  Object.assign(options, optionsArg);
};

export function childrenMap(children) {
  return children.map((child, index) => {
    const element = recursiveRender(child);
    return React.cloneElement(element, { key: `${child.type}-${index}` });
  });
}

export function recursiveRender(obj) {
  if (!obj || typeof obj !== "object") {
    return obj ? obj.toString() : "";
  }
  const opt = options[obj.type];

  if (opt) {
    if (opt.disabled && obj.type !== "root") {
      return "";
    }
    if (opt.raw) {
      return {
        outerHTML: childrenMap(obj.children),
      };
    }
    if (opt.customRender && typeof opt.customRender === "function") {
      const hasChildren = obj.children !== undefined;

      let mappedChildren;
      if (hasChildren) {
        if (opt.childrenFormat === undefined || opt.childrenFormat === "jsx") {
          mappedChildren = childrenMap(obj.children);
        } else if (opt.childrenFormat === "object") {
          mappedChildren = obj.children;
        } else {
          mappedChildren = undefined;
        }
      } else {
        mappedChildren = undefined;
      }

      const element = opt.customRender({
        ...obj,
        children: mappedChildren,
      });
      if (React.isValidElement(element)) {
        return <>{element}</>;
      } else {
        return <></>;
      }
    }
  }

  const element = createElementFromObj(obj);
  return element;
}

/**
 * Renders a React document based on the provided object syntax tree.
 *
 * @param {Object} tree - The object syntax tree representing the document structure.
 * @param {Object} optionsArg - Optional options object.
 * @returns {React.ReactNode} - The rendered React document.
 */
export default function renderToReact(tree, optionsArg) {
  setOptions(optionsArg);
  const doc = recursiveRender(tree);
  const disabledRoot = options?.root?.disabled ?? false;
  if (disabledRoot) {
    return doc;
  }
  return doc;
}

function createElementFromObj(obj) {
  switch (obj.type) {
    case "root":
      return <Root {...obj} />;
    case "section":
      return <Section {...obj} />;
    case "div":
      return <Div {...obj} />;
    case "sub-div":
      return <SubDiv {...obj} />;
    case "block-code":
      return <BlockCode {...obj} />;
    case "citation":
      return <Citation {...obj} />;
    case "code":
      return <Code {...obj} />;
    case "color":
      return <Color {...obj} />;
    case "date":
      return <DateElement {...obj} />;
    case "divider":
      return <Divider {...obj} />;
    case "italic":
      return <Emphasis {...obj} />;
    case "footnote":
      return <Footnote {...obj} />;
    case "footnote-list":
      return <FootnoteList {...obj} />;
    case "footnote-ref":
      return <FootnoteRef {...obj} />;
    case "french-quotation-mark":
      return <FrenchQuotationMark {...obj} />;
    case "link":
      return <Link {...obj} />;
    case "list-element":
      return <ListElement {...obj} />;
    case "ordered-list":
      return <OrderedList {...obj} />;
    case "unordered-list":
      return <UnorderedList {...obj} />;
    case "section-footnote":
      return <SectionFootnote {...obj} />;
    case "strikethrough":
      return <Strikethrough {...obj} />;
    case "bold":
      return <Strong {...obj} />;
    case "superscript":
      return <Superscript {...obj} />;
    case "subscript":
      return <Subscript {...obj} />;
    case "table":
      return <Table {...obj} />;
    case "table-data":
      return <TableData {...obj} />;
    case "table-header":
      return <TableHeader {...obj} />;
    case "table-of-contents":
      return <TableOfContents {...obj} />;
    case "table-row":
      return <TableRow {...obj} />;
    case "task-list-element":
      return <TaskListElement {...obj} />;
    case "title":
      return <Title {...obj} />;
    case "underline":
      return <Underline {...obj} />;
    case "unicode":
      return <Unicode {...obj} />;
    case "var":
      return <Var {...obj} />;
    case "image":
      return <Image {...obj} />;
    case "paragraph":
      return <Paragraph {...obj} />;
    case "alert":
      return <Alert {...obj} />;
    case "text":
      const text = obj.children;
      // .replace(/&/g, "&amp;")
      // .replace(/</g, "&lt;")
      // .replace(/>/g, "&gt;")
      // .replace(/"/g, "&quot;")
      // .replace(/'/g, "&#039;");
      return <>{text}</>;

    default:
      return <></>;
  }
}
