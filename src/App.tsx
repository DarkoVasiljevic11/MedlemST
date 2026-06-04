import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Shop from "./pages/Order/Order";
import Checkout from "./pages/Order/Checkout";
import Experiences from "./pages/Experiences/Experiences";
import CookieBanner from "./components/CookieBanner";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookiePolicy from "./components/CookiePolicy";
import DostavaPlacanje from "./components/Delivery";
import AdminLogin from "./pages/Experiences/AdminLogin";
import AdminReviews from "./pages/Experiences/AdminReviews";
function App(){
  return(
  <>
  
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exp" element={<Experiences />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/order" element={<Shop />} />
        <Route path="/order/:category" element={<Shop />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/dostava-i-placanje" element={<DostavaPlacanje />} />
        <Route
  path="/admin/login"
  element={<AdminLogin />}
/>

<Route
  path="/admin/reviews"
  element={<AdminReviews />}
/>
      </Routes>
      < Footer />
      <CookieBanner />
    </>
   
  )
}
export default App