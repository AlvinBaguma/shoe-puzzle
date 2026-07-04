export default function ProductCard({ image, name, price, available }) {
  return (
    <div className="group">
      <div className="aspect-square bg-neutral-100 mb-4 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg font-light mb-1">{name}</h3>
      {price && <p className="text-neutral-600 text-sm mb-1">{price}</p>}
      {available && <span className="text-xs text-neutral-500">{available}</span>}
    </div>
  );
}