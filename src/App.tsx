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
import ScrollToTop from "./components/ScrollToTop";
import AdminProtectedRoute from "./pages/Experiences/AdminProtectedRoute";
import { useEffect } from "react";
import {
  initializeAnalytics,
} from "./analytics";
import {AnalyticsTracker} from "./AnalyticsTracker";
function App(){
    useEffect(() => {
    const consent =
      localStorage.getItem(
        "cookieConsent"
      );

    if (consent === "accepted") {
      initializeAnalytics();
    }
  }, []);
  return(
  <>
  <AnalyticsTracker />
  <ScrollToTop />
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onama" element={<About />} />
        <Route path="/iskustva" element={<Experiences />} />
        <Route path="/poručeno" element={<Checkout/>} />
        <Route path="/poručite" element={<Shop />} />
        <Route path="/poručite/:category" element={<Shop />} />
        <Route path="/politika-privatnosti" element={<PrivacyPolicy />} />
        <Route path="/politika-kolačića" element={<CookiePolicy />} />
        <Route path="/dostava-i-placanje" element={<DostavaPlacanje />} />
        <Route
  path="/admin/login"
  element={<AdminLogin />}
/>
<Route path="/admin" element={<AdminLogin />} />

<Route element={<AdminProtectedRoute />}>
  <Route
    path="/admin/reviews"
    element={<AdminReviews />}
  />
</Route>

      </Routes>
      < Footer />
      <CookieBanner />
    </>
   
  )
}
export default App