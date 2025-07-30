import React from 'react';
import type { Portfolio } from '../../types/portfolio';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Globe, Quote, Sparkles, Heart } from 'lucide-react';

interface CreativeTemplateProps {
  portfolio: Portfolio;
}

export const CreativeTemplate: React.FC<CreativeTemplateProps> = ({ portfolio }) => {
  const { hero, about, skills, services, portfolio: projects, testimonials, blog, contact } = portfolio;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-800">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <Sparkles className="h-4 w-4 text-yellow-300 mr-2" />
                <span className="text-white text-sm font-medium">{hero.title}</span>
              </div>
              <h1 className="text-6xl font-extrabold text-white mb-6 leading-tight">
                {hero.name.split(' ').map((word, index) => (
                  <span
                    key={index}
                    className={index % 2 === 0 ? 'text-yellow-300' : 'text-pink-300'}
                  >
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {hero.tagline}
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-orange-600 text-white font-bold rounded-full hover:from-pink-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Let's Connect
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-purple-900 transition-all transform hover:scale-105"
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  See My Magic
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img
                    src={hero.profileImage || 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'}
                    alt={hero.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400&h=400';
                    }}
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
                About Me
              </h2>
              <div className="prose prose-lg text-gray-700">
                {about.bio.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-lg leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <a href={`mailto:${about.email}`} className="text-gray-700 hover:text-purple-600 font-medium">
                      {about.email}
                    </a>
                  </div>
                  {about.phone && (
                    <div className="flex items-center">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <a href={`tel:${about.phone}`} className="text-gray-700 hover:text-purple-600 font-medium">
                        {about.phone}
                      </a>
                    </div>
                  )}
                  {about.location && (
                    <div className="flex items-center">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{about.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {Object.keys(about.socials).length > 0 && (
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Follow My Journey</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {about.socials.linkedin && (
                      <a
                        href={about.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 text-center"
                      >
                        <Linkedin className="h-6 w-6 mx-auto" />
                      </a>
                    )}
                    {about.socials.twitter && (
                      <a
                        href={about.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-xl hover:from-sky-600 hover:to-sky-700 transition-all transform hover:scale-105 text-center"
                      >
                        <Twitter className="h-6 w-6 mx-auto" />
                      </a>
                    )}
                    {about.socials.github && (
                      <a
                        href={about.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-xl hover:from-gray-800 hover:to-gray-900 transition-all transform hover:scale-105 text-center"
                      >
                        <Github className="h-6 w-6 mx-auto" />
                      </a>
                    )}
                    {about.socials.website && (
                      <a
                        href={about.socials.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all transform hover:scale-105 text-center"
                      >
                        <Globe className="h-6 w-6 mx-auto" />
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
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">My Superpowers</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-bold shadow-lg hover:bg-white/30 transition-all transform hover:scale-105 border border-white/20"
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
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-12 text-center">
              What I Offer
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.filter(service => service.title).map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-purple-200">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Sparkles className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Section */}
      {projects.some(project => project.title) && (
        <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">My Creative Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(project => project.title).map((project, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-4">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image || 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400';
                        }}
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {testimonials.some(testimonial => testimonial.quote) && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-12 text-center">
              What People Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.filter(testimonial => testimonial.quote).map((testimonial, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-purple-100">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Quote className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                      <p className="text-purple-600 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Section */}
      {blog?.title && (
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">{blog.title}</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">{blog.summary}</p>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Magic Together?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">{contact.message}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              <Mail className="h-6 w-6 mr-3" />
              Send Me Love
            </a>
            {contact.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center px-10 py-5 border-3 border-white text-white font-bold rounded-full hover:bg-white hover:text-purple-900 transition-all transform hover:scale-105 text-lg"
              >
                <Phone className="h-6 w-6 mr-3" />
                Call Me Maybe
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-lg">
            Made with <Heart className="h-5 w-5 inline text-pink-500 mx-1" /> by {hero.name}
          </p>
          <p className="text-gray-500 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};