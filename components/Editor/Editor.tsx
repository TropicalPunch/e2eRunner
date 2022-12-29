import React, { useRef } from "react";
import Editor, { Monaco } from "@monaco-editor/react";
import onCommitTestClick from "../ui-components/Button/onCommitTestClick"
import onRunTestClick from "../ui-components/Button/onRunTestClick";

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
        if (confirm("Commit file ?") == true) {
          // const date = new Date();
          const fileValue = {
            // fileName: date,
            fileName:"example", //for test purposes
            fileContent: editorRef.current.getValue()
          }
          console.log("here is the file value:"+ JSON.stringify(fileValue) );
          onCommitTestClick(fileValue)
        } else {
          //do something!
        }
      }

      async function runTest(){
        const fileValue = {
          // fileName: date,
          fileName:"example", //for test purposes
          fileContent: editorRef.current.getValue()
        }
        console.log("runTest value:"+ JSON.stringify(fileValue) );
        const res = await onRunTestClick(fileValue);
        console.log("test results:" +JSON.stringify(res))

      }

    return(
        <div>
            <button onClick={showValue}>Commit file</button>
            <button onClick={runTest}>Run Test</button>
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