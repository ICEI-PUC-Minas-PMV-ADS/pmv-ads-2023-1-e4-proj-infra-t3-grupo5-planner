import React from "react";
import "./index.css";
import Box from "./components/Box/Box";

import {
  RedBox,
  WhiteBox,
  WidgetContentBox,
} from "./components/Box/Box.styled";
import ContainerReminder from "./components/ContainerReminder/ContainerReminder";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <ContainerReminder />

      <Box
        id="WidgetBox"
        content={
          <>
            <RedBox></RedBox>
            <WhiteBox>
              <Box id="WidgetContentBox"></Box>
            </WhiteBox>
          </>
        }
      />
    </div>
  );
}

export default App;
