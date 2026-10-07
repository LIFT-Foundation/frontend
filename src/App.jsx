import React, { useState } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Hero from './components/sections/Hero/Hero';
import QuickRibbon from './components/sections/Hero/QuickRibbon';
import MissionOverview from './components/sections/MissionOverview/MissionOverview';
import MissionCauses from './components/sections/MissionCauses/MissionCauses';
import VisionSection from './components/sections/Vision/VisionSection';
import WhyEducationSection from './components/sections/WhyEducation/WhyEducationSection';
import ProjectsSection from './components/sections/Projects/ProjectsSection';
import HowToHelpSection from './components/sections/HowToHelp/HowToHelpSection';
import CommitmentSection from './components/sections/Commitment/CommitmentSection';
import StoriesAndMission from './components/sections/StoriesMission/StoriesAndMission';
import Newsletter from './components/sections/Newsletter/Newsletter';
import DonatePage from './components/pages/DonatePage';
import { X, Check } from 'lucide-react';

export default function App() {
  const [showDonatePage, setShowDonatePage] = useState(false);
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Free Education Centres',
  });

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
    setTimeout(() => {
      setShowVolunteerModal(false);
      setVolunteerSubmitted(false);
      setVolunteerForm({
        name: '',
        email: '',
        phone: '',
        interest: 'Free Education Centres',
      });
    }, 2500);
  };

  const navigateToDonate = () => {
    setShowDonatePage(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showDonatePage) {
    return <DonatePage onBackToHome={() => setShowDonatePage(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col selection:bg-peach-200 selection:text-teal-950 font-sans">
      {/* 1. Header & Hero Section (Updated Positioning: Child & Youth Focus) */}
      <div className="bg-[#0b332c]">
        <Navbar onDonateClick={navigateToDonate} />
        <Hero
          onExplorePrograms={() => {
            const el = document.getElementById('programs');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onDonateClick={navigateToDonate}
        />
      </div>

      {/* Quick Focus Programs Ribbon Bar */}
      <QuickRibbon />

      {/* Main Narrative Flow */}
      <main className="flex-1">
        {/* 2. Who We Are (Mission Overview & Scripture Quote) */}
        <MissionOverview />

        {/* 3. Our Programs (3 Core Programs Grid: Education, Children & Youth, Nourish) */}
        <MissionCauses />

        {/* 4. Our Projects (Key Operational Projects: Little Light Montessori, Education Centres, Meal Drives) */}
        <ProjectsSection />

        {/* 5. Our Vision for Sri Lanka (9 Provinces -> 25 Districts -> 331 Divisional Centres) */}
        <VisionSection />

        {/* 6. Why Education Matters (Children + Poverty + Education Gap) */}
        <WhyEducationSection />

        {/* 7. How You Can Help (Sponsor a child, Support education, Provide a meal, Support a centre) */}
        <HowToHelpSection onDonateClick={navigateToDonate} />

        {/* 8. Our Commitment (Faith-driven • Community-focused • Transparent) */}
        <CommitmentSection onGetInvolved={() => setShowVolunteerModal(true)} />

        {/* 9. Stories of Hope + Testimonial + Join Our Mission */}
        <StoriesAndMission
          onBecomeVolunteer={() => setShowVolunteerModal(true)}
          onDonateClick={navigateToDonate}
        />

        {/* 10. Newsletter: Stay Connected With LIFT */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Volunteer / Partner Modal */}
      {showVolunteerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative border border-gray-100">
            <button
              onClick={() => setShowVolunteerModal(false)}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {volunteerSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-sans">Welcome to the LIFT Network!</h3>
                <p className="text-xs text-gray-500">
                  Thank you for stepping forward to partner with us. Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Partner / Volunteer With Us
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  Join our network of educators, volunteers, and community partners transforming Sri Lanka.
                </p>

                <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={volunteerForm.name}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 focus:border-teal-700 focus:ring-2 focus:ring-teal-100 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={volunteerForm.email}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 focus:border-teal-700 focus:ring-2 focus:ring-teal-100 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Area of Partnership
                    </label>
                    <select
                      value={volunteerForm.interest}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 focus:border-teal-700 focus:ring-2 focus:ring-teal-100 outline-none bg-white text-gray-700"
                    >
                      <option>Free Education Centres (Tutoring & Books)</option>
                      <option>Nourish with Love (Meal Drives)</option>
                      <option>Little Light Montessori Care</option>
                      <option>Youth Leadership Development</option>
                      <option>Institutional Partnership</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-teal-950 hover:bg-teal-900 text-white font-semibold text-xs tracking-wide shadow-md transition-all duration-200 mt-2"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
