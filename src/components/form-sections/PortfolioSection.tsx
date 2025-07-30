import React from 'react';
import { Folder, Plus, Trash2, Image } from 'lucide-react';

interface PortfolioSectionProps {
  data: Array<{
    title: string;
    image: string;
    description: string;
  }>;
  onChange: (data: any) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ data, onChange }) => {
  const handleProjectChange = (index: number, field: string, value: string) => {
    const updatedProjects = data.map((project, i) =>
      i === index ? { ...project, [field]: value } : project
    );
    onChange(updatedProjects);
  };

  const addProject = () => {
    onChange([...data, { title: '', image: '', description: '' }]);
  };

  const removeProject = (index: number) => {
    if (data.length > 1) {
      onChange(data.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Projects(Portfolio)</h2>
        <p className="text-gray-600">Showcase your best work and projects</p>
      </div>

      <div className="space-y-6">
        {data.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Folder className="h-5 w-5 mr-2" />
                Project {index + 1}
              </h3>
              {data.length > 1 && (
                <button
                  onClick={() => removeProject(index)}
                  className="text-red-600 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                    placeholder="E-Commerce Website"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Image className="h-4 w-4 inline mr-2" />
                    Project Image URL
                  </label>
                  <input
                    type="url"
                    value={project.image}
                    onChange={(e) => handleProjectChange(index, 'image', e.target.value)}
                    placeholder="https://images.pexels.com/project-image.jpg"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    value={project.description}
                    onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                    placeholder="Describe the project, technologies used, challenges overcome, and results achieved..."
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>
              </div>

              <div>
                {project.image && (
                  <div className="aspect-video w-full">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover rounded-lg border border-gray-200"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400';
                      }}
                    />
                  </div>
                )}
                
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>Tip:</strong> Use high-quality screenshots or mockups of your projects. 
                    Recommended aspect ratio: 16:9 (landscape).
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addProject}
          className="w-full py-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors flex items-center justify-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Another Project
        </button>
      </div>
    </div>
  );
};