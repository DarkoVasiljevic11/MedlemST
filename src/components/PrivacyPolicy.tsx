import Nav from "./Nav";
export default function PrivacyPolicy() {
  return (
    <>
    <Nav />
    <main className="max-w-4xl mx-auto px-6 py-24 text-brown font-bree mb-50">
      <h1 className="text-4xl font-bold mb-8">
        Politika privatnosti
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Prikupljanje podataka
          </h2>

          <p>
            Prikupljamo samo podatke koji su neophodni za obradu porudžbina,
            komunikaciju sa kupcima i poboljšanje korisničkog iskustva.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Upotreba podataka
          </h2>

          <p>
            Vaši podaci se koriste isključivo za obradu porudžbina,
            dostavu proizvoda i komunikaciju vezanu za kupovinu.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Zaštita podataka
          </h2>

          <p>
            Posvećeni smo zaštiti vaših ličnih podataka i primenjujemo
            odgovarajuće tehničke i organizacione mere bezbednosti.
          </p>
        </section>
      </div>
    </main>
    </>
  );
}