import React from "react";
import { childrenMap } from "../render";

function Table({ headers, rows }) {
  const headerRows = childrenMap(headers);
  const bodyRows = childrenMap(rows);

  return (
    <table>
      <thead>
        <tr>{...headerRows}</tr>
      </thead>
      <tbody>{...bodyRows}</tbody>
    </table>
  );
}

export default Table;
