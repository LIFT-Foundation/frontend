import React from 'react';
import { ArrowLeft, Heart, BookOpen, ShieldCheck, Users, Globe, Cross, CheckCircle2 } from 'lucide-react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

export default function AboutUsPage({ onBackToHome, onDonateClick }) {
  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col font-sans">
      {/* Header Bar */}
      <div className="bg-[#0b332c]">
        <Navbar onDonateClick={onDonateClick} />
      </div>

      {/* Hero Banner */}
      <div className="bg-[#0c3930] text-white py-14 px-4 sm:px-8 border-b border-teal-900">
        <div className="max-w-5xl mx-auto">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-teal-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Homepage</span>
          </button>

          <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#f28e63] uppercase mb-2">
            <span>ABOUT LIFT FOUNDATION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Love In Fellowship & Truth
          </h1>

          <p className="text-xs sm:text-sm text-teal-100/90 max-w-2xl leading-relaxed">
            A Christian foundation dedicated to empowering children and young people across Sri Lanka through education, nutrition, and community development.
          </p>
        </div>
      </div>

      {/* Main Content Sections */}
      <main className="flex-1 py-12 sm:py-16 px-4 sm:px-8 max-w-5xl mx-auto w-full space-y-16">
        
        {/* 1. Who We Are */}
        <section id="who-we-are" className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0d7a64] uppercase tracking-wider">
            <Users className="w-4 h-4" />
            <span>Who We Are</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            A Purpose-Driven Sri Lankan Christian Foundation
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            LIFT Foundation (Love In Fellowship & Truth) was founded with a profound conviction: every child in Sri Lanka, regardless of their background or circumstance, deserves the opportunity to learn, grow, and thrive in a safe and supportive environment.
          </p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            We work alongside local communities, educators, and churches to establish sustainable solutions to childhood poverty, educational dropouts, and malnutrition.
          </p>
        </section>

        {/* 2. Our Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-[#0c3930] text-white rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-[#f28e63]/20 flex items-center justify-center text-[#f28e63]">
              <Heart className="w-5 h-5 fill-[#f28e63]" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Mission</h3>
            <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed">
              We believe every child deserves the opportunity to learn, grow and thrive. Through education, nutrition and community-based support, LIFT Foundation works alongside underserved communities to create brighter futures for children and young people across Sri Lanka.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#faf9f6] border border-gray-200/80 rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-800">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Our Vision 2030</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              To establish 331 divisional free education and development centres across all 25 districts of Sri Lanka, ensuring no child is left behind due to poverty or lack of educational resources.
            </p>
          </div>
        </section>

        {/* 3. What We Do (Phase 1 Focus) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#ea580c] uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>What We Do (Phase 1 Focus)</span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">Three Strategic Pillars of Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
              <h4 className="text-sm font-bold text-gray-900">1. Education</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Free after-school learning centres, tuition assistance, books, and educational kits for children in rural communities.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
              <h4 className="text-sm font-bold text-gray-900">2. Children & Youth</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Holistic mentorship, values-based leadership workshops, and life skills training for young people.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
              <h4 className="text-sm font-bold text-gray-900">3. Nourish with Love</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Daily nutritious meals and health drives to ensure children have the physical strength to excel in school.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Our Christian Foundation */}
        <section className="bg-gradient-to-r from-teal-950 to-[#0c3930] text-white rounded-3xl p-6 sm:p-10 space-y-4">
          <div className="flex items-center gap-2 text-peach-300 text-xs font-bold uppercase tracking-wider">
            <Cross className="w-4 h-4 text-[#f28e63]" />
            <span>Our Faith & Values</span>
          </div>

          <h2 className="text-2xl font-bold text-white">Rooted in Christ's Love</h2>

          <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed max-w-3xl">
            As a Christian foundation, everything we do is inspired by the love, grace, and compassion of Jesus Christ. We believe in serving all people unconditionally, regardless of ethnicity, religion, or social background.
          </p>

          <blockquote className="border-l-2 border-[#f28e63] pl-4 italic text-xs text-teal-200/90 py-1">
            "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven." — Matthew 5:16
          </blockquote>
        </section>

        {/* 5. Leadership, Sri Lanka Focus & Transparency */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Globe className="w-5 h-5 text-teal-800" />
              <span>Sri Lanka Focus</span>
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Our ground operations are 100% focused on Sri Lanka. We operate through community-based hubs in all 9 provinces, working directly with local leaders who understand the unique needs of each village.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0d7a64]" />
              <span>Transparency & Accountability</span>
            </h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0d7a64] flex-shrink-0 mt-0.5" />
                <span>Annual financial audits and published reports</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0d7a64] flex-shrink-0 mt-0.5" />
                <span>Quarterly progress reports sent directly to international donors</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0d7a64] flex-shrink-0 mt-0.5" />
                <span>Direct project-level fund allocation and zero tolerance for waste</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action Bar */}
        <div className="text-center py-6">
          <button
            type="button"
            onClick={onDonateClick}
            className="px-8 py-3.5 rounded-full bg-[#f28e63] hover:bg-[#ea7849] text-white font-bold text-xs shadow-lg transition-all"
          >
            Partner / Donate Today
          </button>
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
