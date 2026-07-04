export default function Footer() {
  return (
    <footer className="w-full px-6 py-12 mt-auto border-t border-neutral-200">
      <div className="text-center text-sm">
        <p className="mb-2">&copy; {new Date().getFullYear()} Shoe Puzzle. All rights reserved.</p>
        <p className="text-neutral-600">[INSERT EMAIL ADDRESS]</p>
      </div>
    </footer>
  );
}