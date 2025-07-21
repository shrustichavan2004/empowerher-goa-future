import { ArrowRight, Target, Users, TrendingUp, Award } from 'lucide-react';
import LiquidBackground from '@/components/LiquidBackground';
import MorphButton from '@/components/MorphButton';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <LiquidBackground />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">EmpowerHer Goa:</span>
              <span className="block bg-gradient-to-r from-empowerment-pink via-empowerment-gold to-empowerment-mint bg-clip-text text-transparent">
                Bridging the Gender Gap
              </span>
              <span className="block text-foreground">in Employment</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Empowering women in Goa through skills development, mentorship, and meaningful employment opportunities 
              aligned with SDG 5 (Gender Equality) and SDG 8 (Decent Work and Economic Growth).
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/jobs-skills">
                <MorphButton size="lg" className="min-w-48">
                  Explore Opportunities
                  <ArrowRight className="ml-2 h-5 w-5" />
                </MorphButton>
              </Link>
              
              <Link to="/about">
                <MorphButton variant="outline" size="lg" className="min-w-48">
                  Learn More
                </MorphButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Addressing the Gender Employment Gap in Goa
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Despite having one of India's highest literacy rates, Goa faces a significant challenge: 
              highly educated women remain underrepresented in the workforce. We're here to change that.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "88%+ Female Literacy",
                description: "High education levels",
                color: "from-empowerment-pink to-empowerment-gold"
              },
              {
                icon: TrendingUp,
                title: "<25% Workforce",
                description: "Low participation rate",
                color: "from-empowerment-mint to-empowerment-lavender"
              },
              {
                icon: Users,
                title: "500+ Women",
                description: "Already empowered",
                color: "from-empowerment-gold to-empowerment-peach"
              },
              {
                icon: Award,
                title: "SDG Aligned",
                description: "UN Goals 5 & 8",
                color: "from-empowerment-lavender to-empowerment-pink"
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-8 text-center shadow-card-soft hover:shadow-morph transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{stat.title}</h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Start Your Empowerment Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose your path towards economic independence and professional growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Find Jobs & Skills",
                description: "Discover employment opportunities and skill development programs",
                action: "Explore Jobs",
                link: "/jobs-skills",
                gradient: "from-empowerment-pink to-empowerment-gold"
              },
              {
                title: "Get Mentorship",
                description: "Connect with mentors who guide your professional journey",
                action: "Find Mentors",
                link: "/mentorship",
                gradient: "from-empowerment-mint to-empowerment-lavender"
              },
              {
                title: "Read Success Stories",
                description: "Be inspired by women who've transformed their careers",
                action: "Read Stories",
                link: "/success-stories",
                gradient: "from-empowerment-gold to-empowerment-peach"
              }
            ].map((action, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card-soft hover:shadow-morph transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`h-2 w-full rounded-full bg-gradient-to-r ${action.gradient} mb-6`} />
                <h3 className="text-xl font-bold text-foreground mb-4">{action.title}</h3>
                <p className="text-muted-foreground mb-6">{action.description}</p>
                <Link to={action.link}>
                  <MorphButton variant="secondary" size="sm" className="w-full">
                    {action.action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </MorphButton>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;