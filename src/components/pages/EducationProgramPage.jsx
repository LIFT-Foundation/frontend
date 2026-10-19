import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Users,
  School,
  MapPin,
  Building2,
  CheckCircle2,
  DollarSign,
  ShieldCheck,
  HeartHandshake,
  BookOpen,
  Calendar,
  Layers
} from 'lucide-react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ParticleBackground from '../effects/ParticleBackground';
import ScrollReveal from '../effects/ScrollReveal';
import RippleButton from '../effects/RippleButton';
import TiltCard from '../effects/TiltCard';
import { siteData } from '../../data/content';

export default function EducationProgramPage({
  onBackToHome,
  onDonateClick,
  onPartnerClick,
}) {
  const { educationProgram } = siteData;

  const renderRoadmapIcon = (icon) => {
    const props = { className: "w-5 h-5 text-[#0d7a64]" };
    switch (icon) {
      case 'school':
        return <School {...props} />;
      case 'map-pin':
        return <MapPin {...props} />;
      case 'building-2':
        return <Building2 {...props} />;
      default:
        return <Layers {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col font-sans selection:bg-teal-200 selection:text-teal-950">
      {/* Top Navigation */}
      <div className="bg-[#0b332c]">
        <Navbar onDonateClick={onDonateClick} />
      </div>

      {/* Hero Banner with Full-Width Background Image (matching Christmas Outreach style) */}
      <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] bg-[#07241e] text-white overflow-hidden border-b border-teal-900/60 flex items-center">
        {/* Full-bleed Background Image with Right Alignment */}
        <div className="absolute inset-0 z-0">
          <img
            src={educationProgram.image}
            alt="Divisional Free Education Centres Plan - LIFT Foundation Sri Lanka"
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0d7a64]/90 backdrop-blur-md text-[11px] font-extrabold tracking-wider text-white uppercase shadow-md border border-teal-400/20">
                <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                <span>{educationProgram.badge}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1] drop-shadow-sm">
                {educationProgram.title}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-[#4ade80] mt-2 drop-shadow-sm">
                {educationProgram.tagline}
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-teal-200/90 font-medium mt-1">
                <MapPin className="w-4 h-4 text-[#ea580c] shrink-0" />
                <span>{educationProgram.subtitle}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={250}>
              <p className="text-xs sm:text-sm text-teal-50/90 leading-relaxed font-normal pt-1 max-w-xl">
                {educationProgram.about.lead1}
              </p>
              <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed font-normal mt-2 max-w-xl">
                {educationProgram.about.lead2}
              </p>
              <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed font-normal mt-2 max-w-xl">
                {educationProgram.about.lead3}
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal direction="up" delay={300}>
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <RippleButton
                  onClick={onDonateClick}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0d7a64] hover:bg-[#0b6352] text-white font-bold text-xs sm:text-sm shadow-xl shadow-teal-950/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white text-white" />
                  <span>{educationProgram.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </RippleButton>

                <button
                  type="button"
                  onClick={onPartnerClick}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/30 hover:border-white/60 bg-black/30 hover:bg-black/50 text-white font-semibold text-xs sm:text-sm backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer shadow-md"
                >
                  <Users className="w-4 h-4 text-white" />
                  <span>{educationProgram.secondaryCta}</span>
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Main Page Content Body */}
      <main className="flex-1 py-14 sm:py-20 px-4 sm:px-8 max-w-6xl mx-auto w-full space-y-14 sm:space-y-20">

        {/* 1. OUR PURPOSE */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)]">
          <ScrollReveal direction="up" delay={100}>
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#0d7a64] uppercase mb-2">
              <span className="w-6 h-[2px] bg-[#0d7a64] inline-block" />
              <span>{educationProgram.purpose.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-5">
              Overcoming Barriers to Learning
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#faf8f5] to-[#f0fdf4] border border-gray-100 flex flex-col justify-center">
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  {educationProgram.purpose.p1}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0c3930]/5 border border-[#0c3930]/10 flex flex-col justify-between">
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  {educationProgram.purpose.p2}
                </p>
                <div className="mt-4 pt-3 border-t border-[#0c3930]/10 flex items-center gap-2 text-xs font-semibold text-[#0c3930]">
                  <CheckCircle2 className="w-4 h-4 text-[#0d7a64]" />
                  <span>Dignity, care, and Christian compassion</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 2. OUR DEVELOPMENT PLAN */}
        <section className="space-y-8">
          <ScrollReveal direction="up" delay={100}>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#e2f3ee] text-[11px] font-semibold text-[#0d7a64] mb-2.5">
                <Building2 className="w-3.5 h-3.5" />
                <span>{educationProgram.developmentPlan.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                {educationProgram.developmentPlan.title}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationProgram.developmentPlan.points.map((pt, idx) => (
              <ScrollReveal key={pt.label} direction="up" delay={120 + idx * 80}>
                <TiltCard maxTilt={4} scale={1.01} className="h-full">
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#e2f3ee] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        {renderRoadmapIcon(pt.icon)}
                      </div>
                      <div className="text-[11px] font-bold text-[#0d7a64] uppercase tracking-wider mb-1">
                        {pt.label}
                      </div>
                      <p className="text-sm font-semibold text-gray-900 leading-relaxed mt-2">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 3. MONTHLY SUPPORT PLAN PER CENTRE */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-200/80 shadow-md space-y-8">
          <ScrollReveal direction="up" delay={100}>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdf2ec] text-[11px] font-semibold text-[#ea580c] mb-2.5">
                <DollarSign className="w-3.5 h-3.5" />
                <span>{educationProgram.monthlySupportPlan.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
                Monthly Support Per Centre
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                {educationProgram.monthlySupportPlan.intro}
              </p>
            </div>
          </ScrollReveal>

          {/* Monthly Table */}
          <ScrollReveal direction="up" delay={150}>
            <div className="overflow-x-auto rounded-2xl border border-gray-200/80">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#0c3930] text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider">
                    <th className="py-3.5 px-5 sm:px-8">Support Category</th>
                    <th className="py-3.5 px-5 sm:px-8 text-right">Monthly (LKR)</th>
                    <th className="py-3.5 px-5 sm:px-8 text-right">Monthly (USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {educationProgram.monthlySupportPlan.perCentreTable.map((row, idx) => (
                    <tr key={row.category} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="py-3.5 px-5 sm:px-8 font-medium text-gray-900">{row.category}</td>
                      <td className="py-3.5 px-5 sm:px-8 text-right font-mono text-gray-700">{row.lkr}</td>
                      <td className="py-3.5 px-5 sm:px-8 text-right font-mono text-[#0d7a64] font-semibold">{row.usd}</td>
                    </tr>
                  ))}
                  <tr className="bg-emerald-50/60 font-bold border-t-2 border-emerald-900/20 text-gray-900">
                    <td className="py-3.5 px-5 sm:px-8 font-extrabold text-[#0c3930]">Total Per Centre</td>
                    <td className="py-3.5 px-5 sm:px-8 text-right font-mono font-extrabold text-[#0c3930]">{educationProgram.monthlySupportPlan.perCentreTotal.lkr}</td>
                    <td className="py-3.5 px-5 sm:px-8 text-right font-mono font-extrabold text-[#0d7a64]">{educationProgram.monthlySupportPlan.perCentreTotal.usd}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* 2 Allocations Explanations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {educationProgram.monthlySupportPlan.allocations.map((alloc) => (
              <div key={alloc.num} className="p-6 rounded-2xl bg-gray-50/80 border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#0d7a64] uppercase tracking-wider">Allocation {alloc.num}</span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100/80 text-[#0c3930]">{alloc.amount}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{alloc.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">{alloc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. ANNUAL SUPPORT PLAN & FUNDING REQUIREMENTS FOR 9 CENTRES */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Annual Per Centre (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-5">
            <div>
              <div className="text-[11px] font-bold text-[#ea580c] uppercase tracking-wider mb-1">
                {educationProgram.annualSupportPlan.badge}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Annual Support Per Centre
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                {educationProgram.annualSupportPlan.intro}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200/80 overflow-hidden">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#0c3930] text-white font-bold">
                    <th className="py-2.5 px-4">Support Category</th>
                    <th className="py-2.5 px-4 text-right">Annual (LKR)</th>
                    <th className="py-2.5 px-4 text-right">Annual (USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {educationProgram.annualSupportPlan.table.map((row) => (
                    <tr key={row.category} className="hover:bg-gray-50">
                      <td className="py-2.5 px-4 font-medium text-gray-800">{row.category}</td>
                      <td className="py-2.5 px-4 text-right font-mono text-gray-600">{row.lkr}</td>
                      <td className="py-2.5 px-4 text-right font-mono font-semibold text-[#0d7a64]">{row.usd}</td>
                    </tr>
                  ))}
                  <tr className="bg-emerald-50/70 font-bold border-t border-emerald-900/20">
                    <td className="py-3 px-4 font-extrabold text-[#0c3930]">Total Annual Support</td>
                    <td className="py-3 px-4 text-right font-mono font-extrabold text-[#0c3930]">{educationProgram.annualSupportPlan.total.lkr}</td>
                    <td className="py-3 px-4 text-right font-mono font-extrabold text-[#0d7a64]">{educationProgram.annualSupportPlan.total.usd}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Funding for 9 Centres (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-5">
            <div>
              <div className="text-[11px] font-bold text-[#0d7a64] uppercase tracking-wider mb-1">
                {educationProgram.nineCentresFunding.badge}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Initial Phase (9 Education Centres)
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                {educationProgram.nineCentresFunding.intro}
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200/80">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#0c3930] text-white font-bold">
                    <th className="py-2.5 px-3">Support Category</th>
                    <th className="py-2.5 px-3 text-right">Mo. (LKR)</th>
                    <th className="py-2.5 px-3 text-right">Mo. (USD)</th>
                    <th className="py-2.5 px-3 text-right">Yr. (LKR)</th>
                    <th className="py-2.5 px-3 text-right">Yr. (USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {educationProgram.nineCentresFunding.table.map((row) => (
                    <tr key={row.category} className="hover:bg-gray-50">
                      <td className="py-2.5 px-3 font-medium text-gray-800">{row.category}</td>
                      <td className="py-2.5 px-3 text-right font-mono text-gray-600">{row.monthlyLkr}</td>
                      <td className="py-2.5 px-3 text-right font-mono text-[#0d7a64] font-semibold">{row.monthlyUsd}</td>
                      <td className="py-2.5 px-3 text-right font-mono text-gray-600">{row.annualLkr}</td>
                      <td className="py-2.5 px-3 text-right font-mono text-[#0d7a64] font-semibold">{row.annualUsd}</td>
                    </tr>
                  ))}
                  <tr className="bg-emerald-50/70 font-bold border-t border-emerald-900/20">
                    <td className="py-3 px-3 font-extrabold text-[#0c3930]">Total Required</td>
                    <td className="py-3 px-3 text-right font-mono font-extrabold text-[#0c3930]">{educationProgram.nineCentresFunding.total.monthlyLkr}</td>
                    <td className="py-3 px-3 text-right font-mono font-extrabold text-[#0d7a64]">{educationProgram.nineCentresFunding.total.monthlyUsd}</td>
                    <td className="py-3 px-3 text-right font-mono font-extrabold text-[#0c3930]">{educationProgram.nineCentresFunding.total.annualLkr}</td>
                    <td className="py-3 px-3 text-right font-mono font-extrabold text-[#0d7a64]">{educationProgram.nineCentresFunding.total.annualUsd}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5. OUR PROPOSED FUNDING GOAL STAT BANNER */}
        <section className="bg-gradient-to-br from-[#0c3930] via-[#094036] to-[#0c3930] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[11px] font-bold text-[#4ade80] uppercase tracking-wider">
                <DollarSign className="w-3.5 h-3.5" />
                <span>{educationProgram.fundingGoal.badge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                9 Centres Funding Target
              </h3>
              <p className="text-xs sm:text-sm text-teal-100 max-w-xl leading-relaxed">
                {educationProgram.fundingGoal.desc}
              </p>
              <div className="text-[11px] text-teal-200/80 font-mono">
                {educationProgram.fundingGoal.equivalent}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 shrink-0 text-right md:min-w-[240px]">
              <div className="text-xs text-teal-200 uppercase font-semibold">Monthly Goal</div>
              <div className="text-2xl font-black text-[#4ade80] mt-0.5">{educationProgram.fundingGoal.monthlyUsd}</div>
              <div className="text-xs text-teal-200 uppercase font-semibold mt-3">Annual Goal</div>
              <div className="text-2xl font-black text-white mt-0.5">{educationProgram.fundingGoal.annualUsd}</div>
            </div>
          </div>
        </section>

        {/* 6. HOW YOUR SUPPORT MAKES A DIFFERENCE & WHAT YOUR SUPPORT CAN ACHIEVE */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* How support makes difference */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-bold text-[#ea580c] uppercase tracking-wider mb-2">
                {educationProgram.howSupportMatters.badge}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Giving Impact Breakdown
              </h3>
              <div className="space-y-2.5">
                {educationProgram.howSupportMatters.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 text-xs sm:text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What support can achieve */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-bold text-[#0d7a64] uppercase tracking-wider mb-2">
                {educationProgram.whatSupportAchieves.badge}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {educationProgram.whatSupportAchieves.title}
              </h3>
              <div className="space-y-2.5">
                {educationProgram.whatSupportAchieves.items.map((it, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/50 text-xs sm:text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0d7a64] shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. OUR COMMITMENT TO TRANSPARENCY */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
          <ScrollReveal direction="up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 space-y-2">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#0d7a64] uppercase">
                  <ShieldCheck className="w-4 h-4 text-[#0d7a64]" />
                  <span>{educationProgram.transparency.badge}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {educationProgram.transparency.title}
                </h3>
              </div>

              <div className="md:col-span-7 space-y-3.5">
                <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-900/10 text-xs text-gray-700 leading-relaxed">
                  {educationProgram.transparency.p1}
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-900/10 text-xs text-gray-700 leading-relaxed">
                  {educationProgram.transparency.p2}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 8. PARTNER WITH US / CLOSING CTA */}
        <section className="bg-gradient-to-r from-[#0c3930] via-[#094036] to-[#0c3930] rounded-3xl p-8 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden">
          <ScrollReveal direction="zoom" delay={100}>
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {educationProgram.partnerWithUs.title}
              </h2>

              <p className="text-xs sm:text-sm text-teal-100 leading-relaxed font-medium">
                {educationProgram.partnerWithUs.p1}
              </p>
              <p className="text-xs sm:text-sm text-teal-200/90 leading-relaxed">
                {educationProgram.partnerWithUs.p2}
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <RippleButton
                  onClick={onDonateClick}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0d7a64] hover:bg-[#0b6352] text-white font-bold text-xs sm:text-sm shadow-xl shadow-black/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white text-white" />
                  <span>{educationProgram.partnerWithUs.primaryBtn}</span>
                </RippleButton>

                <button
                  type="button"
                  onClick={onPartnerClick}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-teal-200/40 hover:border-teal-200 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  <Users className="w-4 h-4 text-teal-200" />
                  <span>{educationProgram.partnerWithUs.secondaryBtn}</span>
                </button>
              </div>

              <div className="pt-6 border-t border-white/15 text-[11px] text-teal-200/80 font-medium tracking-wide">
                {educationProgram.partnerWithUs.footerNote}
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
