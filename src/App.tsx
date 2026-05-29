import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Shop from "./pages/Order/Order";
import Checkout from "./pages/Order/Checkout";
import Experiences from "./pages/Experiences";
function App(){
  return(
  <>
  <Nav />
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exp" element={<Experiences />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/order" element={<Shop />} />
        <Route path="/order/:category" element={<Shop />} />
      </Routes>
      < Footer />
    </>
   
  )
}
export default App