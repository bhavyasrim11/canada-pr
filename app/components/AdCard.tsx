interface AdCardProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  bgColor: string;
}

export default function AdCard({ title, subtitle, price, features, bgColor }: AdCardProps) {
  return (
    <div className={`p-8 rounded-3xl shadow-2xl text-white hover:scale-105 transition-all duration-500 ${bgColor}`}>
      <h3 className="text-2xl font-bold mb-2 font-times">{title}</h3>
      <p className="text-lg opacity-90 mb-4">{subtitle}</p>
      <div className="text-3xl font-bold mb-6">€{price}</div>
      <ul className="space-y-2 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-white text-black py-3 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
        Apply Now
      </button>
    </div>
  );
}
