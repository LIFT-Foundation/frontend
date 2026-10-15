import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Users,
  Utensils,
  Droplet,
  Sparkles,
  Calendar,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  HeartHandshake,
  Gift
} from 'lucide-react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ParticleBackground from '../effects/ParticleBackground';
import ScrollReveal from '../effects/ScrollReveal';
import RippleButton from '../effects/RippleButton';
import TiltCard from '../effects/TiltCard';
import { siteData } from '../../data/content';

export default function NourishMealDrivesPage({
  onBackToHome,
  onDonateClick,
  onPartnerClick,
}) {
  const { nourishMealDrivesProject } = siteData;

  const renderIcon = (iconName) => {
    const props = { className: "w-5 h-5 text-[#ea580c]" };
    switch (iconName) {
      case 'utensils':
        return <Utensils {...props} />;
      case 'droplet':
        return <Droplet {...props} />;
      case 'sparkles':
        return <Sparkles {...props} />;
      case 'calendar':
        return <Calendar {...props} />;
      case 'heart':
        return <Heart {...props} />;
      default:
        return <Gift {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col font-sans selection:bg-orange-200 selection:text-teal-950">
      {/* Top Navigation */}
      <div className="bg-[#0b332c]">
        <Navbar onDonateClick={onDonateClick} />
      </div>

      {/* Hero Banner with Particles */}
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold tracking-widest text-[#f28e63] uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#f28e63] animate-pulse" />
                  <span>{nourishMealDrivesProject.badge}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15]">
                  {nourishMealDrivesProject.title}
                </h1>
                <p className="text-lg sm:text-xl font-semibold text-[#f28e63] mt-2">
                  {nourishMealDrivesProject.tagline}
                </p>
                <p className="text-xs sm:text-sm text-teal-200/90 font-medium mt-1">
                  {nourishMealDrivesProject.subtitle}
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={250}>
                <p className="text-sm sm:text-base text-teal-50/90 leading-relaxed font-normal pt-2">
                  {nourishMealDrivesProject.lead1}
                </p>
                <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed font-normal mt-2">
                  {nourishMealDrivesProject.lead2}
                </p>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal direction="up" delay={300}>
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <RippleButton
                    onClick={onDonateClick}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-xs sm:text-sm shadow-lg shadow-black/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                  >
                    <Heart className="w-4 h-4 fill-white text-white" />
                    <span>{nourishMealDrivesProject.primaryCta}</span>
                    <ArrowRight className="w-4 h-4 ml-0.5" />
                  </RippleButton>

                  <button
                    type="button"
                    onClick={onPartnerClick}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-teal-300/40 hover:border-teal-200 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                  >
                    <Users className="w-4 h-4 text-teal-200" />
                    <span>{nourishMealDrivesProject.secondaryCta}</span>
                  </button>

                  <button
                    type="button"
                    onClick={onDonateClick}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-medium text-xs sm:text-sm backdrop-blur-md transition-all cursor-pointer"
                  >
                    <Utensils className="w-3.5 h-3.5 text-[#f28e63]" />
                    <span>{nourishMealDrivesProject.helpFeedCta}</span>
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="right" delay={200}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] group">
                  <img
                    src={nourishMealDrivesProject.image}
                    alt="Nourish with Love Meal Drives"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07362a]/90 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-[11px] font-bold text-[#f28e63] tracking-wider uppercase">
                      Nutrition & Joy Initiative
                    </span>
                    <p className="text-xs sm:text-sm font-medium mt-0.5 text-teal-100">
                      Nutritious meals, clean water & encouragement for children in Sri Lanka.
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

        {/* 1. OUR PURPOSE & MEAL PACKAGE HIGHLIGHT */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Purpose (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <ScrollReveal direction="up" delay={100}>
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#ea580c] uppercase mb-2">
                <span className="w-6 h-[2px] bg-[#ea580c] inline-block" />
                <span>{nourishMealDrivesProject.purpose.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                {nourishMealDrivesProject.purpose.title}
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                {nourishMealDrivesProject.purpose.description1}
              </p>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium mt-3">
                {nourishMealDrivesProject.purpose.description2}
              </p>
            </ScrollReveal>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#0c3930]">
              <HeartHandshake className="w-4 h-4 text-[#ea580c]" />
              <span>Working alongside donors, churches, and community partners</span>
            </div>
          </div>

          {/* Meal Package Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0c3930] via-[#094036] to-[#0c3930] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

            <ScrollReveal direction="up" delay={150}>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold tracking-widest text-[#f28e63] uppercase mb-3">
                  <Utensils className="w-3.5 h-3.5 text-[#f28e63]" />
                  <span>{nourishMealDrivesProject.mealPackage.badge}</span>
                </div>

                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">
                    {nourishMealDrivesProject.mealPackage.costPerChild}
                  </span>
                  <span className="text-xs sm:text-sm text-teal-200">
                    {nourishMealDrivesProject.mealPackage.costSubtitle}
                  </span>
                </div>

                <div className="mt-5 space-y-2.5">
                  {nourishMealDrivesProject.mealPackage.items.map((it, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/10 border border-white/10 text-xs sm:text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#f28e63] shrink-0" />
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <p className="relative z-10 text-[11px] text-teal-200/80 italic mt-5 leading-relaxed">
              {nourishMealDrivesProject.mealPackage.note}
            </p>
          </div>
        </section>

        {/* 2. WHAT WE AIM TO PROVIDE (5 Core Pillars) */}
        <section className="space-y-8">
          <ScrollReveal direction="up" delay={100}>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fdf0e8] text-[11px] font-semibold text-[#ea580c] mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{nourishMealDrivesProject.whatWeProvide.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                {nourishMealDrivesProject.whatWeProvide.title}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {nourishMealDrivesProject.whatWeProvide.items.map((prov, idx) => (
              <ScrollReveal key={prov.title} direction="up" delay={120 + idx * 70}>
                <TiltCard maxTilt={4} scale={1.01} className="h-full">
                  <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      <div className="w-11 h-11 rounded-2xl bg-[#fdf0e8] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        {renderIcon(prov.icon)}
                      </div>
                      <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#ea580c] transition-colors mb-2">
                        {prov.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {prov.desc}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 3. OUR GROWTH PLAN (Phased Outreach Milestones) */}
        <section className="bg-gradient-to-br from-[#0c3930] via-[#072d24] to-[#041a15] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <ScrollReveal direction="up" delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold tracking-widest text-[#f28e63] uppercase">
                <Calendar className="w-3.5 h-3.5 text-[#f28e63]" />
                <span>{nourishMealDrivesProject.growthPlan.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-2">
                {nourishMealDrivesProject.growthPlan.title}
              </h2>

              <p className="text-xs sm:text-sm text-teal-100/90 max-w-2xl leading-relaxed mt-2">
                {nourishMealDrivesProject.growthPlan.intro}
              </p>
            </ScrollReveal>

            {/* Phase Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {nourishMealDrivesProject.growthPlan.phases.map((ph, idx) => (
                <ScrollReveal key={ph.phase} direction="up" delay={150 + idx * 80}>
                  <div className="bg-white/10 hover:bg-white/15 backdrop-blur-lg border border-white/15 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#f28e63]">
                          {ph.phase}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                        {ph.target}
                      </h3>

                      <p className="text-xs text-teal-200/80 leading-relaxed font-normal mb-4">
                        {ph.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 space-y-1 text-xs">
                      <div className="flex items-center justify-between text-teal-100">
                        <span className="text-[11px] text-teal-300">Monthly Goal:</span>
                        <span className="font-bold font-mono text-[#f28e63]">{ph.monthly}</span>
                      </div>
                      <div className="flex items-center justify-between text-teal-100">
                        <span className="text-[11px] text-teal-300">Annual Goal:</span>
                        <span className="font-bold font-mono text-white">{ph.annual}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <p className="text-[11px] text-teal-200/80 italic leading-relaxed">
              {nourishMealDrivesProject.growthPlan.note}
            </p>
          </div>
        </section>

        {/* 4. FUNDING & GIVING OPPORTUNITIES (Donation Tiers Table) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-200/80 shadow-md space-y-8">
          <ScrollReveal direction="up" delay={100}>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdf2ec] text-[11px] font-semibold text-[#ea580c] mb-2.5">
                <DollarSign className="w-3.5 h-3.5" />
                <span>{nourishMealDrivesProject.givingOpportunities.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
                {nourishMealDrivesProject.givingOpportunities.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
                {nourishMealDrivesProject.givingOpportunities.intro}
              </p>
            </div>
          </ScrollReveal>

          {/* Giving Tiers Table */}
          <ScrollReveal direction="up" delay={150}>
            <div className="overflow-x-auto rounded-2xl border border-gray-200/80">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#0c3930] text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider">
                    <th className="py-3.5 px-5 sm:px-8">Donation Amount</th>
                    <th className="py-3.5 px-5 sm:px-8 text-right">Estimated Meal Packages</th>
                    <th className="py-3.5 px-5 sm:px-8 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {nourishMealDrivesProject.givingOpportunities.tiers.map((tier, index) => (
                    <tr
                      key={tier.amount}
                      className={index % 2 === 0 ? 'bg-white hover:bg-orange-50/40 transition-colors' : 'bg-gray-50/50 hover:bg-orange-50/40 transition-colors'}
                    >
                      <td className="py-3.5 px-5 sm:px-8 font-extrabold font-mono text-gray-900 text-sm sm:text-base">
                        {tier.amount}
                      </td>
                      <td className="py-3.5 px-5 sm:px-8 text-right font-semibold text-[#ea580c]">
                        {tier.meals}
                      </td>
                      <td className="py-3.5 px-5 sm:px-8 text-right">
                        <button
                          type="button"
                          onClick={onDonateClick}
                          className="px-3.5 py-1.5 rounded-full bg-[#0c3930] hover:bg-[#ea580c] text-white text-[11px] font-bold transition-colors cursor-pointer"
                        >
                          Sponsor
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 mt-4 leading-relaxed font-normal">
              {nourishMealDrivesProject.givingOpportunities.footerText}
            </p>
          </ScrollReveal>
        </section>

        {/* 5. HOW YOU CAN MAKE A DIFFERENCE */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm space-y-6">
          <ScrollReveal direction="up" delay={100}>
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#ea580c] uppercase mb-2">
              <span className="w-6 h-[2px] bg-[#ea580c] inline-block" />
              <span>{nourishMealDrivesProject.makeDifference.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              {nourishMealDrivesProject.makeDifference.title}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {nourishMealDrivesProject.makeDifference.points.map((pt, idx) => (
              <ScrollReveal key={pt.title} direction="up" delay={120 + idx * 70}>
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#faf8f5] to-[#fff7ed] border border-orange-100/70 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#ea580c] uppercase tracking-wider mb-1">
                      0{idx + 1}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-orange-200/50">
                    <button
                      type="button"
                      onClick={pt.title === 'Partner With Us' ? onPartnerClick : onDonateClick}
                      className="text-xs font-bold text-[#0c3930] hover:text-[#ea580c] transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Take Action</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#0c3930]/5 text-center text-xs sm:text-sm font-semibold text-[#0c3930]">
            {nourishMealDrivesProject.makeDifference.closing}
          </div>
        </section>

        {/* 6. OUR COMMITMENT TO RESPONSIBLE GIVING */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
          <ScrollReveal direction="up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 space-y-2">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#ea580c] uppercase">
                  <ShieldCheck className="w-4 h-4 text-[#ea580c]" />
                  <span>{nourishMealDrivesProject.commitment.badge}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {nourishMealDrivesProject.commitment.title}
                </h3>
              </div>

              <div className="md:col-span-7 space-y-3">
                <div className="p-4 rounded-xl bg-orange-50/40 border border-orange-900/10 text-xs text-gray-700 leading-relaxed">
                  {nourishMealDrivesProject.commitment.p1}
                </div>
                <div className="p-4 rounded-xl bg-orange-50/40 border border-orange-900/10 text-xs text-gray-700 leading-relaxed">
                  {nourishMealDrivesProject.commitment.p2}
                </div>
                <p className="text-[11px] text-gray-400 italic">
                  {nourishMealDrivesProject.commitment.note}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 7. CLOSING CTA BANNER */}
        <section className="bg-gradient-to-r from-[#0c3930] via-[#094036] to-[#0c3930] rounded-3xl p-8 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden">
          <ScrollReveal direction="zoom" delay={100}>
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {nourishMealDrivesProject.closingCta.title}
              </h2>

              <p className="text-xs sm:text-sm text-teal-100 leading-relaxed font-medium">
                {nourishMealDrivesProject.closingCta.lead}
              </p>

              <div className="pt-2 text-base sm:text-lg font-bold text-[#f28e63]">
                {nourishMealDrivesProject.closingCta.tagline}
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <RippleButton
                  onClick={onDonateClick}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-xs sm:text-sm shadow-xl shadow-black/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white text-white" />
                  <span>{nourishMealDrivesProject.closingCta.primaryBtn}</span>
                </RippleButton>

                <button
                  type="button"
                  onClick={onPartnerClick}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-teal-200/40 hover:border-teal-200 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  <Users className="w-4 h-4 text-teal-200" />
                  <span>{nourishMealDrivesProject.closingCta.secondaryBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={onDonateClick}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm backdrop-blur-md transition-all cursor-pointer"
                >
                  <Utensils className="w-4 h-4 text-[#f28e63]" />
                  <span>{nourishMealDrivesProject.closingCta.tertiaryBtn}</span>
                </button>
              </div>

              <div className="pt-6 border-t border-white/15 text-[11px] text-teal-200/80 font-medium tracking-wide">
                Love In Fellowship & Truth Foundation — Nourishing Children, Inspiring Hope.
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
