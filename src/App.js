import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Services from "./pages/services";
import AboutUs from "./pages/about-us";
import Header from "./components/header";
import Footer from "./components/footer";
import ContactUs from "./pages/contact-us";
import Booking from "./pages/booking";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/light-hazzles-farm-website" element={<Home />} />
          <Route path="/light-hazzles-farm-website/about-us" element={<AboutUs />} />
          <Route path="/light-hazzles-farm-website/services" element={<Services />} />
          <Route path="/light-hazzles-farm-website/members" element={<Booking/>} />
          <Route path="/light-hazzles-farm-website/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
