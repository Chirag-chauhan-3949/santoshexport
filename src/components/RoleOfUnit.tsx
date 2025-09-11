import React from 'react';
import { ShoppingCart, CheckCircle, Warehouse, FileCheck, Handshake } from 'lucide-react';

const RoleOfUnit = () => {
  const roles = [
    {
      icon: ShoppingCart,
      title: 'Sourcing and Procurement',
      description: 'Direct procurement from farmers, wholesalers, and mills to ensure variety and export-grade quality.',
      color: 'emerald'
    },
    {
      icon: CheckCircle,
      title: 'Processing and Quality Control',
      description: 'Husking, polishing, sorting and stringent grading to meet importer standards.',
      color: 'amber'
    },
    {
      icon: Warehouse,
      title: 'Storage and Logistics',
      description: 'Secure warehousing and coordinated freight for on-time deliveries.',
      color: 'emerald'
    },
    {
      icon: Warehouse,
      title: 'Market Analysis and Pricing',
      description: 'Real-time market monitoring to set competitive prices and identify profitable markets.',
      color: 'amber'
    },
    {
      icon: FileCheck,
      title: 'Regulatory Compliance',
      description: 'Phytosanitary certification, packaging standards, and export documentation handled end-to-end.',
      color: 'emerald'
    },
    {
      icon: Handshake,
      title: 'Trade Relationships',
      description: 'Long-term partnerships with importers, distributors and retailers worldwide.',
      color: 'amber'
    }
  ];

  return (
    <section id="role" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Strategic Role</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive rice trading operations spanning the entire value chain from procurement to export delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {roles.map((role, index) => {
            const Icon = role.icon;
            const isCenter = index === 2; // Middle card for 5 items in 3-column grid
            
            return (
              <div 
                key={index}
                className={`group relative w-full ${
                  isCenter ? 'lg:col-span-1 lg:mx-auto lg:max-w-sm' : ''
                } ${
                  index >= 3 ? 'lg:col-span-1 lg:mx-auto lg:max-w-sm' : ''
                }`}
              >
                <div className="h-full p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group-hover:scale-105">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${
                    role.color === 'emerald' 
                      ? 'from-emerald-100 to-emerald-200' 
                      : 'from-amber-100 to-amber-200'
                  } rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 sm:h-10 sm:w-10 ${
                      role.color === 'emerald' ? 'text-emerald-600' : 'text-amber-600'
                    }`} />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {role.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {role.description}
                  </p>
                  
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    role.color === 'emerald'
                      ? 'from-emerald-600 to-emerald-400'
                      : 'from-amber-600 to-amber-400'
                  } rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Our Competitive Advantage</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900">Supply Chain Efficiency</h4>
                <p className="text-sm sm:text-base text-gray-600">Streamlined operations from farm to export destination</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900">Competitive Pricing</h4>
                <p className="text-sm sm:text-base text-gray-600">Market-driven pricing with transparent cost structure</p>
              </div>
              <div className="space-y-3 sm:col-span-2 md:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900">Innovation & Sustainability</h4>
                <p className="text-sm sm:text-base text-gray-600">Modern practices enhancing market competitiveness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleOfUnit;