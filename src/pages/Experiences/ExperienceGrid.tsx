import ExperienceCard from "./ExperienceCard";

const reviews = [
  {
    id: 1,
    name: "Milan J.",
    product: "Bagremov Med",
    rating: 5,
    date: "15.05.2026",
    text: "Odličan kvalitet i veoma brz rok isporuke.",
  },
  {
    id: 2,
    name: "Jelena P.",
    product: "Propolis",
    rating: 5,
    date: "12.05.2026",
    text: "Koristimo svakodnevno i prezadovoljni smo.",
  },
  {
    id: 3,
    name: "Marko S.",
    product: "Livadski Med",
    rating: 5,
    date: "09.05.2026",
    text: "Najprirodniji med koji sam probao.",
  },
];

export default function ExperienceGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
      "
    >
      {reviews.map((review) => (
        <ExperienceCard
          key={review.id}
          {...review}
        />
      ))}
    </div>
  );
}