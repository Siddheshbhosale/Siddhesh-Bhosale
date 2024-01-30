import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar';
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
