import React from 'react';
import { BookOpen, FileText } from 'lucide-react';

interface BlogSectionProps {
  data: {
    title: string;
    summary: string;
  };
  onChange: (data: any) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ data, onChange }) => {
  const handleChange = (field: string, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Blog</h2>
        <p className="text-gray-600">Optional: Share your thoughts and expertise through writing</p>
      </div>

      <div className="space-y-6">
        <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-center mb-2">
            <BookOpen className="h-5 w-5 text-amber-600 mr-2" />
            <span className="font-medium text-amber-800">Optional Section</span>
          </div>
          <p className="text-amber-700">
            This section is optional. If you maintain a blog or write articles, you can highlight that here. 
            Leave it blank if you don't have a blog.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <BookOpen className="h-4 w-4 inline mr-2" />
            Blog Title
          </label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => handleChange('title', e.target.value)}
            placeholder="Tech Insights & Development Tips"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FileText className="h-4 w-4 inline mr-2" />
            Blog Summary
          </label>
          <textarea
            value={data.summary}
            onChange={(e) => handleChange('summary', e.target.value)}
            placeholder="I write about web development, programming best practices, and industry trends. My blog features tutorials, case studies, and insights from my experience building web applications..."
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          />
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700">
            <strong>Tip:</strong> If you have a blog, consider adding links to your best articles in your portfolio projects section, 
            or mention specific topics you write about that relate to your professional expertise.
          </p>
        </div>
      </div>
    </div>
  );
};