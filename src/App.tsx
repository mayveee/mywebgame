import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Windmill from "./pages/Windmill";
import NavBar from "./components/NavBar";
import Clicker from "./pages/Clicker";
import "./App.css";

const App = (): React.JSX.Element => {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/windmill" element={<Windmill />} />
        <Route path="/clicker" element={<Clicker />} />
      </Routes>
    </Router>
  );
};

export default App;
