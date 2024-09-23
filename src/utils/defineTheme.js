import { loader } from "@monaco-editor/react";
import { monacoThemes } from "../data/themes";


const defineTheme = (theme) => {
  return new Promise((res) => {
    Promise.all([
      loader.init(),
      import(`monaco-themes/themes/${monacoThemes[theme]}.json`),
    ]).then(([monaco, themeData]) => {
      monaco.editor.defineTheme(theme, themeData);
      res();
    }).catch((error) => {
      console.error('Failed to load theme:', error);
      res();
    });
  });
};

export { defineTheme };