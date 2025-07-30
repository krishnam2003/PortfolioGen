import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

interface ContactSectionProps {
  data: {
    message: string;
    email: string;
    phone: string;
  };
  onChange: (data: any) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ data, onChange }) => {
  const handleChange = (field: string, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact</h2>
        <p className="text-gray-600">How should potential clients get in touch with you?</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MessageCircle className="h-4 w-4 inline mr-2" />
            Contact Message *
          </label>
          <textarea
            value={data.message}
            onChange={(e) => handleChange('message', e.target.value)}
            placeholder="Ready to bring your ideas to life? Let's discuss your project and see how I can help you achieve your goals. I'm always excited to work on new and challenging projects!"
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            required
          />
          <p className="text-sm text-gray-500 mt-2">
            This message will encourage visitors to reach out to you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="h-4 w-4 inline mr-2" />
              Contact Email *
            </label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="contact@yourname.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="h-4 w-4 inline mr-2" />
              Contact Phone
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

        <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg">
          <h3 className="font-semibold text-emerald-800 mb-2">Contact Section Preview</h3>
          <p className="text-emerald-700">
            This section will appear at the bottom of your portfolio with a call-to-action for potential clients 
            to reach out. Make sure your message is welcoming and professional.
          </p>
        </div>
      </div>
    </div>
  );
};