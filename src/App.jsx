import React, { useState } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Hero from './components/sections/Hero/Hero';
import MissionCauses from './components/sections/MissionCauses/MissionCauses';
import ImpactStats from './components/sections/ImpactStats/ImpactStats';
import Events from './components/sections/Events/Events';
import Testimonials from './components/sections/Testimonials/Testimonials';
import CallToAction from './components/sections/CallToAction/CallToAction';
import Newsletter from './components/sections/Newsletter/Newsletter';
import { X, Check } from 'lucide-react';

export default function App() {
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Community Outreach',
  });

  const handleDonateScroll = () => {
    const el = document.getElementById('donation-card');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Add a subtle highlight pulse
      el.classList.add('ring-4', 'ring-peach-400');
      setTimeout(() => {
        el.classList.remove('ring-4', 'ring-peach-400');
      }, 1500);
    }
  };

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
        interest: 'Community Outreach',
      });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col selection:bg-peach-200 selection:text-teal-950 font-sans">
      {/* Top Section with Dark Forest Teal Header & Hero */}
      <div className="bg-teal-900">
        <Navbar onDonateClick={handleDonateScroll} />
        <Hero onExploreCauses={() => {
          const el = document.getElementById('causes');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />
      </div>

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Our Mission / 4 Causes */}
        <MissionCauses />

        {/* Impact Statistics */}
        <ImpactStats onGetInvolved={() => setShowVolunteerModal(true)} />

        {/* Upcoming Events & Campaigns */}
        <Events />

        {/* Voices of Change / Testimonial Wave */}
        <Testimonials />

        {/* Dual Cards: Become a Volunteer & Donate */}
        <CallToAction
          onJoinVolunteer={() => setShowVolunteerModal(true)}
          onDonateClick={handleDonateScroll}
        />

        {/* Stay Connected With Us (Newsletter) */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer onDonateClick={handleDonateScroll} />

      {/* Volunteer Sign-up Modal */}
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
                <h3 className="text-xl font-bold text-gray-900">Welcome to the Team!</h3>
                <p className="text-xs text-gray-500">
                  Thank you for joining our volunteer network. We will reach out to you shortly.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Become a Volunteer
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  Join our amazing team and make a lasting difference in people's lives.
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
                      Area of Interest
                    </label>
                    <select
                      value={volunteerForm.interest}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 focus:border-teal-700 focus:ring-2 focus:ring-teal-100 outline-none bg-white text-gray-700"
                    >
                      <option>Community Outreach</option>
                      <option>Education & Tutoring</option>
                      <option>Food Distribution</option>
                      <option>Health & Medical Support</option>
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
