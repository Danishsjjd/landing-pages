import { useEffect, useState } from "react";

import CodeEdit from "./assets/components/CodeEdit";

export const HTML = "HTML";
export const CSS = "CSS";
export const JavaScript = "JavaScript";

function App() {
  const [state, setState] = useState({
    [CSS]: "",
    [HTML]: "",
    [JavaScript]: "",
  });
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      let src = `<html><style>${state[CSS]}</style><body>${state[HTML]}<script>${state[JavaScript]}</script></body></html>`;
      setSrcDoc(src);
    }, 500);
    return () => clearTimeout(timeout);
  }, [state[CSS], state[HTML], state[JavaScript]]);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <CodeEdit setState={setState} />
      <hr className="relative -top-1 z-10 h-2 w-full bg-zinc-800" />
      <iframe
        srcDoc={srcDoc}
        style={{ width: "100%", height: "50vh" }}
      ></iframe>
    </div>
  );
}

export default App;
