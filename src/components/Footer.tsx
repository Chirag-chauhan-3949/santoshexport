import React from 'react';
import { Wheat, Phone, Mail, MapPin, FileText, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Quick Links': [
      { name: 'About Us', href: '#about' },
      { name: 'Our Role', href: '#role' },
      { name: 'Payment Policy', href: '#payment' },
      { name: 'Products', href: '#products' },
      { name: 'Contact', href: '#contact' }
    ],
    'Products': [
      { name: 'Raw Basmati Rice', href: '#products' },
      { name: 'Steam Basmati Rice', href: '#products' },
      { name: 'Sella Basmati Rice', href: '#products' },
      { name: 'Golden Sella Basmati', href: '#products' }
    ],
  };

  // const socialLinks = [
  //   { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
  //   { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
  //   { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
  //   { icon: Instagram, href: '#', color: 'hover:text-pink-600' }
  // ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-emerald-600 rounded-lg">
                <Wheat className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Santosh Exports</h3>
                <p className="text-emerald-400 text-xs sm:text-sm">Rice Trader & Exporter</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              M/s Santosh Exports specializes in premium rice varieties including Basmati, Long-Grain, and Sella.
              We deliver efficiency in sourcing, competitive pricing, and adherence to international food safety
              and export standards.
            </p>
            
            
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">{category}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm sm:text-base text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-sm sm:text-base text-gray-300">+91 8619734001, +91 9928860941</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-sm sm:text-base text-gray-300">info@santoshexports.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span className="text-sm sm:text-base text-gray-300">
                  7, Krishna Vihar, Mangori Wali ki Bagichi, Brahmpuri, Jaipur, Rajasthan, India – 302002
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-emerald-400" />
                <span className="text-sm sm:text-base text-gray-300">GST: 08EANPK2658P2ZS</span>
              </div>
            </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm sm:text-base text-gray-400">
                © 2025 Santosh Exports. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Registered Exporter | Committed to Quality & Compliance
              </p>
            </div>
            
            {/* <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-xs sm:text-sm">Follow us:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`text-gray-400 ${social.color} transition-colors duration-200 hover:scale-110 transform`}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </a>
                  );
                })}
              </div>
            </div> */}
          </div>

          {/* <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div>
                <h5 className="font-semibold text-emerald-400 mb-1 sm:mb-2 text-sm sm:text-base">Rice Varieties</h5>
                <p className="text-gray-400 text-xs sm:text-sm">Basmati | Long-Grain | Sella</p>
              </div>
              <div>
                <h5 className="font-semibold text-amber-400 mb-1 sm:mb-2 text-sm sm:text-base">Compliance</h5>
                <p className="text-gray-400 text-xs sm:text-sm">Food Safety & Export Regulations</p>
              </div>
              <div className="sm:col-span-2 md:col-span-1">
                <h5 className="font-semibold text-emerald-400 mb-1 sm:mb-2 text-sm sm:text-base">Global Trade</h5>
                <p className="text-gray-400 text-xs sm:text-sm">Trusted Worldwide Partnerships</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
