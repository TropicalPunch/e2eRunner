import React, { useRef } from "react";
import Editor, { Monaco } from "@monaco-editor/react";
import onCommitTestClick from "../ui-components/Button/onCommitTestClick"

const EditorComponent = () =>{

    const editorRef:any = useRef(null);

    function handleEditorDidMount(editor: any, monaco: Monaco) {
      editorRef.current = editor;
    }

    // function handleEditorChange(value:any, event:any) {
    //     // here is the current value
    //     console.log("here is the current model value:", value);
    // //on html: onChange={handleEditorChange}
    // }

    function showValue() {
        alert("File saved!");
        const fileValue = {
          fileName: 'file1',
          fileContent: editorRef.current.getValue()

        }
        console.log("here is the file value:"+ JSON.stringify(fileValue) );
        onCommitTestClick(fileValue)

      }

    return(
        <div>
            <button onClick={showValue}>Commit file</button>
            <Editor
            height="80vh"
            width="60vw"
            defaultLanguage="typescript"
            defaultValue="// Enter playWright test scripts!"
            onMount={handleEditorDidMount}
            />
      </div>
    )

}
export default EditorComponent;