"use client";

import React, { use, useState, useEffect } from "react";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ProductCard from "../../../components/ProductCard";
import { products } from "../../../data/products";

export default function CategoryPage({ params }) {
  // Unwrap Next.js 15 params promise
  const { category } = use(params);

  // Normalize category slugs
  const dbCategory = category === "care-and-maintenance" ? "care" : category;

  // Configuration for categories
  const config = {
    men: {
      title: "Men's Collection",
      subcategories: ["All", "Sneakers", "Sandles", "Formal"],
      description: "Carefully designed footwear blending modern style with casual and formal elegance."
    },
    women: {
      title: "Women's Collection",
      subcategories: ["All", "Heels", "Wedges", "Formal", "Bags"],
      description: "Sophisticated footwear and elegant accessories crafted for every occasion."
    },
    care: {
      title: "Care & Maintenance",
      subcategories: [], // No subcategories requested for care
      description: "Essential premium care kits, polishes, and protection to extend the life of your leather and suede."
    }
  };

  const currentConfig = config[dbCategory];

  // State for active subcategory filter
  const [activeFilter, setActiveFilter] = useState("All");

  // State for selected product (modal view)
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // State for current image in modal gallery
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // State for selected size in modal
  const [selectedSize, setSelectedSize] = useState(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);

  // Dynamically update document title based on category
  useEffect(() => {
    if (currentConfig) {
      document.title = `${currentConfig.title} | Shoe Puzzle`;
    }
  }, [dbCategory, currentConfig]);

  // Handle invalid categories gracefully
  if (!currentConfig) {
    return (
      <>
        <Header />
        <main className="px-6 py-24 text-center min-h-[70vh] flex flex-col justify-center items-center">
           <h1 className="text-2xl font-light mb-4">Collection Not Found</h1>
          <p className="text-neutral-500 mb-8">The requested collection does not exist.</p>
          <Link href="/collection" className="px-6 py-2.5 border border-black hover:bg-black hover:text-white transition-colors text-sm tracking-wider">
            Return to Collection
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  // Filter products by category and active subcategory filter
  const categoryProducts = products.filter(p => p.category === dbCategory);
  const filteredProducts = activeFilter === "All"
    ? categoryProducts
    : categoryProducts.filter(p => p.subcategory && p.subcategory.toLowerCase() === activeFilter.toLowerCase());

  // Handle product card click to open modal
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setActiveImgIndex(0);
    setSelectedSize(null);
  };

  // Compose and open WhatsApp checkout link
  const handleWhatsAppCheckout = (product) => {
    const isFootwear = product.category !== "care";
    
    // Size check for footwear
    if (isFootwear && product.sizes && product.sizes.length > 0 && !selectedSize) {
      alert("Please select a size before checking out.");
      return;
    }

    // Determine the product image array
    const productImages = product.images && product.images.length > 0
      ? product.images
      : (product.image && product.image !== "[INSERT IMAGE PATH]" ? [product.image] : []);

    const firstImgObj = productImages[0];
    const imgPath = firstImgObj ? (typeof firstImgObj === "object" ? firstImgObj.src : firstImgObj) : "";
    const absoluteImgUrl = imgPath && !imgPath.startsWith("[INSERT") ? `${window.location.origin}${imgPath}` : "";

    const nameText = `*Product:* ${product.name}`;
    const priceText = `*Price:* ${product.price}`;
    const sizeText = selectedSize ? `*Selected Size:* ${selectedSize}` : "";
    const imgLinkText = absoluteImgUrl ? `*Image:* ${absoluteImgUrl}` : "";

    const messageBody = [
      "Hello, i am interested in this product.",
      "",
      nameText,
      priceText,
      sizeText,
      imgLinkText
    ].filter(Boolean).join("\n");

    const waUrl = `https://wa.me/256752632496?text=${encodeURIComponent(messageBody)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Header />
      <main className="px-6 py-16 max-w-6xl mx-auto min-h-[75vh]">
        {/* Navigation Breadcrumb */}
        <div className="mb-12">
          <Link 
            href="/collection" 
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-black transition-colors group"
          >
            <svg 
              className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Collection
          </Link>
        </div>

         {/* Title & Description */}
         <div className="mb-12">
           <h1 className="text-3xl font-light tracking-widest mb-4 uppercase">
             {currentConfig.title}
           </h1>
          <p className="text-neutral-500 text-sm tracking-wider max-w-xl leading-relaxed">
            {currentConfig.description}
          </p>
        </div>

        {/* Subcategory Filters (only if configured) */}
        {currentConfig.subcategories.length > 0 && (
          <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-neutral-100 pb-6 mb-12">
            {currentConfig.subcategories.map((sub) => {
              const isActive = activeFilter.toLowerCase() === sub.toLowerCase();
              return (
                <button
                  key={sub}
                  onClick={() => setActiveFilter(sub)}
                  className={`text-xs font-semibold uppercase tracking-widest pb-2 transition-all relative ${
                    isActive ? "text-black" : "text-neutral-400 hover:text-neutral-600"
                  }`}
                >
                  {sub}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                image={product.image}
                name={product.name}
                price={product.price}
                available={product.available}
                sizes={product.sizes}
                category={product.category}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 border border-dashed border-neutral-200 rounded-lg">
            <p className="text-neutral-400 font-light text-sm tracking-wider">
              No items available in this category.
            </p>
          </div>
        )}
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (() => {
        // Resolve images array
        const productImages = selectedProduct.images && selectedProduct.images.length > 0
          ? selectedProduct.images
          : (selectedProduct.image && selectedProduct.image !== "[INSERT IMAGE PATH]" ? [selectedProduct.image] : []);

        const activeImg = productImages[activeImgIndex];
        const activeImgSrc = activeImg ? (typeof activeImg === "object" ? activeImg.src : activeImg) : null;
        const isFootwear = selectedProduct.category !== "care";

        return (
          <div 
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 md:p-6 overflow-y-auto"
            onClick={() => setSelectedProduct(null)}
          >
            <div 
              className="relative bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row transition-all duration-300 max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-neutral-100 border border-neutral-200 text-neutral-600 hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Left Side: Image Gallery */}
              <div className="w-full md:w-1/2 bg-neutral-50 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-100">
                <div className="aspect-square w-full max-w-[350px] mx-auto overflow-hidden relative flex items-center justify-center border border-neutral-100 rounded-xl bg-white shadow-sm">
                  {activeImgSrc ? (
                    <img 
                      src={activeImgSrc} 
                      alt={selectedProduct.name} 
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  ) : (
                    <div className="text-neutral-400 font-light text-sm tracking-wider uppercase select-none">
                      {selectedProduct.name || "Shoe Puzzle"}
                    </div>
                  )}
                </div>

                {/* Gallery Thumbnails */}
                {productImages.length > 1 && (
                  <div className="flex flex-wrap gap-2 justify-center mt-6">
                    {productImages.map((img, idx) => {
                      const imgObjSrc = typeof img === "object" ? img.src : img;
                      const isActive = idx === activeImgIndex;
                      return (
                        <button
                          key={idx}
                          onClick={() => setActiveImgIndex(idx)}
                          className={`w-14 h-14 rounded-lg overflow-hidden border bg-white flex items-center justify-center transition-all ${
                            isActive ? "border-black scale-105 ring-1 ring-black" : "border-neutral-200 hover:border-neutral-400"
                          }`}
                        >
                          {imgObjSrc && !imgObjSrc.startsWith("[INSERT") ? (
                            <img src={imgObjSrc} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-[10px] text-neutral-400 uppercase font-light">Angle {idx + 1}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right Side: Product Details */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  {/* Category Details */}
                  <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
                    {selectedProduct.subcategory || selectedProduct.category}
                  </span>

                  <h3 className="text-2xl font-light text-neutral-900 mt-2 mb-4">
                    {selectedProduct.name}
                  </h3>

                  <p className="text-xl font-medium text-neutral-800 mb-6">
                    {selectedProduct.price}
                  </p>

                  <div className="border-t border-neutral-100 pt-6 mb-6">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {selectedProduct.available || "In Stock"}
                    </span>
                  </div>

                  {/* Size Selector for Footwear */}
                  {isFootwear && selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-xs font-semibold tracking-widest text-neutral-600 uppercase mb-3">
                        Select Size
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.sizes.map((size) => {
                          const isSelected = selectedSize === size;
                          return (
                            <button
                              key={size}
                              onClick={() => setSelectedSize(size)}
                              className={`w-10 h-10 text-xs font-medium rounded-full border flex items-center justify-center transition-all ${
                                isSelected 
                                  ? "bg-black border-black text-white" 
                                  : "border-neutral-200 hover:border-neutral-400 text-neutral-700 bg-white"
                              }`}
                            >
                              {size}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Checkout via WhatsApp */}
                <button
                  onClick={() => handleWhatsAppCheckout(selectedProduct)}
                  className="w-full py-4 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold tracking-widest uppercase transition-colors flex items-center justify-center gap-3 shadow-lg hover:shadow-xl mt-6 md:mt-0"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.419 9.86-9.86.001-2.636-1.026-5.115-2.892-6.983-1.866-1.867-4.346-2.895-6.982-2.896-5.44 0-9.86 4.417-9.863 9.858-.001 1.702.449 3.366 1.305 4.828l-.997 3.646 3.744-.981zm11.387-5.464c-.307-.154-1.817-.897-2.099-.999-.282-.102-.487-.154-.691.154-.204.307-.791.999-.971 1.204-.18.204-.359.227-.666.073-.307-.154-1.298-.479-2.472-1.527-.913-.814-1.53-1.82-1.71-2.127-.18-.307-.019-.473.135-.626.138-.138.307-.359.461-.54.154-.18.205-.307.307-.513.102-.204.051-.384-.026-.538-.077-.154-.691-1.666-.947-2.28-.249-.598-.501-.517-.69-.517-.18 0-.384-.012-.587-.012-.204 0-.538.077-.82.384-.282.307-1.077 1.051-1.077 2.563 0 1.512 1.099 2.973 1.253 3.177.154.204 2.163 3.303 5.242 4.633.732.316 1.303.505 1.748.646.736.234 1.408.201 1.94.122.592-.088 1.817-.743 2.073-1.459.256-.717.256-1.332.18-1.459-.077-.128-.282-.204-.59-.358z" />
                  </svg>
                  Order via WhatsApp
                </button>
              </div>
            </div>
          </div>
        );
      })()}
      <Footer />
    </>
  );
}
