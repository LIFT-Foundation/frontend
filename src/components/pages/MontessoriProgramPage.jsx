import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Users,
  Sparkles,
  MapPin,
  Calendar,
  TrendingUp,
  Target,
  CheckCircle2,
  DollarSign,
  Building2,
  HeartHandshake
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
}) {
  const { montessoriProgram } = siteData;

  const renderDevIcon = (icon) => {
    const props = { className: "w-5 h-5 text-[#0284c7]" };
    switch (icon) {
      case 'map-pin':
        return <MapPin {...props} />;
      case 'users':
        return <Users {...props} />;
      case 'trending-up':
        return <TrendingUp {...props} />;
      case 'calendar':
        return <Calendar {...props} />;
      default:
        return <Target {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col font-sans selection:bg-teal-200 selection:text-teal-950">
      {/* Top Navigation */}
      <div className="bg-[#0b332c]">
        <Navbar onDonateClick={onDonateClick} />
      </div>

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-b from-[#07362a] via-[#094036] to-[#0b332c] text-white py-14 sm:py-20 px-4 sm:px-8 overflow-hidden border-b border-teal-900/60">
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
            <div className="lg:col-span-7 space-y-4">
              <ScrollReveal direction="up" delay={150}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold tracking-widest text-[#38bdf8] uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                  <span>{montessoriProgram.badge}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15]">
                  {montessoriProgram.title}
                </h1>
                <p className="text-lg sm:text-xl font-semibold text-[#38bdf8] mt-2">
                  {montessoriProgram.tagline}
                </p>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-teal-200/90 font-medium mt-1">
                  <MapPin className="w-4 h-4 text-[#ea580c] shrink-0" />
                  <span>{montessoriProgram.subtitle}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={250}>
                <p className="text-sm sm:text-base text-teal-50/90 leading-relaxed font-normal pt-2">
                  {montessoriProgram.lead1}
                </p>
                <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed font-normal mt-2">
                  {montessoriProgram.lead2}
                </p>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal direction="up" delay={300}>
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <RippleButton
                    onClick={onDonateClick}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs sm:text-sm shadow-lg shadow-black/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
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
                    alt="Little Light Montessori - Kandana"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07362a]/90 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-[11px] font-bold text-[#38bdf8] tracking-wider uppercase">
                      Early Childhood Education
                    </span>
                    <p className="text-xs sm:text-sm font-medium mt-0.5 text-teal-100">
                      Kandana, Gampaha District, Sri Lanka
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Main Page Content Body */}
      <main className="flex-1 py-14 sm:py-20 px-4 sm:px-8 max-w-6xl mx-auto w-full space-y-14 sm:space-y-20">

        {/* 1. OUR PURPOSE */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)]">
          <ScrollReveal direction="up" delay={100}>
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#0284c7] uppercase mb-2">
              <span className="w-6 h-[2px] bg-[#0284c7] inline-block" />
              <span>{montessoriProgram.purpose.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-5">
              Quality Early Learning for Every Child
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#faf8f5] to-[#f0f9ff] border border-gray-100 flex flex-col justify-center">
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  {montessoriProgram.purpose.description1}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0c3930]/5 border border-[#0c3930]/10 flex flex-col justify-between">
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  {montessoriProgram.purpose.description2}
                </p>
                <div className="mt-4 pt-3 border-t border-[#0c3930]/10 flex items-center gap-2 text-xs font-semibold text-[#0c3930]">
                  <CheckCircle2 className="w-4 h-4 text-[#0284c7]" />
                  <span>Christian love, compassion, and respect</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 2. OUR DEVELOPMENT PLAN */}
        <section className="space-y-8">
          <ScrollReveal direction="up" delay={100}>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#e0f2fe] text-[11px] font-semibold text-[#0284c7] mb-2.5">
                <Building2 className="w-3.5 h-3.5" />
                <span>{montessoriProgram.developmentPlan.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                {montessoriProgram.developmentPlan.title}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {montessoriProgram.developmentPlan.details.map((item, idx) => (
              <ScrollReveal key={item.label} direction="up" delay={120 + idx * 80}>
                <TiltCard maxTilt={4} scale={1.01} className="h-full">
                  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-sky-200/60 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      <div className="w-11 h-11 rounded-2xl bg-sky-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        {renderDevIcon(item.icon)}
                      </div>
                      <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        {item.label}
                      </div>
                      <p className="text-sm font-bold text-gray-900 group-hover:text-[#0284c7] transition-colors leading-snug">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 3. WHAT WE AIM TO PROVIDE & WHY THIS PROJECT MATTERS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* What We Aim to Provide (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm flex flex-col justify-between">
            <ScrollReveal direction="up" delay={100}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[11px] font-semibold text-[#0c3930] mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{montessoriProgram.whatWeProvide.badge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mb-5">
                {montessoriProgram.whatWeProvide.title}
              </h3>

              <div className="space-y-3">
                {montessoriProgram.whatWeProvide.items.map((provision, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-gray-50/70 hover:bg-sky-50/40 border border-gray-100 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                      {provision}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Why This Project Matters (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0c3930] to-[#072d24] text-white rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

            <ScrollReveal direction="up" delay={150}>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold tracking-widest text-[#38bdf8] uppercase mb-4">
                  <span>{montessoriProgram.whyItMatters.badge}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
                  {montessoriProgram.whyItMatters.title}
                </h3>

                <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed font-normal">
                  {montessoriProgram.whyItMatters.content}
                </p>
              </div>
            </ScrollReveal>

            <div className="relative z-10 mt-8 pt-5 border-t border-white/15 flex items-center gap-2 text-xs text-teal-200">
              <HeartHandshake className="w-4 h-4 text-[#ea713f]" />
              <span>Building foundations for bright futures</span>
            </div>
          </div>
        </section>

        {/* 4. OUR PROPOSED FUNDING GOAL & DETAILED BREAKDOWN */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-200/80 shadow-md space-y-8">
          <ScrollReveal direction="up" delay={100}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-100">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdf2ec] text-[11px] font-semibold text-[#ea580c] mb-2.5">
                  <DollarSign className="w-3.5 h-3.5" />
                  <span>{montessoriProgram.fundingGoal.badge}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Funding Target & Budget
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
                  {montessoriProgram.fundingGoal.description}
                </p>
              </div>

              {/* Big Goal Stat Badge */}
              <div className="bg-gradient-to-br from-[#0c3930] to-[#082822] text-white p-5 sm:p-6 rounded-2xl shadow-lg shrink-0 text-right md:min-w-[260px]">
                <div className="text-[11px] text-teal-200 uppercase tracking-wider font-semibold">Total Proposed Goal</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-1">
                  {montessoriProgram.fundingGoal.lkr}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#38bdf8] mt-0.5">
                  {montessoriProgram.fundingGoal.usd}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Breakdown Table */}
          <ScrollReveal direction="up" delay={150}>
            <div className="overflow-x-auto rounded-2xl border border-gray-200/80">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#0c3930] text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider">
                    <th className="py-3.5 px-4 sm:px-6">Project Component</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right">Estimated Budget (LKR)</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right">Approx. Budget (USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {montessoriProgram.fundingGoal.breakdown.map((row, index) => (
                    <tr
                      key={row.component}
                      className={index % 2 === 0 ? 'bg-white hover:bg-sky-50/40 transition-colors' : 'bg-gray-50/50 hover:bg-sky-50/40 transition-colors'}
                    >
                      <td className="py-3 px-4 sm:px-6 font-medium text-gray-900">
                        {row.component}
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono text-gray-700">
                        {row.lkr}
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono text-[#0284c7] font-semibold">
                        ${row.usd}
                      </td>
                    </tr>
                  ))}
                  {/* Total Row */}
                  <tr className="bg-gradient-to-r from-teal-900/10 to-sky-900/10 font-bold border-t-2 border-teal-900/20 text-gray-900">
                    <td className="py-4 px-4 sm:px-6 text-sm sm:text-base font-extrabold text-[#0c3930]">
                      Total Proposed Funding Goal
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right font-mono text-sm sm:text-base font-extrabold text-[#0c3930]">
                      {montessoriProgram.fundingGoal.totalLkr}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right font-mono text-sm sm:text-base font-extrabold text-[#0284c7]">
                      {montessoriProgram.fundingGoal.totalUsd}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Currency Note */}
            <p className="text-[11px] text-gray-500 italic mt-3 leading-relaxed">
              {montessoriProgram.fundingGoal.note}
            </p>
          </ScrollReveal>
        </section>

        {/* 5. CLOSING CTA BANNER */}
        <section className="bg-gradient-to-r from-[#0c3930] via-[#094036] to-[#0c3930] rounded-3xl p-8 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden">
          <ScrollReveal direction="zoom" delay={100}>
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {montessoriProgram.closingCta.title}
              </h2>

              <p className="text-xs sm:text-sm text-teal-100 leading-relaxed font-medium">
                {montessoriProgram.closingCta.lead}
              </p>

              <div className="text-xs text-teal-200/90 leading-relaxed space-y-2 pt-1">
                <p>{montessoriProgram.closingCta.p1}</p>
                <p>{montessoriProgram.closingCta.p2}</p>
              </div>

              <div className="pt-2 text-sm sm:text-base font-bold text-[#38bdf8]">
                {montessoriProgram.closingCta.highlight}
              </div>

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
                  onClick={onPartnerClick}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-teal-200/40 hover:border-teal-200 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  <Users className="w-4 h-4 text-teal-200" />
                  <span>{montessoriProgram.closingCta.secondaryBtn}</span>
                </button>
              </div>

              <div className="pt-6 border-t border-white/15 text-[11px] text-teal-200/80 font-medium tracking-wide">
                {montessoriProgram.closingCta.footerNote}
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
