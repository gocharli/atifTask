import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-teal-50 via-green-50 to-pink-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              {/* Replace with your actual logo path */}
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">OC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-teal-600">OPENCOLLAR</h3>
                <p className="text-sm text-teal-500 font-medium">
                  -TECHNOLOGIES-
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              We have a large pool of highly skilled engineers with excellent
              technical knowledge and proven successful project experience.
            </p>

            <div>
              <p className="text-gray-700 font-semibold mb-3">Follow us:</p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 group"
                >
                  <span className="text-gray-600 group-hover:text-teal-500 transition-colors duration-300">
                    f
                  </span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 group"
                >
                  <span className="text-gray-600 group-hover:text-teal-500 transition-colors duration-300">
                    @
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Get in touch Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-gray-800">Get in touch</h4>

            <div className="space-y-4">
              <div>
                <p className="text-gray-700 font-semibold mb-2">Address:</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  9169 W State St#1015 Garden City,
                  <br />
                  ID 83714.
                </p>
              </div>

              <div>
                <p className="text-gray-700 font-semibold mb-2">Email:</p>
                <a
                  href="mailto:info@opencollartech.com"
                  className="text-gray-600 text-sm hover:text-teal-500 transition-colors duration-300"
                >
                  info@opencollartech.com
                </a>
              </div>

              <div>
                <p className="text-gray-700 font-semibold mb-2">
                  Phone (Whatsapp):
                </p>
                <a
                  href="tel:+15163730541"
                  className="text-gray-600 text-sm hover:text-teal-500 transition-colors duration-300"
                >
                  +1 (516) 373 0541
                </a>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-gray-800">Services</h4>

            <div className="space-y-3">
              {[
                "Web Applications",
                "Mobile Applications",
                "Support Services",
                "Blockchain Development",
                "Product Development",
                "Emerging Technologies",
                "Artificial Intelligence",
              ].map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-600 text-sm hover:text-teal-500 transition-colors duration-300 hover:translate-x-1 transform transition-transform"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-gray-800">Quick Links</h4>

            <div className="space-y-3">
              {[
                "About us",
                "Contact us",
                "Hosting",
                "Consult with us",
                "Articles",
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-600 text-sm hover:text-teal-500 transition-colors duration-300 hover:translate-x-1 transform transition-transform"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            Copyright © 2016-2025 Opencollar Technologies LLC.
          </p>

          <div className="flex items-center space-x-4">
            <p className="text-gray-400 text-xs">Activate Windows</p>
            <p className="text-gray-400 text-xs">
              Go to Settings to activate Windows.
            </p>
            <button className="w-8 h-8 bg-teal-500 hover:bg-teal-600 rounded-full flex items-center justify-center transition-colors duration-300 group">
              <span className="text-white text-sm group-hover:scale-110 transform transition-transform duration-300">
                ↗
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
