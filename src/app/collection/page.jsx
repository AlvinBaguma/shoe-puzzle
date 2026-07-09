import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";


// import for men
import wik1Img from "../images/imgs-collection/menprods/wik1.jpeg";
// import for women
import har1Img from "../images/imgs-collection/womenprods/bagprods/har1.jpeg";
// import for care
import shinImg from "../images/imgs-collection/careprods/shin.jpg";

export const metadata = {
  title: "Collection | Shoe Puzzle",
  description: "Explore our curated collections of premium men's sneakers, women's heels, wedges, formal shoes, designer bags, and shoe care products.",
  keywords: ["shoe puzzle collection", "men's sneakers", "women's heels", "designer bags", "shoe care uganda"],
  openGraph: {
    title: "Collection | Shoe Puzzle",
    description: "Explore our curated collections of premium men's sneakers, women's heels, wedges, formal shoes, designer bags, and shoe care products.",
    type: "website",
  }
};

export default function Collection() {
  const categories = [
    {
      id: "men",
      title: "Men",
      description: "Elevate your step with premium sneakers, sandals, and formal footwear.",
      link: "/collection/men",
      image: null,
      bgColor: "bg-neutral-50"
    },
    {
      id: "women",
      title: "Women",
      description: "Discover elegant heels, wedges, formal footwear, and designer bags.",
      link: "/collection/women",
      image: har1Img,
      bgColor: "bg-neutral-50"
    },
    {
      id: "care-and-maintenance",
      title: "Care & Maintenance",
      description: "Premium cleaning and protection products to keep your shoes and bags pristine.",
      link: "/collection/care-and-maintenance",
      image: shinImg,
      bgColor: "bg-neutral-50"
    }
  ];

  return (
    <>
      <Header />
      <main className="px-6 py-16 max-w-6xl mx-auto min-h-[75vh]">
        <div className="text-center mb-16">
           <h1 className="text-4xl font-light tracking-widest mb-4">COLLECTION</h1>
          <p className="text-neutral-500 text-sm tracking-wider max-w-md mx-auto">
            Explore our curated selections of premium footwear, bags, and luxury care products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const hasImage = cat.image !== null;
            return (
              <Link
                key={cat.id}
                href={cat.link}
                className="group relative flex flex-col justify-between overflow-hidden border border-neutral-200 bg-white p-8 h-[400px] transition-all duration-500 hover:shadow-xl hover:border-black"
              >
                {/* Visual Background/Image container */}
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  {hasImage ? (
                    <img
                      src={cat.image.src}
                      alt={cat.title}
                      className="w-full h-full object-cover filter grayscale"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200" />
                  )}
                </div>

                <div className="relative z-10">
                  <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
                    Shoe Puzzle
                  </span>
                  <h3 className="text-3xl font-light tracking-wide mt-4 text-neutral-900 group-hover:translate-x-2 transition-transform duration-300">
                    {cat.title}
                  </h3>
                </div>

                <div className="relative z-10 mt-auto">
                  <p className="text-neutral-500 text-sm mb-6 leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase border-b border-neutral-300 pb-1 group-hover:border-black transition-colors duration-300">
                    Explore Now
                    <svg
                      className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}