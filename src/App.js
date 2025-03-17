import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Play from "./pages/Play";
import NavBar from "./components/NavBar";
import Clicker from "./pages/Clicker";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar></NavBar>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/clicker" element={<Clicker />} />
        </Routes>
      </main>
      
    </Router>
  );
}

export default App;
