import React from 'react';
import { Settings, Plus, Trash2 } from 'lucide-react';

interface ServicesSectionProps {
  data: Array<{
    title: string;
    description: string;
  }>;
  onChange: (data: any) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ data, onChange }) => {
  const handleServiceChange = (index: number, field: string, value: string) => {
    const updatedServices = data.map((service, i) =>
      i === index ? { ...service, [field]: value } : service
    );
    onChange(updatedServices);
  };

  const addService = () => {
    onChange([...data, { title: '', description: '' }]);
  };

  const removeService = (index: number) => {
    if (data.length > 1) {
      onChange(data.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Services</h2>
        <p className="text-gray-600">What services do you offer to your clients?</p>
      </div>

      <div className="space-y-6">
        {data.map((service, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Service {index + 1}
              </h3>
              {data.length > 1 && (
                <button
                  onClick={() => removeService(index)}
                  className="text-red-600 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Title *
                </label>
                <input
                  type="text"
                  value={service.title}
                  onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                  placeholder="Web Development"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Description *
                </label>
                <textarea
                  value={service.description}
                  onChange={(e) => handleServiceChange(index, 'description', e.target.value)}
                  placeholder="Describe what this service includes and how it benefits your clients..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  required
                />
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addService}
          className="w-full py-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors flex items-center justify-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Another Service
        </button>
      </div>
    </div>
  );
};