import "./globals.css";

export const metadata = {
  title: "Shoe Puzzle",
  description: "Premium footwear and accessories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}