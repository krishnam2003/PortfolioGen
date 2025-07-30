import React from 'react';
import { User, Briefcase, MessageCircle, Camera } from 'lucide-react';

interface HeroSectionProps {
  data: {
    name: string;
    title: string;
    tagline: string;
    profileImage: string;
  };
  onChange: (data: any) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data, onChange }) => {
  const handleChange = (field: string, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Hero Section</h2>
        <p className="text-gray-600">This is the first thing visitors will see on your portfolio</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="h-4 w-4 inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Briefcase className="h-4 w-4 inline mr-2" />
              Professional Title *
            </label>
            <input
              type="text"
              value={data.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Full Stack Developer"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MessageCircle className="h-4 w-4 inline mr-2" />
              Tagline *
            </label>
            <textarea
              value={data.tagline}
              onChange={(e) => handleChange('tagline', e.target.value)}
              placeholder="Passionate about creating amazing digital experiences"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Camera className="h-4 w-4 inline mr-2" />
            Profile Image URL
          </label>
          <input
            type="url"
            value={data.profileImage}
            onChange={(e) => handleChange('profileImage', e.target.value)}
            placeholder="https://images.pexels.com/your-image.jpg"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all mb-4"
          />
          
          {data.profileImage && (
            <div className="aspect-square w-40 mx-auto">
              <img
                src={data.profileImage}
                alt="Profile preview"
                className="w-full h-full object-cover rounded-full border-4 border-blue-200"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=300&h=300';
                }}
              />
            </div>
          )}
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Tip:</strong> Use a high-quality, professional headshot for the best impression. 
              Recommended size: 400x400px or larger.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};