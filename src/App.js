import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home/Home";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
