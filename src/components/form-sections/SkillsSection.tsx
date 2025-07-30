import React, { useState } from 'react';
import { Plus, X, Zap } from 'lucide-react';

interface SkillsSectionProps {
  data: string[];
  onChange: (data: string[]) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ data, onChange }) => {
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim() && !data.includes(newSkill.trim())) {
      onChange([...data, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  const suggestedSkills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'PHP', 'Java',
    'HTML/CSS', 'Vue.js', 'Angular', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker',
    'GraphQL', 'REST APIs', 'Git', 'Figma', 'Photoshop', 'UI/UX Design',
    'Project Management', 'Agile', 'Scrum', 'Leadership', 'Communication'
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Skills</h2>
        <p className="text-gray-600">Showcase your technical and soft skills</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Zap className="h-4 w-4 inline mr-2" />
            Add Skills
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter a skill (e.g., React, Python, Design)"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <button
              onClick={addSkill}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>

        {data.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Skills</h3>
            <div className="flex flex-wrap gap-2">
              {data.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {skill}
                  <button
                    onClick={() => removeSkill(index)}
                    className="ml-2 hover:text-blue-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Add (click to add)</h3>
          <div className="flex flex-wrap gap-2">
            {suggestedSkills
              .filter(skill => !data.includes(skill))
              .slice(0, 15)
              .map((skill) => (
                <button
                  key={skill}
                  onClick={() => onChange([...data, skill])}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-50 hover:border-blue-300 transition-colors"
                >
                  + {skill}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};