import { BetaCta } from "./components/BetaCta";
import { Difference } from "./components/Difference";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Flow } from "./components/Flow";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LegalPage } from "./components/LegalPage";
import { Problem } from "./components/Problem";
import { UseCases } from "./components/UseCases";
import { LocaleProvider } from "./i18n/useLocale";

function getLegalPage() {
  const page = window.location.pathname.split("/").filter(Boolean)[1];
  return page === "privacy" || page === "terms" ? page : undefined;
}

function LandingPage() {
  return (
    <main>
      <Hero />
      <Problem />
      <Flow />
      <Features />
      <UseCases />
      <Difference />
      <BetaCta />
      <FAQ />
    </main>
  );
}

function AppContent() {
  const legalPage = getLegalPage();

  return (
    <div className="min-h-screen bg-paper text-anthracite">
      <Header />
      {legalPage ? <LegalPage page={legalPage} /> : <LandingPage />}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LocaleProvider>
      <AppContent />
    </LocaleProvider>
  );
}
