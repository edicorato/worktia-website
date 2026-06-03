import { BetaCta } from "./components/BetaCta";
import { Difference } from "./components/Difference";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Flow } from "./components/Flow";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { UseCases } from "./components/UseCases";
import { LocaleProvider } from "./i18n/useLocale";

export default function App() {
  return (
    <LocaleProvider>
      <div className="min-h-screen bg-paper text-anthracite">
        <Header />
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
        <Footer />
      </div>
    </LocaleProvider>
  );
}
