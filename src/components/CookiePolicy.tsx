import Nav from "./Nav";
export default function CookiePolicy() {
  return (
    <>
    <Nav />
    <main className="max-w-4xl mx-auto px-6 py-24 text-brown font-bree mb-50">
      <h1 className="text-4xl font-bold mb-8">
        Politika kolačića
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Šta su kolačići?
          </h2>

          <p>
            Kolačići (cookies) su male tekstualne datoteke koje se čuvaju
            na vašem uređaju radi poboljšanja funkcionalnosti sajta.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Kako koristimo kolačiće?
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Čuvanje korisničkih podešavanja.</li>
            <li>Poboljšanje performansi sajta.</li>
            <li>Analiza poseta (ukoliko se koristi analitika).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Upravljanje kolačićima
          </h2>

          <p>
            Kolačiće možete obrisati ili blokirati kroz podešavanja svog
            internet pregledača.
          </p>
        </section>
      </div>
    </main>
    </>
  );
}