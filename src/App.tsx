import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ScrollProgress, BackToTop } from "./components/ScrollExtras";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Stats from "./sections/Stats";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import GithubStats from "./sections/GithubStats";
import TechStack from "./sections/TechStack";
import HowIThink from "./sections/HowIThink";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Stats />
            <Experience />
            <Projects />
            <GithubStats />
            <TechStack />
            <HowIThink />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
          <Toaster theme="dark" position="bottom-right" richColors />
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
