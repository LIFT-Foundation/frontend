import React, { useRef, useState, useEffect } from 'react';
import { Sparkles, MapPin, ArrowRight, CheckCircle2, HeartHandshake, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { siteData } from '../../../data/content';
import ScrollReveal from '../../effects/ScrollReveal';
import TiltCard from '../../effects/TiltCard';

export default function ProjectsSection({
  onExploreMontessori,
  onExploreEducation,
  onExploreNourish,
  onSupportChristmas
}) {
  const { ourProjects } = siteData;
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeScrollIndex, setActiveScrollIndex] = useState(0);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    const cardElement = el.querySelector('[data-project-card]');
    if (cardElement) {
      const cardWidth = cardElement.offsetWidth + 24; // width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveScrollIndex(Math.min(Math.max(index, 0), ourProjects.items.length - 1));
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [ourProjects.items.length]);

  const scroll = (direction) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardElement = el.querySelector('[data-project-card]');
    const scrollAmount = cardElement ? cardElement.offsetWidth + 24 : 380;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const scrollToCard = (index) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('[data-project-card]');
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white border-t border-gray-100 relative overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <ScrollReveal direction="up" delay={100} className="max-w-2xl">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fdf0e8] text-[11px] font-semibold text-[#ea580c] mb-3">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>{ourProjects.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                {ourProjects.title}
              </h2>

              <p className="text-xs sm:text-sm text-gray-500 mt-2.5 leading-relaxed">
                {ourProjects.subtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* Navigation Arrows & Badge for horizontal scrolling */}
          <ScrollReveal direction="up" delay={180} className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex text-[11px] font-semibold text-gray-400">
                {activeScrollIndex + 1} / {ourProjects.items.length} initiatives
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className={`p-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
                    canScrollLeft
                      ? 'border-gray-200 bg-white text-gray-700 hover:bg-[#0c3930] hover:text-white hover:border-[#0c3930] shadow-sm hover:scale-105 active:scale-95'
                      : 'border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed opacity-50'
                  }`}
                  aria-label="Previous initiative"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className={`p-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
                    canScrollRight
                      ? 'border-gray-200 bg-white text-gray-700 hover:bg-[#0c3930] hover:text-white hover:border-[#0c3930] shadow-sm hover:scale-105 active:scale-95'
                      : 'border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed opacity-50'
                  }`}
                  aria-label="Next initiative"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Horizontally Scrollable Projects Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 sm:gap-8 overflow-x-auto pb-6 pt-2 px-1 scroll-smooth snap-x snap-mandatory no-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {ourProjects.items.map((project, idx) => (
              <div
                key={project.id}
                data-project-card
                className="w-[85vw] sm:w-[360px] lg:w-[384px] min-w-[280px] sm:min-w-[360px] lg:min-w-[384px] shrink-0 snap-start flex flex-col h-full"
              >
                <ScrollReveal direction="up" delay={120 + idx * 80} className="h-full flex flex-col">
                  <TiltCard maxTilt={5} scale={1.02} className="h-full flex flex-col">
                    <div
                      className={`rounded-3xl overflow-hidden border shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full group ${
                        project.id === 'montessori'
                          ? 'bg-gradient-to-b from-teal-900/5 to-white border-teal-200/80'
                          : project.id === 'christmas-outreach'
                          ? 'bg-gradient-to-b from-orange-500/5 to-white border-orange-200/80 hover:border-orange-300'
                          : 'bg-[#faf9f6] border-gray-200/80 hover:border-teal-200/60'
                      }`}
                    >
                      {/* Image Header */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        />
                        {/* Top-left Tag Badge */}
                        <div
                          className={`absolute top-3 left-3 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-sm ${
                            project.id === 'montessori' || project.id === 'christmas-outreach'
                              ? 'bg-[#ea580c]/90'
                              : 'bg-[#0c3930]/90'
                          }`}
                        >
                          {project.tag}
                        </div>

                        {/* Bottom-right Status / Date Badge */}
                        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-teal-900 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1 border border-white/60">
                          {project.id === 'christmas-outreach' ? (
                            <Calendar className="w-3 h-3 text-[#ea580c]" />
                          ) : (
                            <CheckCircle2 className="w-3 h-3 text-[#ea580c]" />
                          )}
                          <span>{project.status}</span>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div>
                          <div className="flex items-center gap-1 text-[11px] font-semibold text-gray-500 mb-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#ea580c] shrink-0" />
                            <span className="truncate">{project.location}</span>
                          </div>

                          <h3 className="text-base font-bold text-gray-900 group-hover:text-[#0c3930] transition-colors leading-snug">
                            {project.title}
                          </h3>

                          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Action link */}
                        <div className="pt-3 border-t border-gray-200/60">
                          {project.id === 'montessori' && onExploreMontessori ? (
                            <button
                              type="button"
                              onClick={onExploreMontessori}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c3930] hover:text-[#ea580c] transition-colors group/link cursor-pointer"
                            >
                              <HeartHandshake className="w-3.5 h-3.5 text-[#ea580c] group-hover/link:scale-110 transition-transform duration-200" />
                              <span>{project.buttonText || 'Explore This Project →'}</span>
                            </button>
                          ) : project.id === 'education-centers' && onExploreEducation ? (
                            <button
                              type="button"
                              onClick={onExploreEducation}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c3930] hover:text-[#ea580c] transition-colors group/link cursor-pointer"
                            >
                              <HeartHandshake className="w-3.5 h-3.5 text-[#ea580c] group-hover/link:scale-110 transition-transform duration-200" />
                              <span>{project.buttonText || 'Explore This Project →'}</span>
                            </button>
                          ) : project.id === 'nourish-drives' && onExploreNourish ? (
                            <button
                              type="button"
                              onClick={onExploreNourish}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c3930] hover:text-[#ea580c] transition-colors group/link cursor-pointer"
                            >
                              <HeartHandshake className="w-3.5 h-3.5 text-[#ea580c] group-hover/link:scale-110 transition-transform duration-200" />
                              <span>{project.buttonText || 'Explore This Project →'}</span>
                            </button>
                          ) : project.id === 'christmas-outreach' && onSupportChristmas ? (
                            <button
                              type="button"
                              onClick={onSupportChristmas}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c3930] hover:text-[#ea580c] transition-colors group/link cursor-pointer"
                            >
                              <HeartHandshake className="w-3.5 h-3.5 text-[#ea580c] group-hover/link:scale-110 transition-transform duration-200" />
                              <span>{project.buttonText || 'Support This Campaign →'}</span>
                            </button>
                          ) : (
                            <a
                              href="#how-to-help"
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c3930] hover:text-[#ea580c] transition-colors group/link"
                            >
                              <HeartHandshake className="w-3.5 h-3.5 text-[#ea580c] group-hover/link:scale-110 transition-transform duration-200" />
                              <span>{project.buttonText || 'Support This Project'}</span>
                              {!project.buttonText && <ArrowRight className="w-3 h-3 ml-0.5 group-hover/link:translate-x-1 transition-transform duration-200" />}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              </div>
            ))}
          </div>

          {/* Dots Indicator & Swipe Hint */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-2 border-t border-gray-100">
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] animate-pulse"></span>
              <span>Scroll horizontally or use arrow buttons to see more initiatives</span>
            </div>

            <div className="flex items-center gap-1.5">
              {ourProjects.items.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    activeScrollIndex === idx
                      ? 'w-6 h-2 bg-[#ea580c]'
                      : 'w-2 h-2 bg-gray-200 hover:bg-gray-400'
                  }`}
                  aria-label={`Scroll to ${item.title}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
