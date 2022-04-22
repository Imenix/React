import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Team from "./components/Team";
import Pokemon from "./components/Pokemon";
import NavBar from "./components/NavigationBar";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Pokemon Manager</h1>
        </header>
        <NavBar />
        <main>
          <Pokemon />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Pokemon" element={<Pokemon />} />
            <Route path="/Team" element={<Team />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
