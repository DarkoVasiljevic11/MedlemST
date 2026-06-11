import { useState } from "react";
import ExperienceHero from "./ExperienceHero";
import ExperienceGrid from "./ExperienceGrid";
import SubmitExperienceModal from "./SubmitExperienceModal";
import ExperienceFilter from "./ExperienceFilter";
import Nav from "../../components/Nav";
import { Helmet } from "react-helmet-async";
export default function Experiences() {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
const [category, setCategory] = useState("Sve");

  return (
    <>
     <Helmet>
  <title>Medlem - Iskustva kupaca</title>
   <meta
    name="description"
    content="Pročitajte iskustva i utiske naših zadovoljnih kupaca o kvalitetu Medlem meda."
  />

  <meta
    name="robots"
    content="index,follow"
  />

  <link
    rel="canonical"
    href="https://medlem.rs/exp"
  />

  <meta
    property="og:title"
    content="Medlem - Iskustva kupaca"
  />

  <meta
    property="og:description"
    content="Pogledajte šta naši kupci kažu o Medlem proizvodima."
  />

  <meta
    property="og:image"
    content="https://medlem.rs/og-reviews.webp"
  />
 </Helmet>
    <Nav />
    <main className="min-h-screen bg-cream">
      <ExperienceHero onOpen={() => setShowModal(true)} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <ExperienceFilter  onSearch={setSearch} onCategoryChange={setCategory} />
        <ExperienceGrid search={search} category={category} />
      </div>

      <SubmitExperienceModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </main>
    </>
  );
}