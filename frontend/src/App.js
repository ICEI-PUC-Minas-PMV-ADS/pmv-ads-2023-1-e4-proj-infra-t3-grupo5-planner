import Box from "./components/Box/Box";
import {
  WhiteBox,
  RedBox,
  WidgetBox,
  ModalWhiteBox,
  ModalRedBox,
  ModalBox,
} from "./components/Box/Box.styled";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box id="HeaderBox" />
      </header>
      <Box id="MoodsBox" />
      <Box id="WidgetContentBox" />

      <WidgetBox>
        <RedBox />
        <WhiteBox />
      </WidgetBox>

      <ModalBox>
        <ModalRedBox />
        <ModalWhiteBox />
      </ModalBox>
    </div>
  );
}

export default App;
