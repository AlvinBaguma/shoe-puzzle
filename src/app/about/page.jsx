import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "About Shoe Puzzle | Premium Footwear & Accessories Brand",
  description: "Learn about Shoe Puzzle's story, mission, and vision. Kampala's premier destination for stylish, high-quality footwear and accessories.",
  keywords: ["shoe puzzle about", "kampala footwear brand", "shoe puzzle story", "fashion brand uganda"],
  openGraph: {
    title: "About Shoe Puzzle | Premium Footwear & Accessories Brand",
    description: "Learn about Shoe Puzzle's story, mission, and vision.",
    type: "website",
  }
};

export default function About() {
  return (
    <>
      <Header />
      <main className="px-6 py-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-light tracking-wider mb-16 text-center">About</h1>

        <section className="mb-16">
          <h3 className="text-xl font-light mb-6">Brand Story</h3>
          <p className="text-neutral-700 leading-relaxed">
            Shoe Puzzle was founded on the belief that the right pair of shoes can transform confidence, style, and self-expression.

            Based in Kampala, Uganda, we curate quality footwear and accessories - from elegant women's heels and premium handbags to stylish top-quality men's sneakers ergo dedicating our focus on helping our customers express their individuality through fashion. More than a store, Shoe Puzzle is a brand focused on bringing quality, elegance, and modern style to every step.
          </p>
        </section>

        <section className="mb-16">
          <h3 className="text-xl font-light mb-6">Mission</h3>
          <p className="text-neutral-700 leading-relaxed">To provide stylish, high-quality footwear and accessories that empower our customers to express confidence, individuality, and elegance through every step they take.</p>
        </section>

        <section>
          <h3 className="text-xl font-light mb-6">Vision</h3>
          <p className="text-neutral-700 leading-relaxed">To become East Africa's leading fashion footwear and accessories brand, recognized for exceptional quality, outstanding customer experiences, and a commitment to redefining everyday style across Africa.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}