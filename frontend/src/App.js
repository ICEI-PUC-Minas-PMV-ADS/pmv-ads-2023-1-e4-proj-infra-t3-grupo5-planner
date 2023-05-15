import React from "react";
import Header from "./components/Header/Header";
import "./index.css";
import PageProfileEdit from "./components/PageProfileEdit/PageProfileEdit";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <PageProfileEdit />
    </div>
  );
}

export default App;
