import { wishlist } from '../data/wishlist';
import { Heart } from 'lucide-react';

export function ContentList() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <ul className="space-y-6">
        {wishlist.map((wish, index) => (
          <li
            key={index}
            className="fade-in glass-effect rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-4">
              <Heart 
                size={24} 
                className="text-primary flex-shrink-0 mt-1 opacity-50 group-hover:opacity-100 transition-opacity duration-300" 
                fill="currentColor"
              />
              <p className="font-dancing-script text-xl text-primary-dark leading-relaxed">
                {wish}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}