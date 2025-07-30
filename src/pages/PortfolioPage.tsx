import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { Portfolio } from '../types/portfolio';
import  { portfolioAPI } from '../utils/api';
import { ModernTemplate } from '../components/template/ModernTemplate';
import { CreativeTemplate } from '../components/template/CreativeTemplate';

export const PortfolioPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState(true);
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Portfolio Not Found</h1>
          <p className="text-gray-600">{error || 'The portfolio you are looking for does not exist.'}</p>
        </div>
      </div>
    );
  }

  const TemplateComponent = portfolio.template === 'modern' ? ModernTemplate : CreativeTemplate;

  return <TemplateComponent portfolio={portfolio} />;
};