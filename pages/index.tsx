import React, { useRef } from "react";
import Editor, { Monaco } from "@monaco-editor/react";
import NavBar from "../components/NavBar";

const App = () => {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor: any, monaco: Monaco) {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    console.log("hhh", editor, monaco);
    editorRef.current = editor;
  }

  return (
    <>
    <NavBar></NavBar>
    <div>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// Enter playWright test scripts!"
        onMount={handleEditorDidMount}
        />
    </div>
    </>
  );
};

export default App;
