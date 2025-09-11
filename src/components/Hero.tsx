import React from 'react';
import { ArrowRight, Globe, Award, Truck, Wheat } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-20 lg:pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-white to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-emerald-100 rounded-full text-emerald-800 text-xs sm:text-sm font-medium">
                <Globe className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">International Rice Trading Excellence</span>
                <span className="sm:hidden">Rice Trading Excellence</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Santosh Exports
                <span className="text-emerald-600"> Premium Basmati Rice</span>
                <span className="text-amber-600"> Exporter</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Trusted Rice Trader & Exporter | Supplying quality basmati rice worldwide
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
              >
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-600 hover:text-white transition-all duration-300 text-sm sm:text-base"
              >
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg mx-auto mb-2 sm:mb-3">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Quality Assured</h3>
                <p className="text-sm text-gray-600">International Standards</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-lg mx-auto mb-2 sm:mb-3">
                  <Globe className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Global Reach</h3>
                <p className="text-sm text-gray-600">Worldwide Export</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg mx-auto mb-2 sm:mb-3">
                  <Truck className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Reliable Logistics</h3>
                <p className="text-sm text-gray-600">Timely Delivery</p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-square max-w-md mx-auto lg:max-w-none rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-100 to-amber-100 p-6 sm:p-8 shadow-2xl">
              <div className="h-full w-full rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-emerald-600 to-amber-600 rounded-full mx-auto flex items-center justify-center">
                    <Wheat className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Premium Quality</h3>
                  <p className="text-sm sm:text-base text-gray-600">Basmati Rice Varieties</p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 pt-2 sm:pt-4">
                    <div className="bg-emerald-50 p-2 sm:p-3 rounded-lg">
                      <p className="text-xs sm:text-sm font-medium text-emerald-800">1121 Basmati</p>
                    </div>
                    <div className="bg-amber-50 p-2 sm:p-3 rounded-lg">
                      <p className="text-xs sm:text-sm font-medium text-amber-800">1718 Basmati</p>
                    </div>
                    <div className="bg-emerald-50 p-2 sm:p-3 rounded-lg">
                      <p className="text-xs sm:text-sm font-medium text-emerald-800">1847 Basmati</p>
                    </div>
                    <div className="bg-amber-50 p-2 sm:p-3 rounded-lg">
                      <p className="text-xs sm:text-sm font-medium text-amber-800">1509 Basmati</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-amber-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-emerald-200 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;