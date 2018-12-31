import * as React from "react";
import "./App.css";
import { ImageEditor } from "./components/ImageEditor";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ImageEditor />
      </div>
    );
  }
}

export default App;
