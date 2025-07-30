import React from 'react';
import { FileText, Mail, Phone, MapPin, Github, Linkedin, Twitter, Globe } from 'lucide-react';

interface AboutSectionProps {
  data: {
    bio: string;
    email: string;
    phone: string;
    location: string;
    socials: {
      linkedin?: string;
      twitter?: string;
      github?: string;
      website?: string;
    };
  };
  onChange: (data: any) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data, onChange }) => {
  const handleChange = (field: string, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleSocialChange = (platform: string, value: string) => {
    onChange({
      ...data,
      socials: {
        ...data.socials,
        [platform]: value,
      },
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">About Me</h2>
        <p className="text-gray-600">Tell visitors about yourself and how to reach you</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FileText className="h-4 w-4 inline mr-2" />
            Bio *
          </label>
          <textarea
            value={data.bio}
            onChange={(e) => handleChange('bio', e.target.value)}
            placeholder="Tell your story, share your passion, and highlight your experience..."
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="h-4 w-4 inline mr-2" />
              Email *
            </label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="john@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="h-4 w-4 inline mr-2" />
              Phone
            </label>
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="+1 (555) 123-4567"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="h-4 w-4 inline mr-2" />
            Location
          </label>
          <input
            type="text"
            value={data.location}
            onChange={(e) => handleChange('location', e.target.value)}
            placeholder="San Francisco, CA"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Links</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Linkedin className="h-4 w-4 inline mr-2" />
                LinkedIn
              </label>
              <input
                type="url"
                value={data.socials.linkedin || ''}
                onChange={(e) => handleSocialChange('linkedin', e.target.value)}
                placeholder="https://linkedin.com/in/johndoe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Twitter className="h-4 w-4 inline mr-2" />
                Twitter
              </label>
              <input
                type="url"
                value={data.socials.twitter || ''}
                onChange={(e) => handleSocialChange('twitter', e.target.value)}
                placeholder="https://twitter.com/johndoe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Github className="h-4 w-4 inline mr-2" />
                GitHub
              </label>
              <input
                type="url"
                value={data.socials.github || ''}
                onChange={(e) => handleSocialChange('github', e.target.value)}
                placeholder="https://github.com/johndoe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Globe className="h-4 w-4 inline mr-2" />
                Website
              </label>
              <input
                type="url"
                value={data.socials.website || ''}
                onChange={(e) => handleSocialChange('website', e.target.value)}
                placeholder="https://johndoe.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};