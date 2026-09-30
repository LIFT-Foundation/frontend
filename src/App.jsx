import React, { useState } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Hero from './components/sections/Hero/Hero';
import QuickRibbon from './components/sections/Hero/QuickRibbon';
import MissionOverview from './components/sections/MissionOverview/MissionOverview';
import MissionCauses from './components/sections/MissionCauses/MissionCauses';
import CommitmentSection from './components/sections/Commitment/CommitmentSection';
import Events from './components/sections/Events/Events';
import StoriesAndMission from './components/sections/StoriesMission/StoriesAndMission';
import Newsletter from './components/sections/Newsletter/Newsletter';
import { X, Check } from 'lucide-react';

export default function App() {
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [donateSubmitted, setDonateSubmitted] = useState(false);

  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Community Outreach',
  });

  const [donationForm, setDonationForm] = useState({
    amount: '25',
    frequency: 'Monthly',
    program: 'Education',
    name: '',
    email: ''
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
        interest: 'Community Outreach',
      });
    }, 2500);
  };

  const handleDonateSubmit = (e) => {
    e.preventDefault();
    setDonateSubmitted(true);
    setTimeout(() => {
      setShowDonateModal(false);
      setDonateSubmitted(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col selection:bg-peach-200 selection:text-teal-950 font-sans">
      {/* Header & Hero Section (Dark Forest Teal) */}
      <div className="bg-[#0b332c]">
        <Navbar onDonateClick={() => setShowDonateModal(true)} />
        <Hero
          onExplorePrograms={() => {
            const el = document.getElementById('programs');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onDonateClick={() => setShowDonateModal(true)}
        />
      </div>

      {/* Quick Programs Ribbon Bar */}
      <QuickRibbon />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Our Mission Overview & Scripture Quote */}
        <MissionOverview />

        {/* Areas of Impact (8 Programs Grid) */}
        <MissionCauses />

        {/* Our Commitment (Dark Forest Teal Card with Faith, Community, Transparent) */}
        <CommitmentSection onGetInvolved={() => setShowVolunteerModal(true)} />

        {/* Upcoming Events & Campaigns */}
        <Events />

        {/* Stories of Hope + Dinuthi Testimonial + Join Our Mission */}
        <StoriesAndMission
          onBecomeVolunteer={() => setShowVolunteerModal(true)}
          onDonateClick={() => setShowDonateModal(true)}
        />

        {/* Newsletter: Stay Connected With Us */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Volunteer Modal */}
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
                  Join our amazing team and make a lasting difference in people's lives across Sri Lanka.
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
                      <option>Education Centers</option>
                      <option>Nourish with Love (Meal Drives)</option>
                      <option>Youth & Children Workshops</option>
                      <option>Elderly Care Visits</option>
                      <option>Christian Leaders Support</option>
                      <option>Environmental Initiatives</option>
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

      {/* Donate Modal */}
      {showDonateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative border border-gray-100">
            <button
              onClick={() => setShowDonateModal(false)}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {donateSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 bg-peach-100 text-[#ea580c] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Thank You For Your Support!</h3>
                <p className="text-xs text-gray-500">
                  Your generosity helps bring hope and transform lives across communities in Sri Lanka.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Donate to LIFT Foundation
                </h3>
                <p className="text-xs text-gray-500 mb-5">
                  Every contribution directly empowers children, families, and communities.
                </p>

                <form onSubmit={handleDonateSubmit} className="space-y-4">
                  {/* Frequency */}
                  <div className="flex p-1 bg-gray-100 rounded-xl text-xs font-semibold text-gray-600">
                    {['One Time', 'Monthly'].map((freq) => (
                      <button
                        key={freq}
                        type="button"
                        onClick={() => setDonationForm({ ...donationForm, frequency: freq })}
                        className={`flex-1 py-1.5 rounded-lg text-center transition-all ${
                          donationForm.frequency === freq
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-500'
                        }`}
                      >
                        {freq}
                      </button>
                    ))}
                  </div>

                  {/* Preset Amounts */}
                  <div className="grid grid-cols-4 gap-2">
                    {['10', '25', '50', '100'].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setDonationForm({ ...donationForm, amount: amt })}
                        className={`py-2 text-xs font-semibold rounded-xl border transition-all ${
                          donationForm.amount === amt
                            ? 'bg-[#f28e63] text-white border-[#f28e63]'
                            : 'border-gray-200 text-gray-700 hover:border-peach-300'
                        }`}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={donationForm.name}
                      onChange={(e) => setDonationForm({ ...donationForm, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:border-teal-700 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={donationForm.email}
                      onChange={(e) => setDonationForm({ ...donationForm, email: e.target.value })}
                      placeholder="Your Email"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:border-teal-700 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#f28e63] hover:bg-[#ea7849] text-white font-semibold text-xs tracking-wide shadow-md transition-all duration-200 mt-2"
                  >
                    Complete Donation (${donationForm.amount})
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
