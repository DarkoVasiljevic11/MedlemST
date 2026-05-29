import kamionet from "..//..//assets/panoramak.jpg";
import GallerySection from "./Gallery";

function About() {
  return (
    <>
        <section className="w-full bg-cream py-20 px-6 overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* LEFT TEXT */}
        <div className="w-full lg:w-1/2 space-y-6">
          
          <span className="uppercase tracking-[0.25em] text-sm text-brown font-semibold font-bree">
            Porodična tradicija
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-brown leading-tight font-bree">
            Prirodan med iz srca prirode
          </h2>

          <p className="text-lg text-brown leading-relaxed font-bree">
            Naša proizvodnja se temelji na dugogodišnjem iskustvu pčelarstva i
            ljubavi prema prirodi. Svaka kap meda dolazi iz čistih livada i
            šuma bez industrijskih uticaja.
          </p>

          <p className="text-lg text-brown leading-relaxed font-bree">
            Posvećeni smo kvalitetu, tradiciji i održivom načinu rada koji
            čuva prirodu za buduće generacije.
          </p>

          
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            
            <img
              src={kamionet}
              alt="Pčelarstvo"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* soft overlay for warmth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>

      </div>
    </section>
    <div className="w-full flex justify-center my-5">
  <div className="w-2 h-2 bg-honey rounded-full opacity-60" />
</div>
    <GallerySection />

    </>
  )
}
export default About;