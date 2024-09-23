import Editor from "@monaco-editor/react";
import React, { useState } from "react";


const CodeEditorWindow = ({ onChange, language, code, theme }) => {

  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full p-3">
      <Editor
        height="65vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme || 'vs-dark'}
        defaultValue="// Write your code here"
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default CodeEditorWindow;