import React, { useState } from 'react';
import { ArrowLeft, Heart, CheckCircle2, ShieldCheck, Lock, CreditCard, Landmark, Globe } from 'lucide-react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ScrollReveal from '../effects/ScrollReveal';
import RippleButton from '../effects/RippleButton';
import { siteData } from '../../data/content';

export default function DonatePage({ onBackToHome }) {
  const { donationPage } = siteData;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    frequency: 'Monthly',
    amount: '50',
    customAmount: '',
    program: donationPage.programs[0] || 'Divisional Free Education Centres Plan',
    paymentMethod: 'Credit / Debit Card',
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    anonymous: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getEffectiveAmount = () => {
    return formData.customAmount ? formData.customAmount : formData.amount;
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col font-sans selection:bg-peach-200 selection:text-teal-950">
      {/* Header Bar */}
      <div className="bg-[#0b332c]">
        <Navbar onDonateClick={() => {}} />
      </div>

      {/* Page Main Content */}
      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-8 max-w-5xl mx-auto w-full">
        {/* Top Back Navigation Button */}
        <div className="mb-6">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-teal-800 hover:text-teal-950 transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Homepage</span>
          </button>
        </div>

        {submitted ? (
          <ScrollReveal direction="zoom" delay={100}>
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl text-center max-w-2xl mx-auto space-y-6">
              <div className="w-20 h-20 bg-peach-100 text-[#ea580c] rounded-full flex items-center justify-center mx-auto shadow-inner animate-float-slow">
                <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Thank You for Partnering with Love In Fellowship & Truth Foundation!
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
                Your support commitment of <strong className="text-gray-900">${getEffectiveAmount()} ({formData.frequency})</strong> for <strong>{formData.program}</strong> helps us work towards a brighter future for children and vulnerable communities in Sri Lanka.
              </p>
              <div className="p-4 bg-teal-50 border border-teal-100 rounded-2xl text-xs text-teal-900 font-medium leading-relaxed">
                Our donor coordination team will contact you at <strong>{formData.email}</strong> with verified payment channel details and regular project progress updates.
              </div>
              <div className="pt-4">
                <RippleButton
                  onClick={onBackToHome}
                  className="px-8 py-3.5 rounded-full bg-[#0c3930] hover:bg-[#07241e] text-white text-xs font-bold shadow-md hover:shadow-xl transition-all"
                >
                  Return to Homepage
                </RippleButton>
              </div>
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Form Header & Impact Info */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal direction="left" delay={100}>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-peach-100 text-[11px] font-semibold text-[#ea580c] mb-3">
                    <Heart className="w-3.5 h-3.5 fill-[#ea580c] animate-heartbeat" />
                    <span>{donationPage.badge}</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                    {donationPage.title}
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                    {donationPage.description}
                  </p>
                </div>
              </ScrollReveal>

              {/* Strategic Partner Guarantees */}
              <ScrollReveal direction="left" delay={200}>
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#0d7a64]" />
                    <span>{donationPage.accountabilityTitle}</span>
                  </h3>

                  <ul className="space-y-3.5 text-xs text-gray-600">
                    {donationPage.accountabilityPoints.map((pt) => (
                      <li key={pt.title} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#0d7a64] flex-shrink-0 mt-0.5" />
                        <span><strong>{pt.title}:</strong> {pt.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* International Donor Notice */}
              <ScrollReveal direction="left" delay={300}>
                <div className="p-4 rounded-2xl bg-teal-900 text-white text-xs space-y-1 shadow-md">
                  <div className="font-bold flex items-center gap-1.5 text-peach-200">
                    <Globe className="w-4 h-4" />
                    <span>{donationPage.internationalDonorNotice.title}</span>
                  </div>
                  <p className="text-teal-100/80 text-[11px] leading-relaxed">
                    {donationPage.internationalDonorNotice.description.replace('info@liftfoundationsl.org', '')}
                    <a href="mailto:info@liftfoundationsl.org" className="underline font-semibold text-white ml-1">
                      info@liftfoundationsl.org
                    </a>.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Donation Form */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right" delay={150}>
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl space-y-6">
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* 1. Frequency */}
                    <div>
                      <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                        1. Select Donation Frequency
                      </label>
                      <div className="grid grid-cols-2 gap-3 p-1.5 bg-gray-100 rounded-2xl">
                        {['One Time', 'Monthly'].map((freq) => (
                          <button
                            key={freq}
                            type="button"
                            onClick={() => setFormData({ ...formData, frequency: freq })}
                            className={`py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                              formData.frequency === freq
                                ? 'bg-white text-gray-900 shadow-md border border-gray-200 scale-[1.01]'
                                : 'text-gray-500 hover:text-gray-900'
                            }`}
                          >
                            {freq} Support
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 2. Preset Amounts */}
                    <div>
                      <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                        2. Select Amount (USD $)
                      </label>
                      <div className="grid grid-cols-4 gap-2.5 mb-3">
                        {donationPage.amounts.map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => setFormData({ ...formData, amount: amt, customAmount: '' })}
                            className={`py-3 text-xs font-bold rounded-xl border transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${
                              formData.amount === amt && !formData.customAmount
                                ? 'bg-[#f28e63] text-white border-[#f28e63] shadow-md shadow-[#f28e63]/30'
                                : 'border-gray-200 text-gray-700 hover:border-[#f28e63] bg-gray-50/50'
                            }`}
                          >
                            ${amt}
                          </button>
                        ))}
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="Or enter custom amount in USD $"
                          value={formData.customAmount}
                          onChange={(e) => setFormData({ ...formData, customAmount: e.target.value })}
                          className="w-full px-4 py-2.5 text-xs rounded-xl border border-gray-200 focus:border-teal-700 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* 3. Choose a Program */}
                    <div>
                      <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                        3. Choose a Focus Program
                      </label>
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full px-4 py-3 text-xs font-semibold rounded-xl border border-gray-200 focus:border-teal-700 outline-none bg-white text-gray-800 transition-all cursor-pointer"
                      >
                        {donationPage.programs.map((prog) => (
                          <option key={prog} value={prog}>
                            {prog}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* 4. Payment Method */}
                    <div>
                      <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                        4. Payment Method
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { id: 'Credit / Debit Card', icon: CreditCard, label: 'Credit / Debit Card' },
                          { id: 'Bank Wire Transfer', icon: Landmark, label: 'Direct Wire Transfer' }
                        ].map((method) => (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                            className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all duration-200 hover:scale-[1.01] cursor-pointer ${
                              formData.paymentMethod === method.id
                                ? 'border-teal-700 bg-teal-50/60 text-teal-950 font-bold shadow-sm'
                                : 'border-gray-200 text-gray-600 hover:border-gray-300'
                            }`}
                          >
                            <method.icon className="w-4 h-4 text-teal-800" />
                            <span className="text-xs">{method.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 5. Donor Information */}
                    <div className="space-y-3 pt-2">
                      <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider">
                        5. Donor Details
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <input
                            type="text"
                            required
                            placeholder="Full Name / Org Representative *"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full px-4 py-2.5 text-xs rounded-xl border border-gray-200 focus:border-teal-700 outline-none transition-all"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            required
                            placeholder="Email Address *"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 text-xs rounded-xl border border-gray-200 focus:border-teal-700 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <input
                            type="tel"
                            placeholder="Contact Phone (Optional)"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-2.5 text-xs rounded-xl border border-gray-200 focus:border-teal-700 outline-none transition-all"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Organization / Foundation Name (Optional)"
                            value={formData.organization}
                            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                            className="w-full px-4 py-2.5 text-xs rounded-xl border border-gray-200 focus:border-teal-700 outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Action */}
                    <div className="pt-4">
                      <RippleButton
                        type="submit"
                        className="w-full py-4 rounded-2xl bg-[#f28e63] hover:bg-[#ea7849] text-white font-bold text-sm shadow-xl shadow-[#f28e63]/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                      >
                        <Lock className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                        <span>Complete Donation of ${getEffectiveAmount()} ({formData.frequency})</span>
                      </RippleButton>
                      <p className="text-[10px] text-gray-400 text-center mt-2.5 flex items-center justify-center gap-1">
                        <Lock className="w-3 h-3 text-gray-400" />
                        <span>256-Bit SSL Encrypted & Secure Partner Transaction</span>
                      </p>
                    </div>

                  </form>

                </div>
              </ScrollReveal>
            </div>

          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigateHome={onBackToHome} />
    </div>
  );
}
