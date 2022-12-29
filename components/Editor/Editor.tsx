import React, { useRef } from "react";
import Editor, { Monaco } from "@monaco-editor/react";

const EditorComponent = () =>{

    const editorRef:any = useRef(null);

    function handleEditorDidMount(editor: any, monaco: Monaco) {
      // here is the editor instance
      // you can store it in `useRef` for further usage
      console.log("hhh", editor, monaco);
      editorRef.current = editor;
    }

    function handleEditorChange(value:any, event:any) {
        // here is the current value
        console.log("here is the current model value:", value);
    }

    function showValue() {
        alert(editorRef.current.getValue());
      }

    return(
        <div>
            <button onClick={showValue}>Show value</button>
            <Editor
            height="80vh"
            width="60vw"
            defaultLanguage="typescript"
            defaultValue="// Enter playWright test scripts!"
            onMount={handleEditorDidMount}
            onChange={handleEditorChange}
            />
      </div>
    )

}
export default EditorComponent;