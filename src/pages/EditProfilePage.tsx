import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Portfolio, PortfolioFormData } from '../types/portfolio';
import  { portfolioAPI } from '../utils/api';
import  { PortfolioForm } from '../components/PortfolioForm';

export const EditProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadPortfolio();
  }, [id]);

  const loadPortfolio = async () => {
    if (!id) {
      setError('Portfolio ID not provided');
      setLoading(false);
      return;
    }

    try {
      const data = await portfolioAPI.getPortfolio(id);
      if (data) {
        setPortfolio(data);
      } else {
        setError('Portfolio not found');
      }
    } catch (error) {
      console.error('Failed to load portfolio:', error);
      setError('Failed to load portfolio');
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (formData: PortfolioFormData) => {
    if (!id) return;

    setIsSubmitting(true);
    try {
      const updatedPortfolio = await portfolioAPI.updatePortfolio(id, formData);
      if (updatedPortfolio) {
        navigate(`/portfolio/${updatedPortfolio.id}`);
      }
    } catch (error) {
      console.error('Failed to update portfolio:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !portfolio) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Portfolio Not Found</h1>
          <p className="text-gray-600">{error || 'The portfolio you are trying to edit does not exist.'}</p>
        </div>
      </div>
    );
  }

  return (
    <PortfolioForm
      template={portfolio.template}
      onSubmit={handleFormSubmit}
      isSubmitting={isSubmitting}
      onBack={() => navigate('/professionals')}
      initialData={{
        template: portfolio.template,
        hero: portfolio.hero,
        about: portfolio.about,
        skills: portfolio.skills,
        services: portfolio.services,
        portfolio: portfolio.portfolio,
        testimonials: portfolio.testimonials,
        blog: portfolio.blog,
        contact: portfolio.contact,
      }}
    />
  );
};