export default function MapSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 my-24">
      <div className="overflow-hidden rounded-3xl bg-brown shadow-2xl border border-honey/20">
        <div className="grid lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <span className="text-honey font-bree text-sm uppercase tracking-[0.2em] font-semibold">
              Kontakt
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-bree text-cream">
              Posetite nas
            </h2>

            <p className="mt-6 text-cream/80 font-bree leading-relaxed">
              Nalazimo se u Gornjoj Trešnjici gde sa posebnom pažnjom
              proizvodimo prirodan med vrhunskog kvaliteta. Rado ćemo
              odgovoriti na sva vaša pitanja i pomoći vam pri izboru
              proizvoda.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <h3 className="text-honey font-bree font-semibold">
                  📍 Adresa
                </h3>

                <p className="mt-1 text-cream">
                  Užički put 581, 15324 Ljubovija, R. Srbija
                </p>
              </div>

              <div>
                <h3 className="text-honey font-bree font-semibold">
                  📞 Telefon
                </h3>

                <p className="mt-1 text-cream">
                  +381 61 600 93 48
                </p>
              </div>

              <div>
                <h3 className="text-honey font-bree font-semibold">
                  ✉️ Email
                </h3>

                <p className="mt-1 text-cream">
                  medlemst@gmail.com
                </p>
              </div>

            </div>

            <a
              href="https://www.google.com/maps?q=44.1200345,19.48342"
              target="_blank"
              rel="noreferrer"
              className="mt-10 w-fit rounded-xl bg-honey px-6 py-3 text-brown font-bree font-semibold transition-all duration-300 hover:scale-105"
            >
              Otvori u Google Mapama
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="min-h-[500px]">
            <iframe
              title="location-map"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?ll=44.1200345,19.48342&z=18&t=m&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}