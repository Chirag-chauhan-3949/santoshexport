import React from 'react';
import { Target, TrendingUp, Shield, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Sourcing & Procurement',
      description: 'Direct procurement from farmers, wholesalers, or government agencies ensuring rice meets export standards.',
    },
    {
      icon: TrendingUp,
      title: 'Processing & Quality Control',
      description: 'Husking, polishing, sorting, and grading of rice in line with international quality standards.',
    },
    {
      icon: Shield,
      title: 'Storage & Logistics',
      description: 'Large warehouses and seamless coordination with shipping, freight, and customs for timely deliveries.',
    },
    {
      icon: Users,
      title: 'Market Analysis & Trade',
      description: 'Monitoring global supply-demand, pricing strategies, and building strong trade partnerships worldwide.',
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Adherence to export regulations, certifications, and phytosanitary requirements of importing countries.',
    },
    {
      icon: Users,
      title: 'Global Relationships',
      description: 'Long-term partnerships with importers, distributors, and retailers across international markets.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-emerald-600">Santosh Exports</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            We, M/s Santosh Exports, are rice traders and exporters specializing in sourcing, marketing, and
            supplying premium basmati rice to domestic and international buyers. We ensure strict quality standards,
            manage logistics, and comply with trade regulations to deliver consistently high-quality rice.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Business Excellence</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our operations cover procurement from farmers and millers, quality control, price negotiation,
              and shipment coordination. We continuously analyze global rice markets, manage risks, and
              maintain strong trade relationships worldwide.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our specialization spans basmati, long-grain, and sella rice varieties. With a focus on supply
              chain efficiency, competitive pricing, and adherence to international food safety standards,
              we deliver value and trust to our global clients.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-1">92%+</div>
                <div className="text-sm text-gray-600">Purity Level</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1">&lt;12.5%</div>
                <div className="text-sm text-gray-600">Moisture Content</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-1">&lt;1%</div>
                <div className="text-sm text-gray-600">Broken Grains</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-100 to-amber-100 p-1 shadow-xl mt-8 lg:mt-0">
              <div className="h-full w-full rounded-2xl bg-white/90 backdrop-blur-sm p-4 sm:p-6 lg:p-8">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-600 to-amber-600 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Commitment</h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Supply chain efficiency, competitive pricing, and unwavering adherence to international
                    food safety standards drive our commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
