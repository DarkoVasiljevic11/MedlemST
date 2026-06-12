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

            
          </div>

          {/* RIGHT SIDE */}
          <div className="min-h-[500px]">
            <iframe
              title="location-map"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.2212891459394!2d19.48098455107031!3d44.120057577223626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759a574fc29f7e9%3A0x1db4a07b4d08c242!2z0JzQtdC00LvQtdC8!5e0!3m2!1ssr!2srs!4v1781262101941!5m2!1ssr!2srs" 
              />
          </div>
        </div>
      </div>
    </section>
  );
}