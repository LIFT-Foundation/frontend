import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Users,
  Sparkles,
  MapPin,
  Calendar,
  Gift,
  DollarSign,
  CheckCircle2,
  Share2,
  HeartHandshake,
  Building,
  Check
} from 'lucide-react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ParticleBackground from '../effects/ParticleBackground';
import ScrollReveal from '../effects/ScrollReveal';
import RippleButton from '../effects/RippleButton';
import TiltCard from '../effects/TiltCard';
import { siteData } from '../../data/content';

export default function ChristmasOutreachPage({
  onBackToHome,
  onDonateClick,
  onPartnerClick,
}) {
  const { christmasOutreachProject } = siteData;
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Christmas Outreach 2026 - LIFT Foundation',
        text: 'Join Love In Fellowship & Truth Foundation in bringing hope, joy, and practical support to children and vulnerable communities across Sri Lanka this Christmas.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const renderActivityIcon = (icon) => {
    const props = { className: "w-5 h-5 text-[#ea580c]" };
    switch (icon) {
      case 'heart':
        return <Heart {...props} />;
      case 'users':
        return <Users {...props} />;
      case 'gift':
        return <Gift {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  const renderOverviewIcon = (icon) => {
    const props = { className: "w-5 h-5 text-[#ea580c]" };
    switch (icon) {
      case 'users':
        return <Users {...props} />;
      case 'calendar':
        return <Calendar {...props} />;
      case 'heart':
        return <Heart {...props} />;
      case 'map-pin':
        return <MapPin {...props} />;
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
                  <span>{christmasOutreachProject.badge}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15]">
                  {christmasOutreachProject.title}
                </h1>
                <p className="text-lg sm:text-xl font-semibold text-[#f28e63] mt-2">
                  {christmasOutreachProject.tagline}
                </p>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-teal-200/90 font-medium mt-1">
                  <MapPin className="w-4 h-4 text-[#f28e63] shrink-0" />
                  <span>{christmasOutreachProject.subtitle}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={250}>
                <p className="text-sm sm:text-base text-teal-50/90 leading-relaxed font-normal pt-2">
                  {christmasOutreachProject.lead1}
                </p>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal direction="up" delay={300}>
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <RippleButton
                    onClick={onDonateClick}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-xs sm:text-sm shadow-lg shadow-black/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                  >
                    <Heart className="w-4 h-4 fill-white text-white" />
                    <span>{christmasOutreachProject.primaryCta}</span>
                    <ArrowRight className="w-4 h-4 ml-0.5" />
                  </RippleButton>

                  <button
                    type="button"
                    onClick={onPartnerClick}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-teal-300/40 hover:border-teal-200 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                  >
                    <Users className="w-4 h-4 text-teal-200" />
                    <span>{christmasOutreachProject.secondaryCta}</span>
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="right" delay={200}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] group">
                  <img
                    src={christmasOutreachProject.image}
                    alt="Christmas Outreach 2026 - LIFT Foundation Sri Lanka"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07362a]/90 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-[11px] font-bold text-[#f28e63] tracking-wider uppercase">
                      Special Festive Initiative
                    </span>
                    <p className="text-xs sm:text-sm font-medium mt-0.5 text-teal-100">
                      Spreading Joy & Hope to 1,950+ Beneficiaries
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

        {/* 1. ABOUT THE CAMPAIGN */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)]">
          <ScrollReveal direction="up" delay={100}>
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#ea580c] uppercase mb-2">
              <span className="w-6 h-[2px] bg-[#ea580c] inline-block" />
              <span>{christmasOutreachProject.about.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-5">
              {christmasOutreachProject.about.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#faf8f5] to-[#fef3c7]/30 border border-amber-100 flex flex-col justify-center">
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  {christmasOutreachProject.about.description1}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0c3930]/5 border border-[#0c3930]/10 flex flex-col justify-between">
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  {christmasOutreachProject.about.description2}
                </p>
                <div className="mt-4 pt-3 border-t border-[#0c3930]/10 flex items-center gap-2 text-xs font-semibold text-[#0c3930]">
                  <CheckCircle2 className="w-4 h-4 text-[#ea580c]" />
                  <span>Sharing meals, gifts, care packages, and Christ's love</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 2. OUR CHRISTMAS OUTREACH ACTIVITIES OVERVIEW & STATS */}
        <section className="space-y-8">
          <ScrollReveal direction="up" delay={100}>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fdf0e8] text-[11px] font-semibold text-[#ea580c] mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{christmasOutreachProject.overview.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                {christmasOutreachProject.overview.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed font-medium">
                {christmasOutreachProject.overview.lead}
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {christmasOutreachProject.overview.stats.map((stat, idx) => (
              <ScrollReveal key={stat.label} direction="up" delay={120 + idx * 80}>
                <TiltCard maxTilt={4} scale={1.01} className="h-full">
                  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200/70 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      <div className="w-11 h-11 rounded-2xl bg-orange-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        {renderOverviewIcon(stat.icon)}
                      </div>
                      <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        {stat.label}
                      </div>
                      <p className="text-base sm:text-lg font-extrabold text-gray-900 group-hover:text-[#ea580c] transition-colors leading-tight">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {stat.unit}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          {/* 4 Detailed Activities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {christmasOutreachProject.activities.map((act, idx) => (
              <ScrollReveal key={act.id} direction="up" delay={150 + idx * 80}>
                <TiltCard maxTilt={4} scale={1.01} className="h-full">
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200/80 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-11 h-11 rounded-2xl bg-[#ea580c]/10 flex items-center justify-center text-[#ea580c] group-hover:scale-110 transition-transform">
                          {renderActivityIcon(act.icon)}
                        </div>
                        <span className="text-xs font-black text-gray-300 group-hover:text-[#ea580c] transition-colors font-mono">
                          {act.number}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#0c3930] transition-colors leading-snug mb-2">
                        {act.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4">
                        {act.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Planned Reach:</span>
                      <span className="text-xs font-bold text-[#ea580c] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-100">
                        {act.plannedReach}
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Activities Disclaimer */}
          <p className="text-center text-[11px] text-gray-500 italic max-w-2xl mx-auto pt-2">
            {christmasOutreachProject.overview.disclaimer}
          </p>
        </section>

        {/* 3. OUR FUNDRAISING GOAL & DETAILED BREAKDOWN */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-200/80 shadow-md space-y-8">
          <ScrollReveal direction="up" delay={100}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-100">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdf2ec] text-[11px] font-semibold text-[#ea580c] mb-2.5">
                  <DollarSign className="w-3.5 h-3.5" />
                  <span>{christmasOutreachProject.fundingGoal.badge}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
                  {christmasOutreachProject.fundingGoal.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
                  {christmasOutreachProject.fundingGoal.description}
                </p>
              </div>

              {/* Big Goal Stat Badge */}
              <div className="bg-gradient-to-br from-[#0c3930] to-[#082822] text-white p-5 sm:p-6 rounded-2xl shadow-lg shrink-0 text-right md:min-w-[260px]">
                <div className="text-[11px] text-teal-200 uppercase tracking-wider font-semibold">Total Fundraising Target</div>
                <div className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {christmasOutreachProject.fundingGoal.totalGoalUsd}
                </div>
                <div className="text-xs font-semibold text-[#f28e63] mt-0.5">
                  Estimated 2026 Campaign Budget
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
                    <th className="py-3.5 px-4 sm:px-6">Campaign Component</th>
                    <th className="py-3.5 px-4 sm:px-6">Description / Purpose</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right">Target Amount (USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {christmasOutreachProject.fundingGoal.breakdown.map((row, index) => (
                    <tr
                      key={row.component}
                      className={index % 2 === 0 ? 'bg-white hover:bg-orange-50/30 transition-colors' : 'bg-gray-50/50 hover:bg-orange-50/30 transition-colors'}
                    >
                      <td className="py-4 px-4 sm:px-6 font-bold text-gray-900 whitespace-nowrap">
                        {row.component}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-gray-600 text-xs leading-relaxed max-w-md">
                        {row.detail}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-right font-mono text-[#ea580c] font-bold text-sm whitespace-nowrap">
                        {row.amount}
                      </td>
                    </tr>
                  ))}
                  {/* Total Row */}
                  <tr className="bg-gradient-to-r from-teal-900/10 to-orange-900/10 font-bold border-t-2 border-teal-900/20 text-gray-900">
                    <td colSpan={2} className="py-4 px-4 sm:px-6 text-sm sm:text-base font-extrabold text-[#0c3930]">
                      Total Fundraising Goal
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right font-mono text-base sm:text-lg font-black text-[#ea580c] whitespace-nowrap">
                      {christmasOutreachProject.fundingGoal.totalAmount}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Currency Note */}
            <p className="text-[11px] text-gray-500 italic mt-3 leading-relaxed">
              {christmasOutreachProject.fundingGoal.note}
            </p>
          </ScrollReveal>
        </section>

        {/* 4. THIS CAMPAIGN WILL HELP PROVIDE */}
        <section className="bg-gradient-to-br from-[#0c3930] to-[#07241e] rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ea580c]/10 rounded-full blur-3xl pointer-events-none" />

          <ScrollReveal direction="up" delay={100}>
            <div className="relative z-10 text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold tracking-widest text-[#f28e63] uppercase mb-3">
                <Gift className="w-3.5 h-3.5" />
                <span>{christmasOutreachProject.provisions.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {christmasOutreachProject.provisions.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
              {christmasOutreachProject.provisions.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#f28e63]/50 hover:bg-white/15 transition-all duration-300 flex items-center gap-3.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#ea580c] flex items-center justify-center shrink-0 shadow-md">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-bold text-white leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* 5. HOW YOU CAN HELP (4 Action Cards) */}
        <section className="space-y-8">
          <ScrollReveal direction="up" delay={100}>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fdf0e8] text-[11px] font-semibold text-[#ea580c] mb-2.5">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>{christmasOutreachProject.howToHelp.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                {christmasOutreachProject.howToHelp.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-2.5 leading-relaxed font-medium">
                {christmasOutreachProject.howToHelp.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {christmasOutreachProject.howToHelp.actions.map((act, idx) => (
              <ScrollReveal key={act.id} direction="up" delay={120 + idx * 80}>
                <TiltCard maxTilt={5} scale={1.02} className="h-full">
                  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform ${
                        idx === 0 ? 'bg-[#ea580c]' : idx === 1 ? 'bg-[#0d7a64]' : idx === 2 ? 'bg-[#6d44b8]' : 'bg-[#0284c7]'
                      }`}>
                        {act.type === 'donate' && <Heart className="w-6 h-6 text-white stroke-[2.2]" />}
                        {act.type === 'sponsor' && <Gift className="w-6 h-6 text-white stroke-[2.2]" />}
                        {act.type === 'partner' && <Users className="w-6 h-6 text-white stroke-[2.2]" />}
                        {act.type === 'share' && <Share2 className="w-6 h-6 text-white stroke-[2.2]" />}
                      </div>

                      <h3 className="text-base font-bold text-gray-900 group-hover:text-[#0c3930] transition-colors mb-2 leading-snug">
                        {act.title}
                      </h3>

                      <p className="text-xs text-gray-500 leading-relaxed mb-6">
                        {act.description}
                      </p>
                    </div>

                    <div>
                      {act.type === 'donate' ? (
                        <RippleButton
                          onClick={onDonateClick}
                          className="w-full py-2.5 px-3 rounded-xl bg-gray-900 hover:bg-[#ea580c] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm group/btn cursor-pointer"
                        >
                          <span>{act.btnText}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </RippleButton>
                      ) : act.type === 'sponsor' ? (
                        <RippleButton
                          onClick={onDonateClick}
                          className="w-full py-2.5 px-3 rounded-xl bg-[#0c3930] hover:bg-[#07241e] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm group/btn cursor-pointer"
                        >
                          <span>{act.btnText}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </RippleButton>
                      ) : act.type === 'partner' ? (
                        <button
                          type="button"
                          onClick={onPartnerClick}
                          className="w-full py-2.5 px-3 rounded-xl bg-teal-950 hover:bg-teal-900 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm group/btn cursor-pointer"
                        >
                          <span>{act.btnText}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleShare}
                          className="w-full py-2.5 px-3 rounded-xl border border-gray-200 hover:border-[#ea580c] hover:bg-orange-50 text-gray-700 hover:text-[#ea580c] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                        >
                          {copiedShare ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-700 font-bold">Link Copied!</span>
                            </>
                          ) : (
                            <>
                              <Share2 className="w-3.5 h-3.5" />
                              <span>{act.btnText}</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 6. OUR COMMITMENT & CLOSING CTA BANNER */}
        <section className="bg-gradient-to-r from-[#0c3930] via-[#094036] to-[#0c3930] rounded-3xl p-8 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden">
          <ScrollReveal direction="zoom" delay={100}>
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold tracking-widest text-[#f28e63] uppercase mb-2">
                <span>{christmasOutreachProject.commitment.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {christmasOutreachProject.commitment.title}
              </h2>

              <p className="text-xs sm:text-sm text-teal-100 leading-relaxed font-normal pt-1">
                {christmasOutreachProject.commitment.description}
              </p>

              <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                <RippleButton
                  onClick={onDonateClick}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-xs sm:text-sm shadow-xl shadow-black/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white text-white" />
                  <span>{christmasOutreachProject.commitment.primaryBtn}</span>
                </RippleButton>

                <button
                  type="button"
                  onClick={onPartnerClick}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-teal-200/40 hover:border-teal-200 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  <Users className="w-4 h-4 text-teal-200" />
                  <span>{christmasOutreachProject.commitment.secondaryBtn}</span>
                </button>
              </div>

              <div className="pt-6 border-t border-white/15 text-[11px] text-teal-200/80 font-medium tracking-wide">
                {christmasOutreachProject.commitment.footerNote}
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
