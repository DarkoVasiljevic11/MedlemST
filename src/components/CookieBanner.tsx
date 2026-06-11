import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { initializeAnalytics } from "../analytics";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    
     initializeAnalytics();
     setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
    
    <div className="fixed bottom-1 left-4 right-4 z-50 mx-auto max-w-3xl rounded-2xl bg-cream border border-honey font-bree shadow-xl p-5 mb-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-semibold text-brown mb-1">
            Koristimo kolačiće
          </h3>

          <p className="text-sm text-brown/80">
            Koristimo kolačiće kako bismo poboljšali vaše iskustvo korišćenja
            sajta. Više informacija možete pronaći u našoj{" "}
            <Link
              to="/cookie-policy"
              className="underline font-medium"
            >
              Politici kolačića
            </Link>
            .
          </p> 
          <p className="text-sm text-brown/80">Kolačići neophodni za funkcionisanje sajta su uvek uključeni</p>
        </div>

        <div className="flex gap-2 shrink-0">
          <button
            onClick={declineCookies}
            className="px-4 py-2 rounded-lg border border-brown text-brown hover:bg-brown hover:text-cream transition cursor-pointer"
          >
            Odbij
          </button>

          <button
            onClick={acceptCookies}
            className="px-4 py-2 rounded-lg bg-honey text-brown hover:opacity-90 transition cursor-pointer"
          >
            Prihvati
          </button>
        </div>
      </div>
    </div>
    </>
  );
}