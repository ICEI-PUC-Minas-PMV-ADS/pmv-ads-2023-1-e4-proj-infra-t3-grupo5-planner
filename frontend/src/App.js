import React from "react";
import Header from "./components/Header/Header";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageAjuda from "./components/PageAjuda/PageAjuda";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Header />
        </header>

        <Routes>
          <Route path="/ajuda" element={<PageAjuda />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
