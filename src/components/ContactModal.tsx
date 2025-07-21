import { useState } from 'react';
import { X, Mail, Phone, MapPin, Send } from 'lucide-react';
import MorphButton from './MorphButton';
import { Button } from './ui/button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-2xl shadow-morph max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="hover:bg-muted rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-empowerment-pink rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-semibold text-foreground">info@empowerhergoa.org</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-empowerment-gold rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-semibold text-foreground">+91 832 XXX XXXX</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-empowerment-mint rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">Address</p>
              <p className="font-semibold text-foreground">Panaji, Goa</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-empowerment-pink"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-empowerment-pink"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-empowerment-pink"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-empowerment-pink"
                >
                  <option value="">Select a subject</option>
                  <option value="mentorship">Mentorship Program</option>
                  <option value="job-assistance">Job Assistance</option>
                  <option value="skill-training">Skill Training</option>
                  <option value="volunteer">Volunteer Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-empowerment-pink resize-none"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <div className="flex gap-4">
              <MorphButton type="submit" className="flex-1">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </MorphButton>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 border-empowerment-pink text-empowerment-pink hover:bg-empowerment-pink hover:text-foreground"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>

        {/* NGO Map Section */}
        <div className="border-t border-border p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Women NGOs in Goa</h3>
          <div className="bg-muted rounded-xl p-8 text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-empowerment-gold" />
            <p className="text-muted-foreground mb-4">
              Interactive map showing locations of women-focused NGOs across Goa
            </p>
            <MorphButton size="sm">
              <MapPin className="w-4 h-4 mr-2" />
              View NGO Map
            </MorphButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;