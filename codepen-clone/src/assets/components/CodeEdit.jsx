import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { githubDark } from "@uiw/codemirror-theme-github";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

import { CSS, HTML, JavaScript } from "../../App";

const CodeEdit = ({ setState }) => {
  return (
    <div className="bg-slate-600">
      <div className="mx-6  flex h-[50vh] gap-3 py-3">
        <EditCodeSection
          title={HTML}
          extensions={[html({})]}
          setState={setState}
        />
        <EditCodeSection
          title={CSS}
          extensions={[css({})]}
          setState={setState}
        />
        <EditCodeSection
          title={JavaScript}
          extensions={[javascript({})]}
          setState={setState}
        />
      </div>
    </div>
  );
};

const EditCodeSection = ({ title, extensions, setState }) => {
  const onChange = React.useCallback((value) => {
    setState((pre) => ({ ...pre, [title]: value }));
  }, []);
  return (
    <div className="flex-1 ">
      <Title title={title} />
      <CodeMirror
        theme={githubDark}
        value=""
        extensions={extensions}
        onChange={onChange}
        className="h-[85%] [&>*]:h-full"
      />
    </div>
  );
};

const Title = ({ title }) => {
  return (
    <div className="w-full bg-slate-900 p-2 text-white">
      <span className="text-2xl">{title}</span>
    </div>
  );
};

export default CodeEdit;
