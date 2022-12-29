import React, { useRef } from "react";
import NavBar from "../components/ui-components/NavBar/NavBar";
import EditorComponent from "../components/Editor/Editor";
import "../styles/globals.css";

const App = () => {


  return (
    <div>
    <NavBar></NavBar>
    <EditorComponent/>
    </div>
  );
};

export default App;
