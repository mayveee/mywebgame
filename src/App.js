import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Play from "./pages/Play";

function App() {
  return (
    <Router>
      <nav style={{fontSize : '20px'}}>
        <Link to="/">홈</Link> | 
        <Link to="/play">소개</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </Router>
  );
}

export default App;
