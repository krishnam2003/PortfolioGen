import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Save } from 'lucide-react';
import  type { PortfolioFormData } from '../types/portfolio';
import { HeroSection } from './form-sections/HeroSection';
import { AboutSection } from './form-sections/AboutSection';
import { SkillsSection } from './form-sections/SkillsSection';
import { ServicesSection } from './form-sections/ServicesSection';
import { PortfolioSection } from './form-sections/PortfolioSection';
import { TestimonialsSection } from './form-sections/TestimonialsSection';
import { BlogSection } from './form-sections/BlogSection';
import { ContactSection } from './form-sections/ContactSection';

interface PortfolioFormProps {
  template:  'modern' | 'creative';
  onSubmit: (data: PortfolioFormData) => void;
  isSubmitting: boolean;
  onBack: () => void;
  initialData?: PortfolioFormData;
}

export const PortfolioForm: React.FC<PortfolioFormProps> = ({
  template,
  onSubmit,
  isSubmitting,
  onBack,
  initialData,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<PortfolioFormData>(
    initialData || {
      template,
      hero: {
        name: '',
        title: '',
        tagline: '',
        profileImage: '',
      },
      about: {
        bio: '',
        email: '',
        phone: '',
        location: '',
        socials: {},
      },
      skills: [],
      services: [
        { title: '', description: '' },
        { title: '', description: '' },
        { title: '', description: '' },
      ],
      portfolio: [
        { title: '', image: '', description: '' },
        { title: '', image: '', description: '' },
        { title: '', image: '', description: '' },
      ],
      testimonials: [
        { quote: '', author: '', role: '' },
      ],
      blog: {
        title: '',
        summary: '',
      },
      contact: {
        message: '',
        email: '',
        phone: '',
      },
    }
  );

  const sections = [
    { title: 'Hero Section', component: HeroSection, key: 'hero' },
    { title: 'About Me', component: AboutSection, key: 'about' },
    { title: 'Skills', component: SkillsSection, key: 'skills' },
    { title: 'Services', component: ServicesSection, key: 'services' },
    { title: 'Portfolio', component: PortfolioSection, key: 'portfolio' },
    { title: 'Testimonials', component: TestimonialsSection, key: 'testimonials' },
    { title: 'Blog', component: BlogSection, key: 'blog' },
    { title: 'Contact', component: ContactSection, key: 'contact' },
  ];

  const updateFormData = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const CurrentSectionComponent = sections[currentStep].component;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Templates
            </button>
            <div className="text-sm text-gray-500">
              Step {currentStep + 1} of {sections.length}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>{sections[currentStep].title}</span>
              <span>{Math.round(((currentStep + 1) / sections.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / sections.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <CurrentSectionComponent
            data={formData[sections[currentStep].key as keyof PortfolioFormData]}
            onChange={(value) => updateFormData(sections[currentStep].key, value)}
          />

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
            <button
              onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
              className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Previous
            </button>

            {currentStep === sections.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Save className="h-5 w-5 mr-2" />
                    Create Portfolio
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={() => setCurrentStep(prev => Math.min(sections.length - 1, prev + 1))}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Next
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};