import { useState } from "react";
import "../../../node_modules/nodown/styles/index.css";
import "../../../node_modules/nodown/styles/theme-dark.css";
import "../../../node_modules/nodown/styles/theme-light.css";
import { Nodown } from "../../../src";
import "./styles.css";

function App() {
  const [data, setData] = useState("");
  let theme = localStorage.getItem("theme") || "dark";
  updateTheme(theme);

  function updateDoc(value) {
    setData(value.target.value);
  }

  function updateTheme(theme) {
    document.body.className = `theme-${theme}`;
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  function switchPls() {
    var theme = document.body.classList[0];
    if (theme == "theme-light") {
      updateTheme("dark");
    } else {
      updateTheme("light");
    }
  }

  return (
    <main>
      <textarea
        name="nodown-input"
        id="nodown-input"
        onKeyUp={updateDoc}
      ></textarea>
      <div id="nodown-output">
        <Nodown
          content={data}
          renderOptions={{
            underline: {
              childrenFormat: "jsx",
              customRender: (obj) => {
                return <span>{obj.children}</span>;
              },
            },
          }}
        />
      </div>
      <div id="switch" onClick={switchPls}>
        <div id="circle"></div>
      </div>
    </main>
  );
}

export default App;
