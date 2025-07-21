import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Star, TrendingUp } from 'lucide-react';
import MorphButton from '@/components/MorphButton';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const SuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  const stories = [
    {
      name: "Priya Sharma",
      age: 32,
      role: "Digital Marketing Specialist",
      background: "Mother of two",
      image: "👩‍💼",
      story: "After being out of work for 5 years while raising my children, EmpowerHer Goa helped me transition into digital marketing. The flexible training schedule allowed me to learn while managing my family. Today, I run my own social media consultancy and earn ₹40,000 per month working from home.",
      achievement: "Started her own consultancy",
      before: "Unemployed for 5 years",
      after: "₹40,000/month income"
    },
    {
      name: "Sunita Desai",
      age: 45,
      role: "Boutique Owner",
      background: "Widow",
      image: "👩‍🎨",
      story: "After losing my husband, I needed to support my family. The tailoring program at EmpowerHer not only taught me advanced techniques but also connected me with mentors who helped me start my boutique. I now employ 3 other women and have a thriving business in Margao.",
      achievement: "Employs 3 women",
      before: "No income source",
      after: "Successful business owner"
    },
    {
      name: "Maria Fernandes",
      age: 28,
      role: "Data Analyst",
      background: "Graduate",
      image: "👩‍💻",
      story: "Despite having a degree, I couldn't find work that matched my potential. EmpowerHer's Excel and data analysis course opened doors I didn't know existed. I now work with a multinational company remotely and have the work-life balance I always wanted.",
      achievement: "Works with MNC",
      before: "Underemployed graduate",
      after: "Professional growth achieved"
    },
    {
      name: "Kavita Naik",
      age: 38,
      role: "Tourism Guide",
      background: "Mother of three",
      image: "🗣️",
      story: "Tourism is in my blood, but I lacked confidence and formal training. Through EmpowerHer's mentorship program, I gained certification as a tour guide and learned business skills. I now lead heritage walks and earn ₹35,000 monthly while sharing Goa's rich culture.",
      achievement: "Certified tour guide",
      before: "Lacked formal training",
      after: "Cultural entrepreneur"
    },
    {
      name: "Reshma Patel",
      age: 41,
      role: "Online Seller",
      background: "Homemaker",
      image: "📱",
      story: "I started by selling homemade pickles to neighbors. EmpowerHer taught me e-commerce skills and digital marketing. Now my 'Goan Flavors' brand sells across India through online platforms, and I've turned my kitchen hobby into a ₹50,000/month business.",
      achievement: "Pan-India brand",
      before: "Kitchen hobbyist",
      after: "E-commerce entrepreneur"
    },
    {
      name: "Anita D'Souza",
      age: 35,
      role: "Content Creator",
      background: "Career break mom",
      image: "✍️",
      story: "After a 7-year career break, I felt disconnected from the professional world. EmpowerHer's content writing course and mentorship helped me rebuild my confidence. I now write for multiple publications and have my own blog about motherhood and career transitions.",
      achievement: "Published writer",
      before: "7-year career gap",
      after: "Confident professional"
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const getVisibleStories = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(stories[(currentStory + i) % stories.length]);
    }
    return visible;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
            Success <span className="bg-gradient-to-r from-empowerment-pink to-empowerment-gold bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Be inspired by women who've transformed their careers and lives through EmpowerHer Goa
          </p>

          {/* Stats Card */}
          <div className="max-w-md mx-auto bg-card rounded-2xl p-8 shadow-card-soft">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-empowerment-pink mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Women Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-empowerment-gold mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Carousel */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Their Journeys</h2>
            <p className="text-lg text-muted-foreground">Real women, real transformations</p>
          </div>

          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevStory}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 hover:bg-background rounded-full p-3 shadow-morph transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={nextStory}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 hover:bg-background rounded-full p-3 shadow-morph transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            {/* Stories Display */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12">
              {getVisibleStories().map((story, index) => (
                <div
                  key={`${story.name}-${index}`}
                  className="bg-card rounded-2xl p-8 text-center shadow-card-soft hover:shadow-morph transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-6xl mb-4">{story.image}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{story.name}</h3>
                  <p className="text-empowerment-gold font-semibold mb-1">{story.role}</p>
                  <p className="text-sm text-muted-foreground mb-6">{story.background}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Before:</span>
                      <span className="text-foreground">{story.before}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">After:</span>
                      <span className="text-empowerment-gold font-semibold">{story.after}</span>
                    </div>
                  </div>

                  <MorphButton
                    size="sm"
                    className="w-full"
                    onClick={() => setSelectedStory(stories.findIndex(s => s.name === story.name))}
                  >
                    Her Story
                  </MorphButton>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStory ? 'bg-empowerment-gold' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Story Modal */}
      <Dialog open={selectedStory !== null} onOpenChange={() => setSelectedStory(null)}>
        <DialogContent className="max-w-2xl">
          {selectedStory !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center">
                  {stories[selectedStory].name}'s Journey
                </DialogTitle>
              </DialogHeader>
              <div className="text-center py-6">
                <div className="text-8xl mb-6">{stories[selectedStory].image}</div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-empowerment-gold">{stories[selectedStory].role}</h3>
                    <p className="text-muted-foreground">{stories[selectedStory].background} • Age {stories[selectedStory].age}</p>
                  </div>
                  
                  <div className="bg-gradient-soft rounded-xl p-6">
                    <p className="text-foreground leading-relaxed italic">
                      "{stories[selectedStory].story}"
                    </p>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-empowerment-gold">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-semibold">{stories[selectedStory].achievement}</span>
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SuccessStories;