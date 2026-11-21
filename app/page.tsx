import {
  Navbar,
  Footer,
  Hero,
  ClientLogos,
  Services,
  Portfolio,
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
        <Portfolio />
        <Testimonials />
      </main>
      <Footer dark />
    </>
  );
}
