import React from 'react';
import { Sparkles, MapPin, ArrowRight, CheckCircle2, HeartHandshake } from 'lucide-react';
import { siteData } from '../../../data/content';

export default function ProjectsSection() {
  const { ourProjects } = siteData;

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fdf0e8] text-[11px] font-semibold text-[#ea580c] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{ourProjects.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            {ourProjects.title}
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 mt-2.5 leading-relaxed">
            {ourProjects.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ourProjects.items.map((project, idx) => (
            <div
              key={project.id}
              className={`rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group ${
                idx === 0
                  ? 'bg-gradient-to-b from-teal-900/5 to-white border-teal-200'
                  : 'bg-[#faf9f6] border-gray-200/80'
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-3 left-3 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-sm ${
                  idx === 0 ? 'bg-[#ea580c]' : 'bg-[#0c3930]/90'
                }`}>
                  {project.tag}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 text-teal-900 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#ea580c]" />
                  <span>{project.status}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-gray-500 mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#ea580c]" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[#0c3930] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-200/60">
                  <a
                    href="#how-to-help"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c3930] hover:text-[#ea580c] transition-colors"
                  >
                    <HeartHandshake className="w-3.5 h-3.5 text-[#ea580c]" />
                    <span>Support This Project</span>
                    <ArrowRight className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
