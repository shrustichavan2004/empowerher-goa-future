import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface MorphButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

const MorphButton = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md', 
  animate = true,
  ...props 
}: MorphButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-empowerment-pink to-empowerment-gold text-foreground hover:from-empowerment-gold hover:to-empowerment-pink';
      case 'secondary':
        return 'bg-empowerment-mint text-foreground hover:bg-empowerment-lavender';
      case 'accent':
        return 'bg-empowerment-gold text-foreground hover:bg-empowerment-peach';
      case 'outline':
        return 'border-2 border-empowerment-pink bg-transparent text-empowerment-pink hover:bg-empowerment-pink hover:text-foreground';
      default:
        return 'bg-gradient-to-r from-empowerment-pink to-empowerment-gold text-foreground';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <Button
      className={cn(
        'font-semibold rounded-2xl shadow-morph transition-all duration-500 transform',
        'hover:scale-105 hover:shadow-lg hover:-translate-y-1',
        animate && 'hover:animate-morph-button',
        getVariantClasses(),
        getSizeClasses(),
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MorphButton;