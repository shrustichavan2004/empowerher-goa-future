import { ExternalLink, Play, MapPin, FileText, Monitor, Briefcase } from 'lucide-react';
import MorphButton from '@/components/MorphButton';

const Resources = () => {
  const youtubeChannels = [
    {
      title: "Excel Mastery",
      description: "Learn advanced Excel skills for data analysis",
      icon: <Monitor className="w-8 h-8" />,
      editableLink: "https://youtube.com/excel-tutorials" // This can be made editable
    },
    {
      title: "Data Entry",
      description: "Professional data entry techniques and speed",
      icon: <FileText className="w-8 h-8" />,
      editableLink: "https://youtube.com/data-entry-course" // This can be made editable
    },
    {
      title: "Entrepreneurship Development",
      description: "Start and grow your own business",
      icon: <Briefcase className="w-8 h-8" />,
      editableLink: "https://youtube.com/entrepreneurship-guide" // This can be made editable
    }
  ];

  const helpCenters = [
    {
      name: "Women's Development Corporation",
      location: "Panaji, Goa",
      address: "Altinho, Panaji - 403001",
      contact: "+91 832 242 4701"
    },
    {
      name: "Bailancho Saad",
      location: "Mapusa, Goa",
      address: "Near Municipal Market, Mapusa - 403507",
      contact: "+91 832 226 2424"
    },
    {
      name: "Goa State Commission for Women",
      location: "Panaji, Goa",
      address: "2nd Floor, Verem Secretariat, Verem - 403114",
      contact: "+91 832 245 5900"
    },
    {
      name: "Self Help Group Federation",
      location: "Margao, Goa",
      address: "Municipal Building, Margao - 403601",
      contact: "+91 832 270 5050"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
            <span className="bg-gradient-to-r from-empowerment-pink to-empowerment-gold bg-clip-text text-transparent">Resources</span> Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Access valuable resources to build your skills, create professional resumes, and connect with support centers across Goa
          </p>
        </div>
      </section>

      {/* Resume Guide */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-8 shadow-card-soft hover:shadow-morph transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold text-foreground mb-4">Resume Guide</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Create a professional resume that stands out to employers. Our comprehensive guide covers 
                  formatting, content tips, and industry-specific advice to help you land your dream job.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-empowerment-gold">
                  <span>✓ Professional Templates</span>
                  <span>✓ Industry-Specific Tips</span>
                  <span>✓ ATS-Friendly Formats</span>
                  <span>✓ Cover Letter Guide</span>
                </div>
              </div>
              <div className="md:w-1/3 text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-empowerment-pink to-empowerment-gold rounded-full flex items-center justify-center">
                  <FileText className="w-12 h-12 text-foreground" />
                </div>
                <MorphButton size="lg">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Open Guide
                </MorphButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Tutorials */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">YouTube Tutorials</h2>
            <p className="text-lg text-muted-foreground">Free video courses to build in-demand skills</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {youtubeChannels.map((channel, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-card-soft hover:shadow-morph transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-empowerment-pink to-empowerment-gold rounded-full flex items-center justify-center text-foreground">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{channel.title}</h3>
                <p className="text-muted-foreground mb-6">{channel.description}</p>
                <MorphButton size="sm" className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Tutorials
                </MorphButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Centers */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Help Centers in Goa</h2>
            <p className="text-lg text-muted-foreground">Connect with local organizations supporting women's empowerment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {helpCenters.map((center, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-card-soft hover:shadow-morph transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-empowerment-mint rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{center.name}</h3>
                    <p className="text-empowerment-gold font-semibold mb-1">{center.location}</p>
                    <p className="text-muted-foreground text-sm mb-2">{center.address}</p>
                    <p className="text-muted-foreground text-sm">📞 {center.contact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="mt-12">
            <div className="bg-card rounded-2xl p-8 shadow-card-soft text-center">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-empowerment-gold" />
              <h3 className="text-xl font-bold text-foreground mb-4">Interactive Map</h3>
              <p className="text-muted-foreground mb-6">
                View all help centers and NGOs supporting women across Goa on our interactive map
              </p>
              <MorphButton>
                <MapPin className="w-5 h-5 mr-2" />
                View Full Map
              </MorphButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;