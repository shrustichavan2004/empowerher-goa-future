import { Users, Wifi, TrendingUp, Clock, Baby, Laptop, UserX } from 'lucide-react';
import FlipCard from '@/components/FlipCard';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
              About <span className="bg-gradient-to-r from-empowerment-pink to-empowerment-gold bg-clip-text text-transparent">EmpowerHer Goa</span>
            </h1>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                "She has degrees, skills, and ambition — but no job because she's too qualified for unpaid housework"? 
                Sadly, this joke hits too close to home in Goa.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-card rounded-2xl p-6 shadow-card-soft">
                  <div className="text-3xl font-bold text-empowerment-pink mb-2">88%+</div>
                  <div className="text-foreground font-semibold">Female Literacy Rate</div>
                  <div className="text-sm text-muted-foreground">One of India's highest</div>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-card-soft">
                  <div className="text-3xl font-bold text-empowerment-gold mb-2">&lt;25%</div>
                  <div className="text-foreground font-semibold">Workforce Participation</div>
                  <div className="text-sm text-muted-foreground">Despite high education</div>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-card-soft">
                  <div className="text-3xl font-bold text-empowerment-mint mb-2">100%</div>
                  <div className="text-foreground font-semibold">Our Commitment</div>
                  <div className="text-sm text-muted-foreground">To bridge this gap</div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower women in Goa through comprehensive skills development, meaningful employment opportunities, 
              and supportive mentorship programs that align with UN Sustainable Development Goals 5 and 8.
            </p>
          </div>
        </div>
      </section>

      {/* Why EmpowerHer Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why EmpowerHer?
            </h2>
            <p className="text-lg text-muted-foreground">
              Understanding the unique challenges and opportunities in Goa's employment landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FlipCard
              frontContent={
                <div className="text-center">
                  <Users className="w-12 h-12 text-empowerment-pink mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Low Female Participation</h3>
                  <p className="text-muted-foreground">Despite high education levels</p>
                </div>
              }
              backContent={
                <div className="text-center text-foreground">
                  <h3 className="text-lg font-bold mb-4">The Challenge</h3>
                  <p className="text-sm leading-relaxed">
                    Goa has one of India's highest female literacy rates, yet workforce participation 
                    remains significantly low due to structural and cultural barriers.
                  </p>
                </div>
              }
            />

            <FlipCard
              frontContent={
                <div className="text-center">
                  <Wifi className="w-12 h-12 text-empowerment-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">High Internet Penetration</h3>
                  <p className="text-muted-foreground">Digital infrastructure ready</p>
                </div>
              }
              backContent={
                <div className="text-center text-foreground">
                  <h3 className="text-lg font-bold mb-4">The Opportunity</h3>
                  <p className="text-sm leading-relaxed">
                    Goa's excellent digital infrastructure creates unprecedented opportunities 
                    for remote work and digital entrepreneurship for women.
                  </p>
                </div>
              }
            />

            <FlipCard
              frontContent={
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-empowerment-mint mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Informal Sector Growth</h3>
                  <p className="text-muted-foreground">New employment models</p>
                </div>
              }
              backContent={
                <div className="text-center text-foreground">
                  <h3 className="text-lg font-bold mb-4">The Solution</h3>
                  <p className="text-sm leading-relaxed">
                    Growing informal and gig economy sectors provide flexible employment 
                    options that can accommodate women's diverse needs.
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* Barriers Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why Are Educated Women in Goa Still Not Working?
            </h2>
            <p className="text-lg text-muted-foreground">
              Understanding the barriers to overcome them
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FlipCard
              frontContent={
                <div className="text-center">
                  <Clock className="w-12 h-12 text-empowerment-pink mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Rigid Work Schedules</h3>
                  <p className="text-sm text-muted-foreground">Traditional 9-to-6 constraints</p>
                </div>
              }
              backContent={
                <div className="text-center text-foreground">
                  <h3 className="text-sm font-bold mb-3">The Issue</h3>
                  <p className="text-xs leading-relaxed">
                    Fixed 9-to-6 jobs are incompatible with caregiving duties, making it difficult 
                    for women to balance work and family responsibilities.
                  </p>
                </div>
              }
            />

            <FlipCard
              frontContent={
                <div className="text-center">
                  <Baby className="w-12 h-12 text-empowerment-gold mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Lack of Childcare</h3>
                  <p className="text-sm text-muted-foreground">Affordable options missing</p>
                </div>
              }
              backContent={
                <div className="text-center text-foreground">
                  <h3 className="text-sm font-bold mb-3">The Reality</h3>
                  <p className="text-xs leading-relaxed">
                    Without affordable childcare options, many women are forced to drop out 
                    of the workforce after starting families.
                  </p>
                </div>
              }
            />

            <FlipCard
              frontContent={
                <div className="text-center">
                  <Laptop className="w-12 h-12 text-empowerment-mint mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Low Digital Literacy</h3>
                  <p className="text-sm text-muted-foreground">Especially in rural areas</p>
                </div>
              }
              backContent={
                <div className="text-center text-foreground">
                  <h3 className="text-sm font-bold mb-3">The Gap</h3>
                  <p className="text-xs leading-relaxed">
                    Limited digital skills prevent women from accessing modern job opportunities 
                    and remote work possibilities.
                  </p>
                </div>
              }
            />

            <FlipCard
              frontContent={
                <div className="text-center">
                  <UserX className="w-12 h-12 text-empowerment-lavender mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Gender Bias</h3>
                  <p className="text-sm text-muted-foreground">In key industries</p>
                </div>
              }
              backContent={
                <div className="text-center text-foreground">
                  <h3 className="text-sm font-bold mb-3">The Barrier</h3>
                  <p className="text-xs leading-relaxed">
                    Persistent bias in tourism, agriculture, and fisheries limits women's 
                    participation in Goa's major economic sectors.
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;