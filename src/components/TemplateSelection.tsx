import React from 'react';
import { ArrowRight, Check, Palette, Zap } from 'lucide-react';

interface TemplateSelectionProps {
  onSelectTemplate: (template: 'modern' | 'creative') => void;
}

export const TemplateSelection: React.FC<TemplateSelectionProps> = ({ onSelectTemplate }) => {
  const templates = [
    {
      id: 'modern' as const,
      name: 'Modern Minimalist',
      description: 'Clean, professional design with elegant typography and subtle animations.',
      icon: Zap,
      features: ['Minimalist Design', 'Professional Layout', 'Mobile Responsive', 'Fast Loading'],
      preview: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      color: 'from-blue-600 to-blue-700',
    },
    {
      id: 'creative' as const,
      name: 'Creative Bold',
      description: 'Vibrant, eye-catching design perfect for creative professionals.',
      icon: Palette,
      features: ['Bold Colors', 'Creative Layout', 'Interactive Elements', 'Unique Design'],
      preview: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      color: 'from-purple-600 to-pink-600',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Template
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a template that best represents your style and profession. You can always customize it later.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={template.preview}
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`bg-gradient-to-r ${template.color} p-3 rounded-lg mr-4`}>
                    <template.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{template.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{template.description}</p>
                
                <div className="space-y-3 mb-8">
                  {template.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-emerald-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={() => onSelectTemplate(template.id)}
                  className={`w-full bg-gradient-to-r ${template.color} text-white font-semibold py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center`}
                >
                  Select Template
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};