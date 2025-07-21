import { useState } from 'react';
import { Users, Target, TrendingUp, MessageCircle, Award, BookOpen } from 'lucide-react';
import MorphButton from '@/components/MorphButton';

const MentorshipProgram = () => {
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);

  const mentors = [
    {
      name: "Dr. Priya Sharma",
      education: "MBA, HR Management",
      experience: "15 years in Corporate HR",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Meera Fernandes",
      education: "B.Tech, Computer Science",
      experience: "12 years in Tech Industry",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sunita Naik",
      education: "CA, Finance",
      experience: "18 years in Banking",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Kavita Dessai",
      education: "MSc, Digital Marketing",
      experience: "10 years in Marketing",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const mentees = [
    {
      name: "Asha Gaonkar",
      course: "Digital Marketing",
      background: "28, Mother of 2, Homemaker",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Reshma Salgaokar",
      course: "Data Entry & Excel",
      background: "35, Widow, Former Teacher",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Pooja Mandrekar",
      course: "Tailoring & Fashion",
      background: "24, Recent Graduate, Single",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Shanti Velip",
      course: "Entrepreneurship",
      background: "42, Mother of 3, Rural Background",
      image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const outcomeData = [
    { label: "Career Goals Achieved", value: 75, color: "bg-empowerment-gold" },
    { label: "In Progress", value: 25, color: "bg-empowerment-mint" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
            <span className="bg-gradient-to-r from-empowerment-pink to-empowerment-gold bg-clip-text text-transparent">Mentorship</span> Program
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
            Our mentorship program connects experienced professionals with women seeking career guidance, 
            skill development, and emotional support. We believe that every woman deserves a mentor who 
            understands her journey and can help her navigate the path to professional success in Goa's 
            evolving job market.
          </p>
        </div>
      </section>

      {/* Our Mentors */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mentors</h2>
            <p className="text-lg text-muted-foreground">Experienced professionals ready to guide your journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-card-soft hover:shadow-morph transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{mentor.name}</h3>
                <p className="text-empowerment-gold text-sm font-semibold mb-2">{mentor.education}</p>
                <p className="text-muted-foreground text-sm mb-4">{mentor.experience}</p>
                <MorphButton size="sm" className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact
                </MorphButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Mentee */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Become a Mentee</h2>
            <p className="text-lg text-muted-foreground">Join our community of ambitious women</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentees.map((mentee, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-card-soft hover:shadow-morph transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={mentee.image} 
                    alt={mentee.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{mentee.name}</h3>
                <p className="text-empowerment-pink text-sm font-semibold mb-2">{mentee.course}</p>
                <p className="text-muted-foreground text-sm">{mentee.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-card-soft">
            <Users className="w-16 h-16 mx-auto mb-6 text-empowerment-gold" />
            <h2 className="text-3xl font-bold text-foreground mb-6">Volunteer as a Mentor</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Share your experience and make a meaningful impact in another woman's career journey. 
              As a mentor, you'll provide guidance, share industry insights, and help build confidence 
              in women who are ready to take the next step in their professional lives.
            </p>
            <MorphButton size="lg">
              <Award className="w-5 h-5 mr-2" />
              Become a Mentor
            </MorphButton>
          </div>
        </div>
      </section>

      {/* Mentees Outcome Graph */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Mentees' Outcome</h2>
            <p className="text-lg text-muted-foreground">Track our success in empowering women</p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card-soft">
            <div className="space-y-6">
              {outcomeData.map((item, index) => (
                <div 
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredBar(item.label)}
                  onMouseLeave={() => setHoveredBar(null)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-foreground font-semibold">{item.label}</span>
                    <span className="text-empowerment-gold font-bold">{item.value}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-6 relative overflow-hidden">
                    <div 
                      className={`${item.color} h-full rounded-full transition-all duration-500 hover:shadow-morph`}
                      style={{ width: `${item.value}%` }}
                    />
                    {hoveredBar === item.label && (
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-3 py-1 rounded-lg text-sm font-medium shadow-lg z-10">
                        {item.value}% of mentees have {item.label.toLowerCase()}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorshipProgram;