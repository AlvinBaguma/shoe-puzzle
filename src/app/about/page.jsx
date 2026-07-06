import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-light tracking-wider mb-16 text-center">About</h2>
        
        <section className="mb-16">
          <h3 className="text-xl font-light mb-6">Brand Story</h3>
          <p className="text-neutral-700 leading-relaxed">[INSERT BRAND STORY TEXT]</p>
        </section>

        <section className="mb-16">
          <h3 className="text-xl font-light mb-6">Mission</h3>
          <p className="text-neutral-700 leading-relaxed">[INSERT MISSION TEXT]</p>
        </section>

        <section>
          <h3 className="text-xl font-light mb-6">Vision</h3>
          <p className="text-neutral-700 leading-relaxed">[INSERT VISION TEXT]</p>
        </section>
      </main>
      <Footer />
    </>
  );
}