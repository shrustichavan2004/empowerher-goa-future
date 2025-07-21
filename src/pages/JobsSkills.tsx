import { useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Clock, DollarSign, Award } from 'lucide-react';
import MorphButton from '@/components/MorphButton';

const JobsSkills = () => {
  const [activeSection, setActiveSection] = useState<'jobs' | 'skills' | null>(null);

  const jobs = [
    {
      title: "Content Writer",
      company: "Digital Marketing Agency",
      location: "Panaji, Goa",
      type: "Part-time",
      salary: "₹15,000 - ₹25,000",
      description: "Create engaging content for social media and websites"
    },
    {
      title: "Hotel Receptionist",
      company: "Resort Chain",
      location: "Calangute, Goa",
      type: "Full-time",
      salary: "₹18,000 - ₹30,000",
      description: "Guest services and front desk operations"
    },
    {
      title: "Tailor/Seamstress",
      company: "Fashion Boutique",
      location: "Margao, Goa",
      type: "Flexible",
      salary: "₹12,000 - ₹20,000",
      description: "Custom clothing alterations and creations"
    },
    {
      title: "E-commerce Packer",
      company: "Online Marketplace",
      location: "Vasco, Goa",
      type: "Part-time",
      salary: "₹10,000 - ₹15,000",
      description: "Product packaging and quality control"
    }
  ];

  const skills = [
    {
      title: "Digital Marketing",
      duration: "8 weeks",
      certification: "Google Certified",
      description: "Learn social media marketing, SEO, and online advertising"
    },
    {
      title: "Tailoring & Fashion Design",
      duration: "12 weeks",
      certification: "Industry Certificate",
      description: "Master traditional and modern tailoring techniques"
    },
    {
      title: "Microsoft Excel",
      duration: "4 weeks",
      certification: "Microsoft Certified",
      description: "Data analysis, spreadsheets, and business applications"
    },
    {
      title: "Data Entry & Processing",
      duration: "6 weeks",
      certification: "Professional Certificate",
      description: "Accurate data handling and computer skills"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
            Jobs & <span className="bg-gradient-to-r from-empowerment-pink to-empowerment-gold bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Discover employment opportunities and skill development programs designed for women in Goa
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <MorphButton 
              size="lg" 
              onClick={() => setActiveSection('jobs')}
              className="min-w-48"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              Find Jobs
            </MorphButton>
            <MorphButton 
              variant="secondary" 
              size="lg" 
              onClick={() => setActiveSection('skills')}
              className="min-w-48"
            >
              <GraduationCap className="mr-2 h-5 w-5" />
              Learn Skills
            </MorphButton>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      {activeSection === 'jobs' && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Available Job Opportunities</h2>
              <p className="text-lg text-muted-foreground">Flexible and meaningful employment options</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jobs.map((job, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-card-soft hover:shadow-morph transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{job.title}</h3>
                      <p className="text-empowerment-gold font-semibold">{job.company}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      job.type === 'Full-time' ? 'bg-empowerment-mint text-foreground' :
                      job.type === 'Part-time' ? 'bg-empowerment-peach text-foreground' :
                      'bg-empowerment-lavender text-foreground'
                    }`}>
                      {job.type}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span className="text-sm">{job.salary}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{job.description}</p>

                  <MorphButton size="sm" className="w-full">
                    Apply Now
                  </MorphButton>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Skill Development Programs</h2>
              <p className="text-lg text-muted-foreground">Build marketable skills with certified training</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-card-soft hover:shadow-morph transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-empowerment-pink to-empowerment-gold rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{skill.title}</h3>
                      <p className="text-empowerment-gold text-sm">{skill.certification}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-muted-foreground mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{skill.duration}</span>
                  </div>

                  <p className="text-muted-foreground mb-6">{skill.description}</p>

                  <div className="flex gap-3">
                    <MorphButton size="sm" className="flex-1">
                      Apply for Course
                    </MorphButton>
                    <MorphButton variant="outline" size="sm" className="flex-1">
                      <Award className="w-4 h-4 mr-1" />
                      Get Certificate
                    </MorphButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      {!activeSection && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Choose whether you want to explore job opportunities or develop new skills first
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MorphButton 
                size="lg" 
                onClick={() => setActiveSection('jobs')}
              >
                I'm Looking for Jobs
              </MorphButton>
              <MorphButton 
                variant="secondary" 
                size="lg" 
                onClick={() => setActiveSection('skills')}
              >
                I Want to Learn Skills
              </MorphButton>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default JobsSkills;