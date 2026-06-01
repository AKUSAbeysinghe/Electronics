
import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <>
      {/* Header Section */}
      <div className="bg-black text-center py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-white text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal tracking-wide">
            Have a question? We would love to hear from you. Our team is ready to help.
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="bg-black min-h-screen flex items-center justify-center p-6 sm:p-12">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
         
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-1 bg-[#05070f] border border-slate-900 rounded-2xl p-8 flex flex-col gap-y-6">
            <h3 className="text-white text-xl font-semibold mb-2">Contact Information</h3>
           
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-[#0b132b] text-blue-500 p-3 rounded-xl flex items-center justify-center border border-slate-800">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">Email</h4>
                <p className="text-slate-500 text-sm mt-0.5">support@volttech.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-[#0b132b] text-blue-500 p-3 rounded-xl flex items-center justify-center border border-slate-800">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">Phone</h4>
                <p className="text-slate-500 text-sm mt-0.5">+1 (555) 123-4567</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-[#0b132b] text-blue-500 p-3 rounded-xl flex items-center justify-center border border-slate-800">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">Address</h4>
                <p className="text-slate-500 text-sm mt-0.5 leading-relaxed">
                  123 Tech Avenue, San Francisco, CA 94105
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="bg-[#0b132b] text-blue-500 p-3 rounded-xl flex items-center justify-center border border-slate-800">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">Hours</h4>
                <p className="text-slate-500 text-sm mt-0.5">Mon - Fri: 9AM - 6PM PST</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-2 bg-[#05070f] border border-slate-900 rounded-2xl p-8 flex flex-col justify-between">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
             
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="bg-black border border-slate-900 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-slate-700 transition"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="bg-black border border-slate-900 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-slate-700 transition"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-medium">Subject</label>
                <div className="relative">
                  <select
                    className="w-full bg-black border border-slate-900 rounded-xl px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-slate-700 transition cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>Select a topic</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-medium">Message</label>
                <textarea
                  rows="5"
                  placeholder="How can we help you?"
                  className="bg-black border border-slate-900 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-slate-700 transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#4f6ef7] hover:bg-[#415ed4] text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 text-sm transition-colors duration-200"
                >
                  <Send className="w-4 h-4 transform rotate-[-30deg] translate-y-[-1px]" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}