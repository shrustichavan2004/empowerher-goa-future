const LiquidBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main liquid blob */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-liquid opacity-30 animate-liquid-motion blur-sm" />
      
      {/* Secondary blobs */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-gradient-to-br from-empowerment-mint to-empowerment-lavender opacity-25 animate-liquid-motion blur-sm" 
           style={{ animationDelay: '2s', animationDuration: '12s' }} />
      
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-tr from-empowerment-peach to-empowerment-gold opacity-20 animate-liquid-motion blur-sm" 
           style={{ animationDelay: '4s', animationDuration: '10s' }} />
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-empowerment-gold opacity-60 rounded-full animate-float" />
      <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-empowerment-pink opacity-50 rounded-full animate-float" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/2 w-5 h-5 bg-empowerment-mint opacity-40 rounded-full animate-float" 
           style={{ animationDelay: '3s' }} />
    </div>
  );
};

export default LiquidBackground;