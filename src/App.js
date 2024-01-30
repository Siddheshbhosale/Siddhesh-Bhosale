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
        {/* <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
