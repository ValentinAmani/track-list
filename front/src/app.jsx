import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home"
import Participant from "./pages/participant";
import "./styles/index.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/participants" element={<Participant />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
