import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Link from "next/link";

export default function Collection() {
  const products = [
    { image: "[INSERT IMAGE PATH]", name: "[INSERT PRODUCT NAME]", price: "[INSERT PRICE]", available: "In Stock" },
    { image: "[INSERT IMAGE PATH]", name: "[INSERT PRODUCT NAME]", price: "[INSERT PRICE]", available: "In Stock" },
    { image: "[INSERT IMAGE PATH]", name: "[INSERT PRODUCT NAME]", price: "[INSERT PRICE]", available: "In Stock" },
    { image: "[INSERT IMAGE PATH]", name: "[INSERT PRODUCT NAME]", price: "[INSERT PRICE]", available: "In Stock" },
    { image: "[INSERT IMAGE PATH]", name: "[INSERT PRODUCT NAME]", price: "[INSERT PRICE]", available: "In Stock" },
    { image: "[INSERT IMAGE PATH]", name: "[INSERT PRODUCT NAME]", price: "[INSERT PRICE]", available: "In Stock" },
  ];

  return (
    <>
      <Header />
      <main className="px-6 py-16">
        <h2 className="text-3xl font-light tracking-wider text-center mb-16">Collection</h2>
        
        <div className="mb-16">
          <h3 className="text-xl font-light mb-8 text-center">Heels</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {products.slice(0, 3).map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-light mb-8 text-center">Sneakers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {products.slice(0, 3).map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-light mb-8 text-center">Bags</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {products.slice(0, 3).map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}