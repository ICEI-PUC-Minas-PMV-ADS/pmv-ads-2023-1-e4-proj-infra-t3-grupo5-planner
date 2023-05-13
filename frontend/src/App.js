import React from "react";
import Header from "./components/Header/Header";
import "./index.css";
import ContainerMood from "./components/ContainerMood/ContainerMood";
import ContainerNote from "./components/ContainerNote/ContainerNote";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <ContainerMood></ContainerMood>
        <ContainerNote />
      </header>
    </div>
  );
}

export default App;
