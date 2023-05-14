import React from "react";
import "./index.css";
import Box from "./components/Box/Box";

import {
  RedBox,
  WhiteBox,
  WidgetContentBox,
} from "./components/Box/Box.styled";
import ModalReminder from "./components/ModalReminder/ModalReminder";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <ModalReminder />
    </div>
  );
}

export default App;
