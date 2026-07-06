import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="px-6 py-16 max-w-2xl mx-auto">
        <h2 className="text-3xl font-light tracking-wider mb-16 text-center">Contact</h2>
        
        <div className="space-y-12">
          <div className="text-center">
            <a
              href="https://wa.me/[INSERT_PHONE_NUMBER]"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors text-sm tracking-wider mb-4"
            >
              Contact via WhatsApp
            </a>
            <p className="text-neutral-600 text-sm">[INSERT PHONE NUMBER]</p>
          </div>

          <div className="text-center">
            <a
              href="https://www.instagram.com/shoe_puzzle?igsh=M2c3b2dzYmJtem4="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors text-sm tracking-wider mb-4"
            >
              Visit Instagram
            </a>
            <p className="text-neutral-600 text-sm">@shoe_puzzle</p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-light mb-2">Location</h3>
            <p className="text-neutral-700">
              [INSERT LOCATION]<br />
              Kampala / Lubowa / Quality Shopping Village
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-light mb-2">Email</h3>
            <p className="text-neutral-600">[INSERT EMAIL ADDRESS]</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}