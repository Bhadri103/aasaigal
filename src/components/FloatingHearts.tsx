import { Heart } from 'lucide-react';

export function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="absolute floating-heart"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: 0.2
          }}
        >
          <Heart
            size={16 + Math.random() * 16}
            className="text-primary"
            fill="currentColor"
          />
        </div>
      ))}
    </div>
  );
}