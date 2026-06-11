import Hero from "../Home/Hero";
import MapSection from "./Map";
import Nav from "../../components/Nav";
import FeaturedProducts from "./Featured";
import { Helmet } from "react-helmet-async";
function Home() {
  return (
    <>
    <Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Medlem",
      url: "https://medlem.rs",
    })}
  </script>
</Helmet>
      <Nav transparent />
      <Hero />
      <FeaturedProducts />
      <MapSection />
    </>
  );
}

export default Home;