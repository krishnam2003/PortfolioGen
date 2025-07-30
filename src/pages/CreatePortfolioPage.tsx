import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TemplateSelection } from '../components/TemplateSelection';
import { PortfolioForm } from '../components/PortfolioForm';
import type { PortfolioFormData } from '../types/portfolio';
import  { portfolioAPI } from '../utils/api';

export const CreatePortfolioPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<'modern' | 'creative' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTemplateSelect = (template: 'modern' | 'creative') => {
    setSelectedTemplate(template);
  };

  const handleFormSubmit = async (formData: PortfolioFormData) => {
    if (!selectedTemplate) return;

    setIsSubmitting(true);
    try {
      const portfolio = await portfolioAPI.createPortfolio({
        ...formData,
        template: selectedTemplate,
      });
      navigate(`/portfolio/${portfolio.id}`);
    } catch (error) {
      console.error('Failed to create portfolio:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!selectedTemplate) {
    return <TemplateSelection onSelectTemplate={handleTemplateSelect} />;
  }

  return (
    <PortfolioForm
      template={selectedTemplate}
      onSubmit={handleFormSubmit}
      isSubmitting={isSubmitting}
      onBack={() => setSelectedTemplate(null)}
    />
  );
};