import ReactGA from "react-ga4";

let initialized = false;

export function initializeAnalytics() {
  if (initialized) return;

  ReactGA.initialize(
    import.meta.env.VITE_GA_ID
  );

  initialized = true;
}