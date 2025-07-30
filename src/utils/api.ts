import type { Portfolio, PortfolioFormData } from '../types/portfolio';

// Mock API implementation using localStorage
class PortfolioAPI {
  private storageKey = 'portfolios';

  private getStoredPortfolios(): Portfolio[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  private setStoredPortfolios(portfolios: Portfolio[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(portfolios));
  }

  async createPortfolio(data: PortfolioFormData): Promise<Portfolio> {
    const portfolios = this.getStoredPortfolios();
    const newPortfolio: Portfolio = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    portfolios.push(newPortfolio);
    this.setStoredPortfolios(portfolios);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return newPortfolio;
  }

  async getPortfolios(): Promise<Portfolio[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.getStoredPortfolios();
  }

  async getPortfolio(id: string): Promise<Portfolio | null> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    const portfolios = this.getStoredPortfolios();
    return portfolios.find(p => p.id === id) || null;
  }

  async updatePortfolio(id: string, data: PortfolioFormData): Promise<Portfolio | null> {
    const portfolios = this.getStoredPortfolios();
    const index = portfolios.findIndex(p => p.id === id);
    
    if (index === -1) return null;
    
    const updatedPortfolio: Portfolio = {
      ...portfolios[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    
    portfolios[index] = updatedPortfolio;
    this.setStoredPortfolios(portfolios);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return updatedPortfolio;
  }

  async deletePortfolio(id: string): Promise<boolean> {
    const portfolios = this.getStoredPortfolios();
    const filteredPortfolios = portfolios.filter(p => p.id !== id);
    
    if (filteredPortfolios.length === portfolios.length) return false;
    
    this.setStoredPortfolios(filteredPortfolios);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return true;
  }
}

export const portfolioAPI = new PortfolioAPI();