import { useState } from "react";
import ExperienceHero from "./ExperienceHero";
import ExperienceGrid from "./ExperienceGrid";
import SubmitExperienceModal from "./SubmitExperienceModal";
import ExperienceFilter from "./ExperienceFilter";
import Nav from "../../components/Nav";
export default function Experiences() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <Nav />
    <main className="min-h-screen bg-cream">
      <ExperienceHero onOpen={() => setShowModal(true)} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <ExperienceFilter />

        <ExperienceGrid />
      </div>

      <SubmitExperienceModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </main>
    </>
  );
}