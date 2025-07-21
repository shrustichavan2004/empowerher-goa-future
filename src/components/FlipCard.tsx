import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
}

const FlipCard = ({ frontContent, backContent, className }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={cn(
        "relative w-full h-64 cursor-pointer perspective-1000",
        className
      )}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={cn(
          "relative w-full h-full transition-transform duration-700 preserve-3d",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-card border border-border shadow-card-soft p-6 flex flex-col justify-center items-center text-center">
          {frontContent}
        </div>
        
        {/* Back */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-empowerment-pink to-empowerment-lavender border border-border shadow-card-soft p-6 flex flex-col justify-center items-center text-center">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;