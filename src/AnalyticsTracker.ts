import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";

export  function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const consent =
      localStorage.getItem(
        "cookieConsent"
      );

    if (consent !== "accepted")
      return;

    ReactGA.send({
      hitType: "pageview",
      page:
        location.pathname,
    });
  }, [location]);

  return null;
}