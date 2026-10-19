import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Users,
  Utensils,
  Handshake,
  CheckCircle2,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Target,
  Mail
} from 'lucide-react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ParticleBackground from '../effects/ParticleBackground';
import ScrollReveal from '../effects/ScrollReveal';
import RippleButton from '../effects/RippleButton';
import TiltCard from '../effects/TiltCard';
import { siteData } from '../../data/content';

export default function NourishProgramPage({
  onBackToHome,
  onDonateClick,
  onPartnerClick,
  onContactClick
}) {
  const { nourishProgram } = siteData;

  const renderAimsIcon = (icon) => {
    const props = { className: "w-5 h-5 text-white" };
    switch (icon) {
      case 'utensils':
        return <Utensils {...props} />;
      case 'users':
        return <Users {...props} />;
      case 'heart':
        return <Heart {...props} />;
      case 'handshake':
        return <Handshake {...props} />;
      default:
        return <Utensils {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col font-sans selection:bg-peach-200 selection:text-teal-950">
      {/* Top Navigation */}
      <div className="bg-[#0b332c]">
        <Navbar onDonateClick={onDonateClick} />
      </div>

      {/* Hero Banner with Full-Width Background Image (matching Christmas Outreach style) */}
      <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] bg-[#07241e] text-white overflow-hidden border-b border-teal-900/60 flex items-center">
        {/* Full-bleed Background Image with Right Alignment */}
        <div className="absolute inset-0 z-0">
          <img
            src={nourishProgram.image}
            alt="Nourish with Love - LIFT Foundation Sri Lanka"
            className="w-full h-full object-cover object-[70%_center] sm:object-[78%_center] lg:object-right filter brightness-[0.92]"
          />
          {/* Multi-stop smooth directional gradient for perfect text contrast on left */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#06211b] via-[#06211b]/85 to-[#06211b]/60 sm:bg-gradient-to-r sm:from-[#051c17] sm:via-[#051c17]/95 sm:via-55% lg:via-50% sm:to-transparent" />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>

        <ParticleBackground particleCount={25} />

        {/* Content Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16 relative z-10 w-full">
          {/* Back Navigation Link */}
          <ScrollReveal direction="down" delay={100}>
            <button
              type="button"
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs font-semibold text-teal-200 hover:text-white transition-colors mb-6 group cursor-pointer bg-black/40 hover:bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Back to Homepage</span>
            </button>
          </ScrollReveal>

          {/* Left Narrative Column */}
          <div className="max-w-2xl space-y-4">
            <ScrollReveal direction="up" delay={150}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#ea580c]/90 backdrop-blur-md text-[11px] font-extrabold tracking-wider text-white uppercase shadow-md border border-orange-400/20">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>{nourishProgram.badge}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1] drop-shadow-sm">
                Nourishing Children.{' '}
                <span className="text-[#f28e63] block mt-1">Nurturing Brighter Futures.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={250}>
              <p className="text-xs sm:text-sm text-teal-50/90 leading-relaxed font-normal pt-1 max-w-xl">
                {nourishProgram.lead1}
              </p>
              <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed font-normal mt-2 max-w-xl">
                {nourishProgram.lead2}
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal direction="up" delay={300}>
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <RippleButton
                  onClick={onDonateClick}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-xs sm:text-sm shadow-xl shadow-orange-950/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white text-white" />
                  <span>{nourishProgram.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </RippleButton>

                <button
                  type="button"
                  onClick={onPartnerClick}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/30 hover:border-white/60 bg-black/30 hover:bg-black/50 text-white font-semibold text-xs sm:text-sm backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer shadow-md"
                >
                  <Users className="w-4 h-4 text-white" />
                  <span>{nourishProgram.secondaryCta}</span>
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Main Page Content Body */}
      <main className="flex-1 py-14 sm:py-20 px-4 sm:px-8 max-w-6xl mx-auto w-full space-y-16 sm:space-y-24">

        {/* 1. WHY NUTRITION MATTERS */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)]">
          <ScrollReveal direction="up" delay={100}>
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#ea580c] uppercase mb-2">
              <span className="w-6 h-[2px] bg-[#ea580c] inline-block" />
              <span>{nourishProgram.whyMatters.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-5">
              Good Nutrition Fuels Growth & Opportunity
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#faf8f5] to-[#f4f8f6] border border-gray-100/80">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {nourishProgram.whyMatters.description1}
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#0c3930]/5 border border-[#0c3930]/10 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                  {nourishProgram.whyMatters.description2}
                </p>
                <div className="mt-4 pt-3 border-t border-[#0c3930]/10 flex items-center gap-2 text-xs font-semibold text-[#0c3930]">
                  <CheckCircle2 className="w-4 h-4 text-[#ea580c]" />
                  <span>Nourishing bodies, empowering minds</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 2. WHAT WE AIM TO DO (4 Core Pillars) */}
        <section className="space-y-8">
          <ScrollReveal direction="up" delay={100}>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdf0e8] text-[11px] font-semibold text-[#ea580c] mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{nourishProgram.aims.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Our Strategic Initiatives
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nourishProgram.aims.items.map((aim, idx) => (
              <ScrollReveal key={aim.number} direction="up" delay={150 + idx * 80}>
                <TiltCard maxTilt={4} scale={1.01} className="h-full">
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-[#ea580c] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#0c3930] transition-all duration-300">
                          {renderAimsIcon(aim.icon)}
                        </div>
                        <span className="text-2xl font-black text-gray-200 group-hover:text-orange-100 transition-colors">
                          {aim.number}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#ea580c] transition-colors mb-2">
                        {aim.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        {aim.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2 text-[11px] font-semibold text-[#ea580c]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                      <span>Action Pillar</span>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 3. OUR VISION FOR NOURISH WITH LOVE (One Million Meals 2030) */}
        <section className="bg-gradient-to-br from-[#0c3930] via-[#072d24] to-[#041a15] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f28e63]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <ScrollReveal direction="up" delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold tracking-widest text-[#f28e63] uppercase">
                <Target className="w-3.5 h-3.5 text-[#f28e63]" />
                <span>{nourishProgram.vision.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-2">
                {nourishProgram.vision.title}
              </h2>

              <p className="text-xs sm:text-sm text-teal-100/90 max-w-2xl leading-relaxed mt-2">
                {nourishProgram.vision.description1}
              </p>
            </ScrollReveal>

            {/* Target Banner */}
            <ScrollReveal direction="up" delay={200}>
              <div className="p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-[#ea580c] to-[#f28e63] flex items-center justify-center shrink-0 shadow-xl">
                  <Utensils className="w-10 h-10 text-white" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-[#f28e63]">
                    1,000,000 MEALS
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-teal-100">
                    {nourishProgram.vision.goalHighlight}
                  </div>
                  <p className="text-xs sm:text-sm text-teal-200/80 leading-relaxed font-normal">
                    {nourishProgram.vision.description2}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Strategic Note */}
            <ScrollReveal direction="up" delay={250}>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 text-xs text-teal-200/80 leading-relaxed italic">
                {nourishProgram.vision.note}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 4. HOW YOUR SUPPORT CAN HELP */}
        <section className="space-y-8">
          <ScrollReveal direction="up" delay={100}>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdf2ec] text-[11px] font-semibold text-[#ea713f] mb-2.5">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>{nourishProgram.howYouCanHelp.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Ways You Can Make an Impact
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
                Join our network in providing essential nourishment and care to children who need it most.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {nourishProgram.howYouCanHelp.actions.map((act, idx) => (
              <ScrollReveal key={act.id} direction="up" delay={150 + idx * 80}>
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200/60 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-orange-50 text-[#ea580c] flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-[#ea580c] group-hover:text-white transition-colors duration-300">
                      {idx + 1}
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#ea580c] transition-colors mb-2">
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
                      className="w-full py-2.5 px-3 rounded-xl bg-gray-50 hover:bg-[#ea580c] text-gray-800 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer group/btn"
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

        {/* 5. OUR COMMITMENT */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
          <ScrollReveal direction="up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 space-y-2">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#ea580c] uppercase">
                  <ShieldCheck className="w-4 h-4 text-[#ea580c]" />
                  <span>{nourishProgram.commitment.badge}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Transparency, Care & Integrity
                </h3>
              </div>

              <div className="md:col-span-7 space-y-3.5">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-orange-50/40 border border-orange-900/10">
                  <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {nourishProgram.commitment.point1}
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-orange-50/40 border border-orange-900/10">
                  <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {nourishProgram.commitment.point2}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 6. CLOSING CTA BANNER */}
        <section className="bg-gradient-to-r from-[#0c3930] via-[#094036] to-[#0c3930] rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <ScrollReveal direction="zoom" delay={100}>
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {nourishProgram.closingCta.title}
              </h2>

              <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed max-w-lg mx-auto">
                {nourishProgram.closingCta.subtitle1}
              </p>
              <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed max-w-lg mx-auto">
                {nourishProgram.closingCta.subtitle2}
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <RippleButton
                  onClick={onDonateClick}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#f28e63] hover:bg-[#ea7849] text-white font-bold text-xs sm:text-sm shadow-xl shadow-black/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white text-white" />
                  <span>{nourishProgram.closingCta.primaryBtn}</span>
                </RippleButton>

                <button
                  type="button"
                  onClick={onContactClick || onPartnerClick}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-teal-200/40 hover:border-teal-200 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-teal-200" />
                  <span>{nourishProgram.closingCta.secondaryBtn}</span>
                </button>
              </div>

              <div className="pt-4 text-[11px] text-teal-200/70 font-medium tracking-wide">
                {nourishProgram.closingCta.footerNote}
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
