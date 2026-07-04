export default function ProfileCard({ image, name, title, bio }) {
  return (
    <div className="text-center max-w-sm">
      <div className="w-64 h-64 mx-auto mb-6 bg-neutral-100 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-light mb-1">{name}</h3>
      <p className="text-neutral-600 text-sm mb-4">{title}</p>
      <p className="text-sm text-neutral-700 max-w-xs mx-auto">{bio}</p>
    </div>
  );
}