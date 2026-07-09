import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export const metadata = {
  title: "Shoe Puzzle | Premium Footwear & Accessories in Kampala, Uganda",
  description: "Discover Shoe Puzzle, Kampala's leading e-commerce fashion brand for premium footwear and accessories. Browse our custom collection of designer heels, wedges, sneakers, and leather bags.",
  keywords: ["shoe puzzle", "kampala shoes", "footwear uganda", "heels", "wedges", "sneakers", "handbags", "shoe cleaning"],
  openGraph: {
    title: "Shoe Puzzle | Premium Footwear & Accessories",
    description: "Kampala's premier destination for high-quality shoes, sneakers, bags, and leather care.",
    type: "website",
  }
};

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Footer />
    </>
  );
}