import { NavLink } from "react-router-dom";
import bagrem from "../../assets/prozivodimed/bagrem.jpg";
import livadski from "../../assets/prozivodimed/livadskim.jpg";
import malina from "../../assets/prozivodimed/malina.jpg";
const featuredProducts = [
  {
    id: 1,
    name: "Bagremov Med",
    image: bagrem,
    price: "600 RSD",
    description: "Blag i nežan ukus prirodnog bagremovog meda.",
  },
  {
    id: 2,
    name: "Livadski Med",
    image: livadski,
    price: "500 RSD",
    description: "Bogat aromama različitog livadskog bilja.",
  },
  {
    id: 3,
    name: "Med i malina",
    image: malina,
    price: "450 RSD",
    description: "Intenzivan ukus maline.",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-honey uppercase tracking-[0.2em] text-sm font-semibold">
            Naši proizvodi
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bree text-brown">
            Najpopularniji proizvodi
          </h2>

          <p className="mt-5 text-brown/70">
            Izdvojili smo neke od najtraženijih proizvoda iz naše
            ponude prirodnog meda.
          </p>
        </div>

        {/* Products */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="font-bree text-2xl text-brown">
                  {product.name}
                </h3>

                <p className="mt-3 text-brown/70">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="font-semibold text-honey text-lg">
                    {product.price}
                  </span>

                 
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <NavLink
            to="/order"
            className="inline-flex items-center gap-2 rounded-xl bg-honey px-8 py-4 font-semibold text-brown transition hover:scale-105"
          >
            Pogledaj sve proizvode →
          </NavLink>
        </div>
      </div>
    </section>
  );
}