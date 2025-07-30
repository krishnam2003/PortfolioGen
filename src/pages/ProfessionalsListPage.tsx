import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Eye, Edit, MapPin, Mail } from 'lucide-react';
import type { Portfolio } from '../types/portfolio';
import { portfolioAPI } from '../utils/api';

export const ProfessionalsListPage: React.FC = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [skillFilter, setSkillFilter] = useState('');
  const [roleFilter, setRoleFilter] = useState('');

  useEffect(() => {
    loadPortfolios();
  }, []);

  const loadPortfolios = async () => {
    try {
      const data = await portfolioAPI.getPortfolios();
      setPortfolios(data);
    } catch (error) {
      console.error('Failed to load portfolios:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPortfolios = portfolios.filter(portfolio => {
    const matchesSearch = 
      portfolio.hero.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      portfolio.hero.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      portfolio.about.bio.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSkill = !skillFilter || 
      portfolio.skills.some(skill => skill.toLowerCase().includes(skillFilter.toLowerCase()));
    
    const matchesRole = !roleFilter || 
      portfolio.hero.title.toLowerCase().includes(roleFilter.toLowerCase());

    return matchesSearch && matchesSkill && matchesRole;
  });

  const allSkills = Array.from(new Set(portfolios.flatMap(p => p.skills)));
  const allRoles = Array.from(new Set(portfolios.map(p => p.hero.title)));

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Portfolios
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore portfolios from talented professionals across various industries and specialties.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, title, or bio..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={skillFilter}
                onChange={(e) => setSkillFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="">All Skills</option>
                {allSkills.map(skill => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="">All Roles</option>
                {allRoles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                {filteredPortfolios.length} professional{filteredPortfolios.length !== 1 ? 's' : ''} found
              </span>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSkillFilter('');
                  setRoleFilter('');
                }}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Clear filters
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        {filteredPortfolios.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No portfolios found</h3>
            <p className="text-gray-500 mb-6">
              {portfolios.length === 0 
                ? "No portfolios have been created yet." 
                : "Try adjusting your search filters."}
            </p>
            <Link
              to="/create"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create First Portfolio
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredPortfolios.map((portfolio) => (
              <div
                key={portfolio.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Profile Image */}
                <div className="aspect-square w-full">
                  <img
                    src={portfolio.hero.profileImage || 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'}
                    alt={portfolio.hero.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400&h=400';
                    }}
                  />
                </div>

                {/* Profile Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {portfolio.hero.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {portfolio.hero.title}
                  </p>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {portfolio.about.location || 'Location not specified'}
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {portfolio.about.bio}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {portfolio.skills.slice(0, 4).map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {portfolio.skills.length > 4 && (
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                          +{portfolio.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link
                      to={`/portfolio/${portfolio.id}`}
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Portfolio
                    </Link>
                    <Link
                      to={`/edit/${portfolio.id}`}
                      className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </Link>
                    <a
                      href={`mailto:${portfolio.about.email}`}
                      className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};