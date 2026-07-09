// Shoe Puzzle - Product Data List
// Easily add or remove items by editing the array below.
// Ensure each product follows this structure:
// {
//   id: "unique-string-id",
//   name: "Product Name",
//   price: "UGX Price or similar",
//   image: primaryImg, // Primary image (used as thumbnail & first display image)
//   images: [primaryImg, angle2Img, angle3Img], // Additional images for multiple angles (optional, fallbacks to [image] if empty)
//   category: "men" | "women" | "care",
//   subcategory: "Sneakers" | "Sandles" | "Formal" | "Heels" | "Wedges" | "Bags" | "Care",
//   sizes: [38, 39, 40, 41, 42, 43, 44, 45], // Array of sizes or a string like "38-42" (ONLY for footwear, omit/leave null for care or bags)
//   available: "In Stock" | "Out of Stock"
// }

// --- import for men ---
import wik1Img from "../app/images/imgs-collection/menprods/wik1.jpeg";
import wik2Img from "../app/images/imgs-collection/menprods/wik2.jpeg";


import erk1Img from "../app/images/imgs-collection/menprods/erk1.jpeg";
import erk2Img from "../app/images/imgs-collection/menprods/erk2.jpeg";
import erk3Img from "../app/images/imgs-collection/menprods/erk3.jpeg";


// --- import for women ---

import har1Img from "../app/images/imgs-collection/womenprods/bagprods/har1.jpeg";
import har2Img from "../app/images/imgs-collection/womenprods/bagprods/har2.jpeg";
import har3Img from "../app/images/imgs-collection/womenprods/bagprods/har3.jpeg";
import har4Img from "../app/images/imgs-collection/womenprods/bagprods/har4.jpeg";

import spl1Img from "../app/images/imgs-collection/womenprods/bagprods/spl1.jpeg";
import spl2Img from "../app/images/imgs-collection/womenprods/bagprods/spl2.jpeg";
import spl3Img from "../app/images/imgs-collection/womenprods/bagprods/spl3.jpeg";
import spl4Img from "../app/images/imgs-collection/womenprods/bagprods/spl4.jpeg";

import tot1Img from "../app/images/imgs-collection/womenprods/bagprods/tot1.jpeg";
import tot2Img from "../app/images/imgs-collection/womenprods/bagprods/tot2.jpeg";
import tot3Img from "../app/images/imgs-collection/womenprods/bagprods/tot3.jpeg";
import tot4Img from "../app/images/imgs-collection/womenprods/bagprods/tot4.jpeg";

import bagImg from "../app/images/imgs-collection/womenprods/bagprods/bag.jpg";
import brownaldoImg from "../app/images/imgs-collection/womenprods/bagprods/brownaldo.jpeg";
// --- import for care ---
import shinImg from "../app/images/imgs-collection/careprods/shin.jpg";


export const products = [
    // --- MEN ---
    {
        id: "men-sneakers-1",
        name: "Wickers Anatomik",
        price: "UGX 250,000",
        image: wik1Img,
        images: [wik1Img, wik2Img], // Demonstrates multiple angles
        category: "men",
        subcategory: "Sneakers",
        sizes: null,
        available: "In Stock"
    },
    {
        id: "men-sneakers-2",
        name: "Volis Erkek Siyah",
        price: "UGX 250,000",
        image: erk1Img,
        images: [erk2Img, erk3Img, erk2Img],
        category: "men",
        subcategory: "Sneakers",
        sizes: null,
        available: "In Stock"
    },
    {
        id: "men-sandles-1",
        name: "Leather Slide",
        price: "UGX 120,000",
        image: "[INSERT IMAGE PATH]",
        images: [],
        category: "men",
        subcategory: "Sandles",
        sizes: [40, 41, 42, 43, 44],
        available: "In Stock"
    },
    {
        id: "men-sandles-2",
        name: "Urban Explorer Strap",
        price: "UGX 140,000",
        image: "[INSERT IMAGE PATH]",
        images: [],
        category: "men",
        subcategory: "Sandles",
        sizes: [42, 43, 44, 45],
        available: "In Stock"
    },
    {
        id: "men-formal-1",
        name: "Classic Oxford",
        price: "UGX 280,000",
        image: "[INSERT IMAGE PATH]",
        images: [],
        category: "men",
        subcategory: "Formal",
        sizes: [40, 41, 42, 43, 44],
        available: "In Stock"
    },
    {
        id: "men-formal-2",
        name: "Chelsea Leather Boot",
        price: "UGX 320,000",
        image: "[INSERT IMAGE PATH]",
        images: [],
        category: "men",
        subcategory: "Formal",
        sizes: [41, 42, 43, 44, 45],
        available: "In Stock"
    },

    // --- WOMEN ---
    {
        id: "women-heels-1",
        name: "Stiletto Classic",
        price: "UGX 195,000",
        image: "[INSERT IMAGE PATH]",
        images: [],
        category: "women",
        subcategory: "Heels",
        sizes: [36, 37, 38, 39, 40],
        available: "In Stock"
    },
    {
        id: "women-wedges-1",
        name: "Espadrille Wedge",
        price: "UGX 165,000",
        image: "[INSERT IMAGE PATH]",
        images: [],
        category: "women",
        subcategory: "Wedges",
        sizes: [37, 38, 39, 40],
        available: "In Stock"
    },
    {
        id: "women-formal-1",
        name: "Patent Loafer",
        price: "UGX 150,000",
        image: "[INSERT IMAGE PATH]",
        images: [],
        category: "women",
        subcategory: "Formal",
        sizes: [36, 37, 38, 39, 40, 41],
        available: "In Stock"
    },
    {
        id: "women-bags-1",
        name: "Aldo Harmonie",
        price: "UGX 700,000",
        image: har1Img,
        images: [har2Img, har3Img, har4Img], // Demonstrates multiple angles
        category: "women",
        subcategory: "Bags",
        sizes: null,
        available: "In Stock"
    },
    {
        id: "women-bags-2",
        name: "Aldo Splish",
        price: "UGX 500,000",
        image: spl1Img,
        images: [spl2Img, spl3Img, spl4Img], // Demonstrates multiple angles
        category: "women",
        subcategory: "Bags",
        sizes: null,
        available: "In Stock"
    },

    {
        id: "women-bags-3",
        name: "Guess Tote",
        price: "UGX 380,000",
        image: tot4Img,
        images: [tot2Img, tot3Img, tot1Img], // Demonstrates multiple angles
        category: "women",
        subcategory: "Bags",
        sizes: null,
        available: "In Stock"
    },

    // --- CARE & MAINTENANCE ---
    {
        id: "care-1",
        name: "Shin Shoe Polish",
        price: "UGX 45,000",
        image: shinImg,
        images: [shinImg],
        category: "care",
        subcategory: "Care",
        sizes: null,
        available: "In Stock"
    },
    {
        id: "care-2",
        name: "Leather Conditioner Gel",
        price: "UGX 55,000",
        image: "[INSERT IMAGE PATH]",
        images: [],
        category: "care",
        subcategory: "Care",
        sizes: null,
        available: "In Stock"
    },
    {
        id: "care-3",
        name: "Waterproof Protector Spray",
        price: "UGX 60,000",
        image: "[INSERT IMAGE PATH]",
        images: [],
        category: "care",
        subcategory: "Care",
        sizes: null,
        available: "In Stock"
    }
];
