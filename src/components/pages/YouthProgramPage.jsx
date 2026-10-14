import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Users,
  Sparkles,
  Briefcase,
  Award,
  Compass,
  ShieldCheck,
  CheckCircle2,
  Home,
  Globe,
  Mail,
  HeartHandshake
} from 'lucide-react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ParticleBackground from '../effects/ParticleBackground';
import ScrollReveal from '../effects/ScrollReveal';
import RippleButton from '../effects/RippleButton';
import TiltCard from '../effects/TiltCard';
import { siteData } from '../../data/content';

export default function YouthProgramPage({
  onBackToHome,
  onDonateClick,
  onPartnerClick,
  onContactClick
}) {
  const { youthProgram } = siteData;

  const renderFocusIcon = (icon) => {
    const props = { className: "w-5 h-5 text-white" };
    switch (icon) {
      case 'sparkles':
        return <Sparkles {...props} />;
      case 'briefcase':
        return <Briefcase {...props} />;
      case 'users':
        return <Users {...props} />;
      case 'award':
        return <Award {...props} />;
      case 'heart':
        return <Heart {...props} />;
      default:
        return <Compass {...props} />;
    }
  };

  const renderApproachIcon = (icon) => {
    const props = { className: "w-5 h-5 text-[#0d7a64]" };
    switch (icon) {
      case 'home':
        return <Home {...props} />;
      case 'globe':
        return <Globe {...props} />;
      case 'shield-check':
        return <ShieldCheck {...props} />;
      default:
        return <HeartHandshake {...props} />;
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
          {/* Back Navigation Button */}
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold tracking-widest text-[#f28e63] uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#f28e63] animate-pulse" />
                  <span>{youthProgram.badge}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.12]">
                  Empowering Young Lives.{' '}
                  <span className="text-[#f28e63] block mt-1">Inspiring Brighter Futures.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={250}>
                <p className="text-sm sm:text-base text-teal-50/90 leading-relaxed font-normal">
                  {youthProgram.lead1}
                </p>
                <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed font-normal mt-3">
                  {youthProgram.lead2}
                </p>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal direction="up" delay={300}>
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <RippleButton
                    onClick={onDonateClick}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#f28e63] hover:bg-[#ea7849] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#042820]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                  >
                    <Heart className="w-4 h-4 fill-white text-white" />
                    <span>{youthProgram.primaryCta}</span>
                    <ArrowRight className="w-4 h-4 ml-0.5" />
                  </RippleButton>

                  <button
                    type="button"
                    onClick={onPartnerClick}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-teal-300/40 hover:border-teal-200 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                  >
                    <Users className="w-4 h-4 text-teal-200" />
                    <span>{youthProgram.secondaryCta}</span>
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="right" delay={200}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] group">
                  <img
                    src={youthProgram.image}
                    alt="Children & Youth Development - LIFT Foundation Sri Lanka"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07362a]/85 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-[11px] font-bold text-[#f28e63] tracking-wider uppercase">
                      Stronger Generations
                    </span>
                    <p className="text-xs sm:text-sm font-medium mt-0.5 text-teal-100">
                      Personal growth, character development, and mentorship equipping Sri Lanka's youth.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <main className="flex-1 py-14 sm:py-20 px-4 sm:px-8 max-w-6xl mx-auto w-full space-y-16 sm:space-y-24">

        {/* 1. WHY CHILDREN & YOUTH DEVELOPMENT MATTERS */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)]">
          <ScrollReveal direction="up" delay={100}>
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#ea580c] uppercase mb-2">
              <span className="w-6 h-[2px] bg-[#ea580c] inline-block" />
              <span>{youthProgram.whyMatters.badge}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-3">
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#faf8f5] to-[#f4f8f6] border border-gray-100/80">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                  {youthProgram.whyMatters.description1}
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#0c3930]/5 border border-[#0c3930]/10 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
                  {youthProgram.whyMatters.description2}
                </p>
                <div className="mt-4 pt-3 border-t border-[#0c3930]/10 flex items-center gap-2 text-xs font-semibold text-[#0c3930]">
                  <CheckCircle2 className="w-4 h-4 text-[#0d7a64]" />
                  <span>Preparing young people for a purposeful future</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 2. OUR AREAS OF FOCUS (5 Pillars) */}
        <section className="space-y-8">
          <ScrollReveal direction="up" delay={100}>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdf2ec] text-[11px] font-semibold text-[#ea713f] mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{youthProgram.areasOfFocus.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Holistic Youth Development
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {youthProgram.areasOfFocus.items.map((item, idx) => (
              <ScrollReveal key={item.number} direction="up" delay={120 + idx * 70}>
                <TiltCard maxTilt={4} scale={1.01} className="h-full">
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-11 h-11 rounded-2xl bg-[#0c3930] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#f28e63] transition-all duration-300">
                          {renderFocusIcon(item.icon)}
                        </div>
                        <span className="text-2xl font-black text-gray-200 group-hover:text-teal-100 transition-colors">
                          {item.number}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#0c3930] transition-colors mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#0d7a64]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d7a64]" />
                      <span>Youth Growth Priority</span>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 3. HOW WE HOPE TO MAKE A DIFFERENCE */}
        <section className="bg-gradient-to-br from-[#0c3930] via-[#083025] to-[#041a15] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f28e63]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-7">
            <ScrollReveal direction="up" delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold tracking-widest text-[#f28e63] uppercase">
                <Award className="w-3.5 h-3.5 text-[#f28e63]" />
                <span>{youthProgram.makeDifference.badge}</span>
              </div>

              <p className="text-xs sm:text-sm text-teal-100/95 max-w-2xl leading-relaxed mt-3">
                {youthProgram.makeDifference.intro}
              </p>
            </ScrollReveal>

            {/* Bullets Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {youthProgram.makeDifference.bullets.map((point, idx) => (
                <ScrollReveal key={idx} direction="up" delay={150 + idx * 60}>
                  <div className="bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 flex items-start gap-3 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="w-6 h-6 rounded-full bg-[#f28e63]/20 border border-[#f28e63]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#f28e63]" />
                    </div>
                    <span className="text-xs sm:text-[13px] text-teal-50 font-medium leading-relaxed">
                      {point}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Note */}
            <ScrollReveal direction="up" delay={300}>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 text-xs text-teal-200/80 leading-relaxed italic">
                {youthProgram.makeDifference.note}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 4. OUR APPROACH (3 Pillars) */}
        <section className="space-y-8">
          <ScrollReveal direction="up" delay={100}>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e2f3ee] text-[11px] font-semibold text-[#0d7a64] mb-2.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{youthProgram.approach.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Principled, Inclusive & Community-Led
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {youthProgram.approach.items.map((appr, idx) => (
              <ScrollReveal key={appr.id} direction="up" delay={150 + idx * 80}>
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {renderApproachIcon(appr.icon)}
                    </div>

                    <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#0c3930] transition-colors">
                      {appr.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-normal">
                      {appr.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center gap-2 text-[11px] font-semibold text-[#0d7a64]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>LIFT Operating Standard</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 5. HOW YOU CAN HELP (4 Action Cards) */}
        <section className="space-y-8">
          <ScrollReveal direction="up" delay={100}>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdf2ec] text-[11px] font-semibold text-[#ea713f] mb-2.5">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>{youthProgram.howYouCanHelp.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Empower Sri Lanka's Next Generation
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {youthProgram.howYouCanHelp.actions.map((act, idx) => (
              <ScrollReveal key={act.id} direction="up" delay={150 + idx * 80}>
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal-200/60 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-teal-50 text-[#0c3930] flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-[#0c3930] group-hover:text-white transition-colors duration-300">
                      {idx + 1}
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#0c3930] transition-colors mb-2">
                      {act.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed font-normal">
                      {act.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={act.type === 'donate' ? onDonateClick : onPartnerClick}
                      className="w-full py-2.5 px-3 rounded-xl bg-gray-50 hover:bg-[#0c3930] text-gray-800 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer group/btn"
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

        {/* 6. OUR COMMITMENT */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
          <ScrollReveal direction="up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 space-y-2">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#0d7a64] uppercase">
                  <ShieldCheck className="w-4 h-4 text-[#0d7a64]" />
                  <span>{youthProgram.commitment.badge}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Responsible Programme Growth & Ongoing Learning
                </h3>
              </div>

              <div className="md:col-span-7 space-y-3.5">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-900/10">
                  <CheckCircle2 className="w-4 h-4 text-[#0d7a64] shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {youthProgram.commitment.point1}
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-900/10">
                  <CheckCircle2 className="w-4 h-4 text-[#0d7a64] shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {youthProgram.commitment.point2}
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase">
                {youthProgram.closingCta.title}
              </h2>

              <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed max-w-lg mx-auto font-medium">
                {youthProgram.closingCta.subtitle1}
              </p>
              <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed max-w-lg mx-auto">
                {youthProgram.closingCta.subtitle2}
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <RippleButton
                  onClick={onDonateClick}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#f28e63] hover:bg-[#ea7849] text-white font-bold text-xs sm:text-sm shadow-xl shadow-black/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white text-white" />
                  <span>{youthProgram.closingCta.primaryBtn}</span>
                </RippleButton>

                <button
                  type="button"
                  onClick={onContactClick || onPartnerClick}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-teal-200/40 hover:border-teal-200 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-teal-200" />
                  <span>{youthProgram.closingCta.secondaryBtn}</span>
                </button>
              </div>

              <div className="pt-4 text-[11px] text-teal-200/70 font-medium tracking-wide">
                {youthProgram.closingCta.footerNote}
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
