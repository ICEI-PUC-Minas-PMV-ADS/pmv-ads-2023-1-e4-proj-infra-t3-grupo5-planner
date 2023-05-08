import Box from "./components/Box/Box";
import Card from "./components/Card/Card.styled";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box id="box-header" />
        <Box id="box-widget-content" />
        <Box id="box-moods" />
        <Card id="card-modal">
          <div className="cima"></div>
          <div className="baixo"></div>
        </Card>
        <Card id="card-widget">
          <div className="cima"></div>
          <div className="baixo"></div>
        </Card>
      </header>
    </div>
  );
}

export default App;
