import Nav from "./Nav";
export default function DostavaPlacanje() {
  return (
    <>
    <Nav />
    <main className="max-w-4xl mx-auto px-6 py-24 font-bree text-brown mb-50">
      <h1 className="text-4xl font-bold mb-8">
        Dostava i plaćanje
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Dostava
          </h2>

          <p className="mb-3">
            Porudžbine se obrađuju u najkraćem mogućem roku nakon potvrde
            narudžbine.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Dostava se vrši na teritoriji Republike Srbije.</li>
            <li>Rok isporuke je obično od 1 do 5 radnih dana.</li>
            <li>
              Vreme isporuke može varirati tokom praznika i perioda povećanog
              obima porudžbina.
            </li>
            <li>
              Kupac je dužan da prilikom prijema proveri stanje pošiljke.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Troškovi dostave
          </h2>

          <p>
            Cena dostave zavisi od težine pošiljke i kurirske službe koja vrši
            isporuku. Konačan iznos dostave biće prikazan pre potvrde
            porudžbine.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Načini plaćanja
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Plaćanje pouzećem prilikom preuzimanja pošiljke.</li>
            <li>Uplata na tekući račun.</li>
            <li>Online plaćanje karticama (ukoliko je dostupno).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Reklamacije i oštećenja
          </h2>

          <p>
            Ukoliko primetite oštećenje pošiljke prilikom preuzimanja,
            preporučujemo da odmah obavestite kurirsku službu i kontaktirate
            nas kako bismo što pre rešili problem.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Kontakt
          </h2>

          <p>
            Za sva pitanja u vezi dostave ili plaćanja možete nas kontaktirati
            putem telefona ili email adrese navedenih na sajtu.
          </p>
        </section>
      </div>
    </main>
    </>
  );
}