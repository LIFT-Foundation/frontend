import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Users,
  Sparkles,
  Palette,
  BookOpen,
  Sun,
  ShieldCheck,
  CheckCircle2,
  Building2,
  HeartHandshake,
  Mail,
  GraduationCap,
  Layers
} from 'lucide-react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ParticleBackground from '../effects/ParticleBackground';
import ScrollReveal from '../effects/ScrollReveal';
import RippleButton from '../effects/RippleButton';
import TiltCard from '../effects/TiltCard';
import { siteData } from '../../data/content';

export default function MontessoriProgramPage({
  onBackToHome,
  onDonateClick,
  onPartnerClick,
  onContactClick
}) {
  const { montessoriProgram } = siteData;

  const renderApproachIcon = (icon) => {
    const props = { className: "w-5 h-5 text-white" };
    switch (icon) {
      case 'sparkles':
        return <Sparkles {...props} />;
      case 'palette':
        return <Palette {...props} />;
      case 'heart':
        return <Heart {...props} />;
      case 'book-open':
        return <BookOpen {...props} />;
      case 'sun':
        return <Sun {...props} />;
      default:
        return <GraduationCap {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col font-sans selection:bg-peach-200 selection:text-teal-950">
      {/* Top Navigation */}
      <div className="bg-[#0b332c]">
        <Navbar onDonateClick={onDonateClick} />
      </div>

      {/* Hero Banner with Particles */}
      <div className="relative bg-[#07362a] text-white py-14 sm:py-20 px-4 sm:px-8 overflow-hidden border-b border-teal-900/60">
        <ParticleBackground particleCount={35} />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Back Navigation Link */}
          <ScrollReveal direction="down" delay={100}>
            <button
              type="button"
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs font-semibold text-teal-200 hover:text-white transition-colors mb-7 group cursor-pointer bg-white/10 hover:bg-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Back to Homepage</span>
            </button>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal direction="up" delay={150}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold tracking-widest text-[#38bdf8] uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                  <span>{montessoriProgram.badge}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.12]">
                  Nurturing Little Minds.{' '}
                  <span className="text-[#38bdf8] block mt-1">Building Bright Beginnings.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={250}>
                <p className="text-sm sm:text-base text-teal-50/90 leading-relaxed font-normal">
                  {montessoriProgram.lead1}
                </p>
                <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed font-normal mt-3">
                  {montessoriProgram.lead2}
                </p>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal direction="up" delay={300}>
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <RippleButton
                    onClick={onDonateClick}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#042820]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                  >
                    <Heart className="w-4 h-4 fill-white text-white" />
                    <span>{montessoriProgram.primaryCta}</span>
                    <ArrowRight className="w-4 h-4 ml-0.5" />
                  </RippleButton>

                  <button
                    type="button"
                    onClick={onPartnerClick}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-teal-300/40 hover:border-teal-200 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                  >
                    <Users className="w-4 h-4 text-teal-200" />
                    <span>{montessoriProgram.secondaryCta}</span>
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="right" delay={200}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] group">
                  <img
                    src={montessoriProgram.image}
                    alt="Little Light Montessori - LIFT Foundation Sri Lanka"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07362a]/85 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-[11px] font-bold text-[#38bdf8] tracking-wider uppercase">
                      Early Childhood Foundation
                    </span>
                    <p className="text-xs sm:text-sm font-medium mt-0.5 text-teal-100">
                      Christ-centred, child-centred early learning environment planned for Kandana, Sri Lanka.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Main Page Content Body */}
      <main className="flex-1 py-14 sm:py-20 px-4 sm:px-8 max-w-6xl mx-auto w-full space-y-16 sm:space-y-24">

        {/* 1. OUR VISION FOR EARLY CHILDHOOD EDUCATION */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)]">
          <ScrollReveal direction="up" delay={100}>
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#0284c7] uppercase mb-2">
              <span className="w-6 h-[2px] bg-[#0284c7] inline-block" />
              <span>{montessoriProgram.vision.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-5">
              Laying a Foundation for Lifelong Learning
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#faf8f5] to-[#f0f9ff] border border-gray-100/80">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {montessoriProgram.vision.description1}
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#0c3930]/5 border border-[#0c3930]/10 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                  {montessoriProgram.vision.description2}
                </p>
                <div className="mt-4 pt-3 border-t border-[#0c3930]/10 flex items-center gap-2 text-xs font-semibold text-[#0c3930]">
                  <CheckCircle2 className="w-4 h-4 text-[#0284c7]" />
                  <span>Exploration, play & meaningful interaction</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 2. OUR APPROACH TO LEARNING (5 Pillars) */}
        <section className="space-y-8">
          <ScrollReveal direction="up" delay={100}>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e0f2fe] text-[11px] font-semibold text-[#0284c7] mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{montessoriProgram.approach.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Core Elements of Our Learning Model
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {montessoriProgram.approach.items.map((app, idx) => (
              <ScrollReveal key={app.number} direction="up" delay={120 + idx * 70}>
                <TiltCard maxTilt={4} scale={1.01} className="h-full">
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-[#0284c7] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#0c3930] transition-all duration-300">
                          {renderApproachIcon(app.icon)}
                        </div>
                        <span className="text-2xl font-black text-gray-200 group-hover:text-sky-100 transition-colors">
                          {app.number}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0284c7] transition-colors mb-2">
                        {app.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        {app.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2 text-[11px] font-semibold text-[#0284c7]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
                      <span>Approach Pillar</span>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 3. OUR DEVELOPMENT PLAN (Phase 1, 2, 3 in Kandana) */}
        <section className="bg-gradient-to-br from-[#0c3930] via-[#072d24] to-[#041a15] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <ScrollReveal direction="up" delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold tracking-widest text-[#38bdf8] uppercase">
                <Building2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>{montessoriProgram.developmentPlan.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-2">
                {montessoriProgram.developmentPlan.title}
              </h2>

              <p className="text-xs sm:text-sm text-teal-100/90 max-w-2xl leading-relaxed mt-2">
                {montessoriProgram.developmentPlan.subtitle}
              </p>
            </ScrollReveal>

            {/* Development Roadmap Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {montessoriProgram.developmentPlan.phases.map((ph, idx) => (
                <ScrollReveal key={ph.phase} direction="up" delay={150 + idx * 100}>
                  <div className="bg-white/10 hover:bg-white/15 backdrop-blur-lg border border-white/15 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#38bdf8]">
                          {ph.phase}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-teal-100">
                          {ph.capacity}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">
                        {ph.title}
                      </h3>

                      <p className="text-xs text-teal-200/80 leading-relaxed font-normal">
                        {ph.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[10.5px] font-medium text-[#38bdf8]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Target Capacity Plan</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Note */}
            <ScrollReveal direction="up" delay={250}>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 text-xs text-teal-200/80 leading-relaxed italic">
                {montessoriProgram.developmentPlan.note}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 4. HOW YOU CAN SUPPORT LITTLE LIGHT MONTESSORI */}
        <section className="space-y-8">
          <ScrollReveal direction="up" delay={100}>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdf2ec] text-[11px] font-semibold text-[#ea713f] mb-2.5">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>{montessoriProgram.howYouCanSupport.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Support Opportunities & Involvement
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {montessoriProgram.howYouCanSupport.actions.map((act, idx) => (
              <ScrollReveal key={act.id} direction="up" delay={150 + idx * 80}>
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-sky-200/60 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0284c7] flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-[#0284c7] group-hover:text-white transition-colors duration-300">
                      {idx + 1}
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#0284c7] transition-colors mb-2">
                      {act.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed">
                      {act.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={act.type === 'donate' ? onDonateClick : onPartnerClick}
                      className="w-full py-2.5 px-3 rounded-xl bg-gray-50 hover:bg-[#0284c7] text-gray-800 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer group/btn"
                    >
                      <span>{act.actionText}</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 5. CHILD SAFEGUARDING AND WELLBEING */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
          <ScrollReveal direction="up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 space-y-2">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#0284c7] uppercase">
                  <ShieldCheck className="w-4 h-4 text-[#0284c7]" />
                  <span>{montessoriProgram.safeguarding.badge}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Protecting & Caring for Every Child
                </h3>
              </div>

              <div className="md:col-span-7 space-y-3.5">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-sky-50/40 border border-sky-900/10">
                  <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {montessoriProgram.safeguarding.point1}
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-sky-50/40 border border-sky-900/10">
                  <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {montessoriProgram.safeguarding.point2}
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-sky-50/40 border border-sky-900/10">
                  <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {montessoriProgram.safeguarding.point3}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 6. OUR COMMITMENT */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
          <ScrollReveal direction="up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 space-y-2">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#0d7a64] uppercase">
                  <Layers className="w-4 h-4 text-[#0d7a64]" />
                  <span>{montessoriProgram.commitment.badge}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Responsibility, Quality & Transparency
                </h3>
              </div>

              <div className="md:col-span-7 space-y-3.5">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-900/10">
                  <CheckCircle2 className="w-4 h-4 text-[#0d7a64] shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {montessoriProgram.commitment.point1}
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-900/10">
                  <CheckCircle2 className="w-4 h-4 text-[#0d7a64] shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {montessoriProgram.commitment.point2}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 7. CLOSING CTA BANNER */}
        <section className="bg-gradient-to-r from-[#0c3930] via-[#094036] to-[#0c3930] rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <ScrollReveal direction="zoom" delay={100}>
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {montessoriProgram.closingCta.title}
              </h2>

              <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed max-w-lg mx-auto">
                {montessoriProgram.closingCta.subtitle1}
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <RippleButton
                  onClick={onDonateClick}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs sm:text-sm shadow-xl shadow-black/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white text-white" />
                  <span>{montessoriProgram.closingCta.primaryBtn}</span>
                </RippleButton>

                <button
                  type="button"
                  onClick={onContactClick || onPartnerClick}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-teal-200/40 hover:border-teal-200 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-teal-200" />
                  <span>{montessoriProgram.closingCta.secondaryBtn}</span>
                </button>
              </div>

              <div className="pt-4 space-y-1">
                <div className="text-[11px] text-teal-200/80 font-medium tracking-wide">
                  {montessoriProgram.closingCta.footerNote}
                </div>
                <div className="text-[10px] text-teal-300/60 font-semibold uppercase tracking-widest">
                  {montessoriProgram.closingCta.tagline}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
