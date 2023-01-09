
import Home from "./Home";
import Login from "./Login";
import Logged from "./Logged"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logged" element={ <Logged/> } />
      </Routes>
    </Router>
  );
}

export default App;
