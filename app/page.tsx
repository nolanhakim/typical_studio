import {
  Navbar,
  Footer,
  Hero,
  ClientLogos,
  Services,
  CaseStackScroll,
  Testimonials,
} from '@/components';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 bg-[#111315]">
        <Hero />
        <ClientLogos />
        <Services />
        <section id="projects" className="relative isolate scroll-mt-20 bg-[#111315] text-white">
          <CaseStackScroll />
        </section>
        <Testimonials />
      </main>
      <Footer dark />
    </>
  );
}
