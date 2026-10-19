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
import AboutUsPage from './components/pages/AboutUsPage';
import EducationProgramPage from './components/pages/EducationProgramPage';
import YouthProgramPage from './components/pages/YouthProgramPage';
import NourishProgramPage from './components/pages/NourishProgramPage';
import NourishMealDrivesPage from './components/pages/NourishMealDrivesPage';
import MontessoriProgramPage from './components/pages/MontessoriProgramPage';
import MontessoriProjectPage from './components/pages/MontessoriProjectPage';
import ChristmasOutreachPage from './components/pages/ChristmasOutreachPage';
import { X, Check } from 'lucide-react';
import RippleButton from './components/effects/RippleButton';

export default function App() {
  const [showDonatePage, setShowDonatePage] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showEducationPage, setShowEducationPage] = useState(false);
  const [showYouthPage, setShowYouthPage] = useState(false);
  const [showNourishPage, setShowNourishPage] = useState(false);
  const [showNourishProjectPage, setShowNourishProjectPage] = useState(false);
  const [showMontessoriPage, setShowMontessoriPage] = useState(false);
  const [showMontessoriProjectPage, setShowMontessoriProjectPage] = useState(false);
  const [showChristmasProjectPage, setShowChristmasProjectPage] = useState(false);
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
    setShowAboutPage(false);
    setShowEducationPage(false);
    setShowYouthPage(false);
    setShowNourishPage(false);
    setShowNourishProjectPage(false);
    setShowMontessoriPage(false);
    setShowMontessoriProjectPage(false);
    setShowChristmasProjectPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAbout = () => {
    setShowAboutPage(true);
    setShowDonatePage(false);
    setShowEducationPage(false);
    setShowYouthPage(false);
    setShowNourishPage(false);
    setShowNourishProjectPage(false);
    setShowMontessoriPage(false);
    setShowMontessoriProjectPage(false);
    setShowChristmasProjectPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToEducation = () => {
    setShowEducationPage(true);
    setShowDonatePage(false);
    setShowAboutPage(false);
    setShowYouthPage(false);
    setShowNourishPage(false);
    setShowNourishProjectPage(false);
    setShowMontessoriPage(false);
    setShowMontessoriProjectPage(false);
    setShowChristmasProjectPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToYouth = () => {
    setShowYouthPage(true);
    setShowEducationPage(false);
    setShowDonatePage(false);
    setShowAboutPage(false);
    setShowNourishPage(false);
    setShowNourishProjectPage(false);
    setShowMontessoriPage(false);
    setShowMontessoriProjectPage(false);
    setShowChristmasProjectPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToNourish = () => {
    setShowNourishPage(true);
    setShowNourishProjectPage(false);
    setShowYouthPage(false);
    setShowEducationPage(false);
    setShowDonatePage(false);
    setShowAboutPage(false);
    setShowMontessoriPage(false);
    setShowMontessoriProjectPage(false);
    setShowChristmasProjectPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToNourishProject = () => {
    setShowNourishProjectPage(true);
    setShowNourishPage(false);
    setShowYouthPage(false);
    setShowEducationPage(false);
    setShowDonatePage(false);
    setShowAboutPage(false);
    setShowMontessoriPage(false);
    setShowMontessoriProjectPage(false);
    setShowChristmasProjectPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToMontessori = () => {
    setShowMontessoriPage(true);
    setShowMontessoriProjectPage(false);
    setShowNourishProjectPage(false);
    setShowNourishPage(false);
    setShowYouthPage(false);
    setShowEducationPage(false);
    setShowDonatePage(false);
    setShowAboutPage(false);
    setShowChristmasProjectPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToMontessoriProject = () => {
    setShowMontessoriProjectPage(true);
    setShowMontessoriPage(false);
    setShowNourishProjectPage(false);
    setShowNourishPage(false);
    setShowYouthPage(false);
    setShowEducationPage(false);
    setShowDonatePage(false);
    setShowAboutPage(false);
    setShowChristmasProjectPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToChristmasProject = () => {
    setShowChristmasProjectPage(true);
    setShowMontessoriProjectPage(false);
    setShowMontessoriPage(false);
    setShowNourishProjectPage(false);
    setShowNourishPage(false);
    setShowYouthPage(false);
    setShowEducationPage(false);
    setShowDonatePage(false);
    setShowAboutPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderVolunteerModal = () => {
    if (!showVolunteerModal) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
        <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative border border-white/60">
          <button
            onClick={() => setShowVolunteerModal(false)}
            className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {volunteerSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center mx-auto animate-float-slow">
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
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 focus:border-teal-700 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
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
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 focus:border-teal-700 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Area of Partnership
                  </label>
                  <select
                    value={volunteerForm.interest}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 focus:border-teal-700 focus:ring-2 focus:ring-teal-100 outline-none bg-white text-gray-700 transition-all"
                  >
                    <option>Christmas Outreach 2026 (Festive Support & Gifts)</option>
                    <option>Free Education Centres (Tutoring & Books)</option>
                    <option>Nourish with Love (Meal Drives)</option>
                    <option>Little Light Montessori Care</option>
                    <option>Youth Leadership Development</option>
                    <option>Institutional Partnership</option>
                  </select>
                </div>

                <RippleButton
                  type="submit"
                  className="w-full py-3 rounded-xl bg-teal-950 hover:bg-teal-900 text-white font-semibold text-xs tracking-wide shadow-md transition-all duration-200 mt-2"
                >
                  Submit Application
                </RippleButton>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  };

  if (showDonatePage) {
    return <DonatePage onBackToHome={() => setShowDonatePage(false)} />;
  }

  if (showAboutPage) {
    return (
      <AboutUsPage
        onBackToHome={() => setShowAboutPage(false)}
        onDonateClick={navigateToDonate}
      />
    );
  }

  if (showEducationPage) {
    return (
      <>
        <EducationProgramPage
          onBackToHome={() => {
            setShowEducationPage(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onDonateClick={navigateToDonate}
          onPartnerClick={() => setShowVolunteerModal(true)}
          onContactClick={() => {
            setShowEducationPage(false);
            setTimeout(() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        />
        {renderVolunteerModal()}
      </>
    );
  }

  if (showYouthPage) {
    return (
      <>
        <YouthProgramPage
          onBackToHome={() => {
            setShowYouthPage(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onDonateClick={navigateToDonate}
          onPartnerClick={() => setShowVolunteerModal(true)}
          onContactClick={() => {
            setShowYouthPage(false);
            setTimeout(() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        />
        {renderVolunteerModal()}
      </>
    );
  }

  if (showNourishPage) {
    return (
      <>
        <NourishProgramPage
          onBackToHome={() => {
            setShowNourishPage(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onDonateClick={navigateToDonate}
          onPartnerClick={() => setShowVolunteerModal(true)}
          onContactClick={() => {
            setShowNourishPage(false);
            setTimeout(() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        />
        {renderVolunteerModal()}
      </>
    );
  }

  if (showNourishProjectPage) {
    return (
      <>
        <NourishMealDrivesPage
          onBackToHome={() => {
            setShowNourishProjectPage(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onDonateClick={navigateToDonate}
          onPartnerClick={() => setShowVolunteerModal(true)}
        />
        {renderVolunteerModal()}
      </>
    );
  }

  if (showMontessoriPage) {
    return (
      <>
        <MontessoriProgramPage
          onBackToHome={() => {
            setShowMontessoriPage(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onDonateClick={navigateToDonate}
          onPartnerClick={() => setShowVolunteerModal(true)}
          onContactClick={() => {
            setShowMontessoriPage(false);
            setTimeout(() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        />
        {renderVolunteerModal()}
      </>
    );
  }

  if (showMontessoriProjectPage) {
    return (
      <>
        <MontessoriProjectPage
          onBackToHome={() => {
            setShowMontessoriProjectPage(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onDonateClick={navigateToDonate}
          onPartnerClick={() => setShowVolunteerModal(true)}
        />
        {renderVolunteerModal()}
      </>
    );
  }

  if (showChristmasProjectPage) {
    return (
      <>
        <ChristmasOutreachPage
          onBackToHome={() => {
            setShowChristmasProjectPage(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onDonateClick={navigateToDonate}
          onPartnerClick={() => setShowVolunteerModal(true)}
        />
        {renderVolunteerModal()}
      </>
    );
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
      <QuickRibbon
        onSelectProgram={(id) => {
          if (id === 'education') navigateToEducation();
          else if (id === 'youth') navigateToYouth();
          else if (id === 'nourish') navigateToNourish();
          else if (id === 'montessori') navigateToMontessori();
        }}
      />

      {/* Main Narrative Flow */}
      <main className="flex-1">
        {/* 2. Who We Are (Mission Overview & Scripture Quote) */}
        <MissionOverview onLearnMoreClick={navigateToAbout} />

        {/* 3. Our Programs (3 Core Programs Grid: Education, Children & Youth, Nourish) */}
        <MissionCauses
          onLearnMoreEducation={navigateToEducation}
          onLearnMoreYouth={navigateToYouth}
          onLearnMoreNourish={navigateToNourish}
          onLearnMoreMontessori={navigateToMontessori}
        />

        {/* 4. Our Projects (Key Operational Projects: Little Light Montessori, Education Centres, Meal Drives, Christmas Outreach) */}
        <ProjectsSection
          onExploreMontessori={navigateToMontessoriProject}
          onExploreEducation={navigateToEducation}
          onExploreNourish={navigateToNourishProject}
          onSupportChristmas={navigateToChristmasProject}
        />

        {/* 5. Our Vision for Sri Lanka (9 Provinces -> 25 Districts -> 331 Divisional Centres) */}
        <VisionSection onSponsorClick={navigateToDonate} />

        {/* 6. Why Education Matters (Children + Poverty + Education Gap) */}
        <WhyEducationSection />

        {/* 7. How You Can Help (Sponsor a child, Support education, Provide a meal, Support a centre) */}
        <HowToHelpSection
          onDonateClick={navigateToDonate}
          onSupportCampaign={navigateToChristmasProject}
        />

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
      <Footer
        onNavigateHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateAbout={navigateToAbout}
        onNavigateEducation={navigateToEducation}
        onNavigateYouth={navigateToYouth}
        onNavigateNourish={navigateToNourish}
        onNavigateMontessori={navigateToMontessori}
        onNavigateEducationProject={navigateToEducation}
        onNavigateNourishProject={navigateToNourishProject}
        onNavigateChristmasProject={navigateToChristmasProject}
      />

      {/* Volunteer / Partner Modal */}
      {renderVolunteerModal()}
    </div>
  );
}
