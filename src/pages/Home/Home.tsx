import Hero from "../Home/Hero";
import MapSection from "./Map";
import Nav from "../../components/Nav";
import FeaturedProducts from "./Featured";
function Home() {
  return (
    <>
      <Nav transparent />
      <Hero />
      <FeaturedProducts />
      <MapSection />
    </>
  );
}

export default Home;