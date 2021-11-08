import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
      <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/light-hazzles-farm-website" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
