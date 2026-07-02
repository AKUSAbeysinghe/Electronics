import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Header Section */}
      <div className="bg-gradient-to-br from-[#0a0f1c] to-black py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            Get in <span className="text-[#4d61fc]">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Have questions? Our team is ready to assist you.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Left - Main Contact Info */}
          <div className="bg-[#0a0f1c] border border-gray-900 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-10">Contact Information</h2>
            
            <div className="space-y-8">
              {/* Email */}
              <div className="flex gap-5">
                <div className="bg-[#1a2338] p-4 rounded-2xl text-[#4d61fc]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">EMAIL</p>
                  <p className="text-white text-lg mt-1">support@volttech.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5">
                <div className="bg-[#1a2338] p-4 rounded-2xl text-[#4d61fc]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">PHONE / WHATSAPP</p>
                  <p className="text-white text-lg mt-1">+94 77 123 4567</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-5">
                <div className="bg-[#1a2338] p-4 rounded-2xl text-[#4d61fc]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">HEAD OFFICE</p>
                  <p className="text-white text-lg mt-1 leading-relaxed">
                    123 Galle Road,<br />
                    Colombo 04, Sri Lanka
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-5">
                <div className="bg-[#1a2338] p-4 rounded-2xl text-[#4d61fc]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">BUSINESS HOURS</p>
                  <p className="text-white text-lg mt-1">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Quick Actions */}
          <div className="space-y-6">
            <div className="bg-[#0a0f1c] border border-gray-900 rounded-3xl p-10 hover:border-[#4d61fc] transition-all">
              <div className="flex items-center gap-4 mb-6">
                <MessageCircle className="w-8 h-8 text-[#4d61fc]" />
                <h3 className="text-2xl font-semibold">Chat with Us</h3>
              </div>
              <p className="text-gray-400 mb-8">
                Get instant support through WhatsApp. Our team usually replies within minutes.
              </p>
              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#4d61fc] hover:bg-[#5a71ff] text-center py-4 rounded-2xl font-medium transition-all"
              >
                Message on WhatsApp
              </a>
            </div>

            <div className="bg-[#0a0f1c] border border-gray-900 rounded-3xl p-10">
              <h3 className="text-xl font-semibold mb-6">Other Ways to Reach Us</h3>
              <div className="space-y-4 text-gray-400">
                <p><strong className="text-white">Email:</strong> support@volttech.com</p>
                <p><strong className="text-white">For Press:</strong> press@volttech.com</p>
                <p><strong className="text-white">For Partnerships:</strong> partnerships@volttech.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;