"use client";

import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#08111f] text-white pt-16 pb-10 mt-16">
      {/* Top: locations + maps */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8">
          
          {/* Hyderabad */}
          <div className="md:w-1/3 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold tracking-wide uppercase mb-3 text-orange-400">
                VJC Overseas–Hyderabad
              </h3>
            </div>

            <div className="space-y-1 text-sm leading-relaxed">
              <p>62/A, Ground Floor,</p>
              <p>Sundari Reddy Bhavan, Fresh Mart,</p>
              <p>Vengalrao Nagar, Sanjeeva Reddy Nagar,</p>
              <p>Hyderabad, Telangana, 500038</p>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl shadow-lg border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.273673753239!2d78.44141627586544!3d17.44658098345151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f63337f773%3A0x6b49080b06b12854!2sVJC%20Overseas!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
                width="100%"
                height="200"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-52"
              />
            </div>
          </div>

          {/* USA */}
          <div className="md:w-1/3 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold tracking-wide uppercase mb-3 text-orange-400">
                VJC Overseas–USA
              </h3>
            </div>

            <div className="space-y-1 text-sm leading-relaxed">
              <p>7200 Preston Rd, Plano,</p>
              <p>TX 75024, USA</p>
              <p className="mt-3 flex items-center justify-center md:justify-start gap-2 hover:text-orange-300 transition-colors">
                <FaWhatsapp size={22} className="text-green-500" />
                <a href="tel:+16605282324" className="text-base font-semibold">
                  +1 660-528-2324
                </a>
              </p>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl shadow-lg border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.851964245941!2d-96.8000!3d33.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDA0JzMzLjYiTiA5NsKwNDgnMDAuMCJX!5e0!3m2!1sen!2sus!4v1709123456789!5m2!1sen!2sus"
                width="100%"
                height="200"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-52"
              />
            </div>
          </div>

          {/* Bangalore */}
          <div className="md:w-1/3 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold tracking-wide uppercase mb-3 text-orange-400">
                VJC Overseas–Bangalore
              </h3>
            </div>

            <div className="space-y-1 text-sm leading-relaxed">
              <p>16 & 17, Ground Floor,</p>
              <p>Raheja Arcade,</p>
              <p>5th Block, Koramangala,</p>
              <p>Bangalore, India, 560095</p>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl shadow-lg border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5204439055866!2d77.61864537580665!3d12.93850021557451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144e69b00001%3A0x6734c56434493397!2sRaheja%20Arcade!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
                width="100%"
                height="200"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-52"
              />
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 border-t border-white/10 pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-gray-300">
          <p>
            © 2025 VJC Overseas. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <span className="opacity-70">Privacy & Policy</span>
            <span className="opacity-70">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;