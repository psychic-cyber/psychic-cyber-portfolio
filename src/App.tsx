import { About } from './components/About';
import { BackToTop } from './components/BackToTop';
import { Contact } from './components/Contact';
import { CursorGlow } from './components/CursorGlow';
import { Certifications } from './components/Certifications';
import { Education, Experience } from './components/Experience';
import { Expertise } from './components/Expertise';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-crimson px-4 py-2 text-sm font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
