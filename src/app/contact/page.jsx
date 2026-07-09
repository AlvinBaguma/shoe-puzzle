import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Contact Shoe Puzzle | WhatsApp, Instagram & Location",
  description: "Get in touch with Shoe Puzzle. Contact us via WhatsApp, visit our Instagram, or find us at Quality Shopping Village, Lubowa, Kampala.",
  keywords: ["shoe puzzle contact", "shoe puzzle whatsapp", "shoe puzzle instagram", "shoe puzzle location", "quality shopping village"],
  openGraph: {
    title: "Contact Shoe Puzzle | WhatsApp, Instagram & Location",
    description: "Get in touch with Shoe Puzzle via WhatsApp, Instagram, or visit our store.",
    type: "website",
  }
};

export default function Contact() {
  return (
    <>
      <Header />
      <main className="px-6 py-16 max-w-2xl mx-auto">
        <h1 className="text-3xl font-light tracking-wider mb-16 text-center">Contact</h1>

        <div className="space-y-12">
          <div className="text-center">
            <a
              href="https://wa.me/+256752632496"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors text-sm tracking-wider mb-4"
            >
              Contact via WhatsApp
            </a>
            <p className="text-neutral-600 text-sm">+256 752 632496</p>
          </div>

          <div className="text-center">
            <a
              href="https://www.instagram.com/shoe_puzzle?igsh=M2c3b2dzYmJtem4="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors text-sm tracking-wider mb-4"
            >
              Visit our Instagram
            </a>
            <p className="text-neutral-600 text-sm">@shoe_puzzle</p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-light mb-2">Location</h3>
            <p className="text-neutral-700">
              Kampala . Lubowa . Quality Shopping Village<br />

            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-light mb-2">Email</h3>
            <p className="text-neutral-600">shoepuzzle.kla@gmail.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}