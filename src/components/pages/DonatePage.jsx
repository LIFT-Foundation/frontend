import React, { useState } from 'react';
import { ArrowLeft, Heart, CheckCircle2, ShieldCheck, Lock, CreditCard, Landmark, Globe } from 'lucide-react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

export default function DonatePage({ onBackToHome }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    frequency: 'Monthly',
    amount: '50',
    customAmount: '',
    program: 'Free Education Centres',
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
    <div className="min-h-screen bg-[#faf9f6] flex flex-col font-sans">
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
            className="inline-flex items-center gap-2 text-xs font-semibold text-teal-800 hover:text-teal-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Homepage</span>
          </button>
        </div>

        {submitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl text-center max-w-2xl mx-auto space-y-6">
            <div className="w-20 h-20 bg-peach-100 text-[#ea580c] rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Thank You for Empowering Sri Lanka's Children!
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
              Your contribution of <strong className="text-gray-900">${getEffectiveAmount()} ({formData.frequency})</strong> for <strong>{formData.program}</strong> will directly fund education, nutrition, and child development in high-need communities across Sri Lanka.
            </p>
            <div className="p-4 bg-teal-50 border border-teal-100 rounded-2xl text-xs text-teal-800 font-medium">
              A formal confirmation receipt and tax statement will be emailed to <strong>{formData.email}</strong>.
            </div>
            <div className="pt-4">
              <button
                type="button"
                onClick={onBackToHome}
                className="px-8 py-3.5 rounded-full bg-[#0c3930] hover:bg-[#07241e] text-white text-xs font-bold shadow-md transition-all"
              >
                Return to Homepage
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Form Header & Impact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-peach-100 text-[11px] font-semibold text-[#ea580c] mb-3">
                  <Heart className="w-3.5 h-3.5 fill-[#ea580c]" />
                  <span>DEDICATED DONATION PAGE</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Partner with LIFT Foundation
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                  Every donation directly supports our Phase 1 focus on Free Education Centres, Child Nutrition, and Early Childhood Care in Sri Lanka.
                </p>
              </div>

              {/* Strategic Partner Guarantees */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0d7a64]" />
                  <span>Our Accountability Guarantees</span>
                </h3>

                <ul className="space-y-3 text-xs text-gray-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0d7a64] flex-shrink-0 mt-0.5" />
                    <span><strong>100% Direct Impact:</strong> Funds are audited and dedicated to education hubs and meals.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0d7a64] flex-shrink-0 mt-0.5" />
                    <span><strong>Regular Partner Reports:</strong> Receive quarterly progress updates from the centres you support.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0d7a64] flex-shrink-0 mt-0.5" />
                    <span><strong>Secure Processing:</strong> Encrypted payment handling for international donors & partners.</span>
                  </li>
                </ul>
              </div>

              {/* International Donor Notice */}
              <div className="p-4 rounded-2xl bg-teal-900 text-white text-xs space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-peach-200">
                  <Globe className="w-4 h-4" />
                  <span>International & Institutional Donors (GFC Partner Hub)</span>
                </div>
                <p className="text-teal-100/80 text-[11px]">
                  For wire transfers, corporate sponsorships, or custom grant partnerships, contact <a href="mailto:info@liftfoundationsl.org" className="underline font-semibold text-white">info@liftfoundationsl.org</a>.
                </p>
              </div>
            </div>

            {/* Right Column: Donation Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl space-y-6">
              
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
                        className={`py-3 rounded-xl text-xs font-bold transition-all ${
                          formData.frequency === freq
                            ? 'bg-white text-gray-900 shadow-md border border-gray-200'
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
                    {['25', '50', '100', '250'].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setFormData({ ...formData, amount: amt, customAmount: '' })}
                        className={`py-3 text-xs font-bold rounded-xl border transition-all ${
                          formData.amount === amt && !formData.customAmount
                            ? 'bg-[#f28e63] text-white border-[#f28e63] shadow-md'
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
                      className="w-full px-4 py-2.5 text-xs rounded-xl border border-gray-200 focus:border-teal-700 focus:ring-2 focus:ring-teal-100 outline-none"
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
                    className="w-full px-4 py-3 text-xs font-semibold rounded-xl border border-gray-200 focus:border-teal-700 outline-none bg-white text-gray-800"
                  >
                    <option>Free Education Centres (331 Target)</option>
                    <option>Nourish with Love (Child Meal Drives)</option>
                    <option>Little Light Montessori (Early Childhood)</option>
                    <option>Children & Youth Development</option>
                    <option>General Phase 1 Fund</option>
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
                        className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                          formData.paymentMethod === method.id
                            ? 'border-teal-700 bg-teal-50/60 text-teal-950 font-bold'
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
                        className="w-full px-4 py-2.5 text-xs rounded-xl border border-gray-200 focus:border-teal-700 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs rounded-xl border border-gray-200 focus:border-teal-700 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Phone Number (Optional)"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs rounded-xl border border-gray-200 focus:border-teal-700 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Organization / Foundation Name (Optional)"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs rounded-xl border border-gray-200 focus:border-teal-700 outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#f28e63] hover:bg-[#ea7849] text-white font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Complete Donation of ${getEffectiveAmount()} ({formData.frequency})</span>
                  </button>
                  <p className="text-[10px] text-gray-400 text-center mt-2.5 flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3 text-gray-400" />
                    <span>256-Bit SSL Encrypted & Secure Partner Transaction</span>
                  </p>
                </div>

              </form>

            </div>

          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
