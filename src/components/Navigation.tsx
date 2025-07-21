import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MorphButton from './MorphButton';
import ContactModal from './ContactModal';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Jobs & Skills', path: '/jobs-skills' },
    { name: 'Mentorship Program', path: '/mentorship' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Resources', path: '/resources' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-empowerment-pink to-empowerment-gold rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-empowerment-pink to-empowerment-gold bg-clip-text text-transparent">
              EmpowerHer Goa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-empowerment-gold text-foreground shadow-morph'
                    : 'text-muted-foreground hover:text-foreground hover:bg-empowerment-pink/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <MorphButton 
              size="sm" 
              onClick={() => setIsContactOpen(true)}
            >
              Contact Us
            </MorphButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-empowerment-gold text-foreground shadow-morph'
                      : 'text-muted-foreground hover:text-foreground hover:bg-empowerment-pink/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <MorphButton 
                  size="sm" 
                  onClick={() => {
                    setIsContactOpen(true);
                    setIsOpen(false);
                  }}
                  className="w-full"
                >
                  Contact Us
                </MorphButton>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </nav>
  );
};

export default Navigation;