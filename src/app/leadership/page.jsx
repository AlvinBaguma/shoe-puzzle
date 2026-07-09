import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileCard from "../../components/ProfileCard";

export const metadata = {
  title: "Leadership & Management | Shoe Puzzle",
  description: "Meet the leadership team behind Shoe Puzzle. Amanda Barungi, CEO & Founder, and Alvin Baguma, Manager Business Operations.",
  keywords: ["shoe puzzle leadership", "amanda barungi", "alvin baguma", "shoe puzzle management"],
  openGraph: {
    title: "Leadership & Management | Shoe Puzzle",
    description: "Meet the leadership team behind Shoe Puzzle.",
    type: "website",
  }
};

export default function Leadership() {
  return (
    <>
      <Header />
      <main className="px-6 py-16">
        <h1 className="text-3xl font-light tracking-wider mb-16 text-center">Leadership & Management</h1>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-16 md:gap-32">
          <ProfileCard
            image="[INSERT IMAGE PATH]"
            name="Amanda Barungi"
            title="CEO & Founder"
            bio="Amanda Barungi Nsalasatta the founder and driving force behind Shoe Puzzle, leading the brand’s vision, strategy, and growth. With a passion for fashion and customer experience, she oversees brand development, partnerships, and business direction while ensuring Shoe Puzzle continues to deliver quality footwear and accessories to its customers."
          />
          <ProfileCard
            image="[INSERT IMAGE PATH]"
            name="Alvin Baguma"
            title="Manager Business Operations"
            bio="Alvin Baguma manages the day-to-day business operations of Shoe Puzzle, supporting operational efficiency, digital growth, and strategic execution. With a background in Information Technology and a strong interest in e-commerce and business development, he focuses on strengthening the brand’s online presence, improving processes, and supporting the company’s expansion goals."
          />
        </div>
      </main>
      <Footer />
    </>
  );
}