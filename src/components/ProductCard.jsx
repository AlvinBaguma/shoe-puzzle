export default function ProductCard({ image, name, price, available, sizes, category, onClick }) {
  const isFootwear = category !== 'care';
  const hasValidImage = image && image !== "[INSERT IMAGE PATH]";
  const imgSrc = hasValidImage ? (typeof image === 'object' ? image.src : image) : null;

  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer select-none focus:outline-none"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick && onClick();
        }
      }}
    >
      <div className="aspect-square bg-neutral-100 mb-4 overflow-hidden relative flex items-center justify-center border border-neutral-100 transition-shadow duration-300 group-hover:shadow-md">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="text-neutral-400 font-light text-sm tracking-wider uppercase">
            {name || "Shoe Puzzle"}
          </div>
        )}
      </div>
      <h3 className="text-lg font-light mb-1 group-hover:text-neutral-600 transition-colors">{name}</h3>
      {isFootwear && sizes && (
        <p className="text-xs text-neutral-500 mb-1">
          Sizes: {Array.isArray(sizes) ? sizes.join(', ') : sizes}
        </p>
      )}
      {price && <p className="text-neutral-600 text-sm mb-1">{price}</p>}
      {available && <span className="text-xs text-neutral-400">{available}</span>}
    </div>
  );
}