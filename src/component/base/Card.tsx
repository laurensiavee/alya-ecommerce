export default function Card({ children, hasShadow = true }) {
  return (
    <div className={`bg-white rounded-xl w-full p-5 ${hasShadow ? 'shadow-xl shadow-l-primary/30' : ''}`}>
      {children}
    </div>
  );
}