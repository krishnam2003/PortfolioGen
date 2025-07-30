import React from 'react';
import type { Portfolio } from '../../types/portfolio';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Globe, Quote, ArrowRight } from 'lucide-react';

interface ModernTemplateProps {
  portfolio: Portfolio;
}

export const ModernTemplate: React.FC<ModernTemplateProps> = ({ portfolio }) => {
  const { hero, about, skills, services, portfolio: projects, testimonials, blog, contact } = portfolio;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                {hero.name}
              </h1>
              <h2 className="text-2xl text-blue-600 font-semibold mb-6">
                {hero.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {hero.tagline}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Get In Touch
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  View Work
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src={hero.profileImage || 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'}
                  alt={hero.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400&h=400';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
              <div className="prose prose-lg text-gray-600">
                {about.bio.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <a href={`mailto:${about.email}`} className="text-gray-600 hover:text-blue-600">
                      {about.email}
                    </a>
                  </div>
                  {about.phone && (
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-600 mr-3" />
                      <a href={`tel:${about.phone}`} className="text-gray-600 hover:text-blue-600">
                        {about.phone}
                      </a>
                    </div>
                  )}
                  {about.location && (
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">{about.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {Object.keys(about.socials).length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    {about.socials.linkedin && (
                      <a
                        href={about.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                    )}
                    {about.socials.twitter && (
                      <a
                        href={about.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      >
                        <Twitter className="h-6 w-6" />
                      </a>
                    )}
                    {about.socials.github && (
                      <a
                        href={about.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                    )}
                    {about.socials.website && (
                      <a
                        href={about.socials.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      >
                        <Globe className="h-6 w-6" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {skills.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-white text-gray-700 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {services.some(service => service.title) && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.filter(service => service.title).map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Section */}
      {projects.some(project => project.title) && (
        <section id="portfolio" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Portfolio</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(project => project.title).map((project, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="aspect-video">
                    <img
                      src={project.image || 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {testimonials.some(testimonial => testimonial.quote) && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.filter(testimonial => testimonial.quote).map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <Quote className="h-8 w-8 text-blue-600 mb-4" />
                  <p className="text-gray-700 mb-6 text-lg italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Section */}
      {blog?.title && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{blog.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{blog.summary}</p>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">{contact.message}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </a>
            {contact.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {hero.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};