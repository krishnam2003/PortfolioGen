import React from 'react';
import { MessageSquare, Plus, Trash2, Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  data: Array<{
    quote: string;
    author: string;
    role: string;
  }>;
  onChange: (data: any) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ data, onChange }) => {
  const handleTestimonialChange = (index: number, field: string, value: string) => {
    const updatedTestimonials = data.map((testimonial, i) =>
      i === index ? { ...testimonial, [field]: value } : testimonial
    );
    onChange(updatedTestimonials);
  };

  const addTestimonial = () => {
    onChange([...data, { quote: '', author: '', role: '' }]);
  };

  const removeTestimonial = (index: number) => {
    if (data.length > 1) {
      onChange(data.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Testimonials</h2>
        <p className="text-gray-600">What do your clients say about working with you?</p>
      </div>

      <div className="space-y-6">
        {data.map((testimonial, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Testimonial {index + 1}
              </h3>
              {data.length > 1 && (
                <button
                  onClick={() => removeTestimonial(index)}
                  className="text-red-600 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Quote className="h-4 w-4 inline mr-2" />
                  Quote *
                </label>
                <textarea
                  value={testimonial.quote}
                  onChange={(e) => handleTestimonialChange(index, 'quote', e.target.value)}
                  placeholder="Working with [Your Name] was an amazing experience. They delivered exceptional results and exceeded our expectations..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    value={testimonial.author}
                    onChange={(e) => handleTestimonialChange(index, 'author', e.target.value)}
                    placeholder="Sarah Johnson"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Client Role *
                  </label>
                  <input
                    type="text"
                    value={testimonial.role}
                    onChange={(e) => handleTestimonialChange(index, 'role', e.target.value)}
                    placeholder="CEO, TechCorp"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addTestimonial}
          className="w-full py-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors flex items-center justify-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Another Testimonial
        </button>
      </div>
    </div>
  );
};