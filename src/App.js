import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home"; // Import your page components
import Sign_up from "./pages/signup"; // Import your page components



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Sign_up />} />
 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
