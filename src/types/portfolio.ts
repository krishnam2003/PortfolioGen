export interface Portfolio {
  id: string;
  template:  'modern' | 'creative';
  hero: {
    name: string;
    title: string;
    tagline: string;
    profileImage: string;
  };
  about: {
    bio: string;
    email: string;
    phone: string;
    location: string;
    socials: {
      linkedin?: string;
      twitter?: string;
      github?: string;
      website?: string;
    };
  };
  skills: string[];
  services: Array<{
    title: string;
    description: string;
  }>;
  portfolio: Array<{
    title: string;
    image: string;
    description: string;
  }>;
  testimonials: Array<{
    quote: string;
    author: string;
    role: string;
  }>;
  blog?: {
    title: string;
    summary: string;
  };
  contact: {
    message: string;
    email: string;
    phone: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface PortfolioFormData extends Omit<Portfolio, 'id' | 'createdAt' | 'updatedAt'> {}