import Editor from "@monaco-editor/react";
import React, { useState } from "react";


const CodeEditorWindow = ({ onChange, language, code, theme }) => {

  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="65vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// Write your code here"
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default CodeEditorWindow;