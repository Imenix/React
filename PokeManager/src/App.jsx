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
        <header className="header">
          <h1>Pokemon Manager</h1>
        </header>
        <NavBar />
        <main>
          <body className="body">
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Pokemon" element={<Pokemon />} />
              <Route path="/Team" element={<Team />} />
            </Routes>
          </body>
        </main>
        <footer />
      </div>
    </Router>
  );
}

export default App;
