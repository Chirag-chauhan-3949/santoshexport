import React from 'react';
import { CreditCard, FileText, Clock, Shield, DollarSign, AlertTriangle, Globe, CheckCircle } from 'lucide-react';

const PaymentPolicy = () => {
  const paymentMethods = [
    {
      icon: CreditCard,
      title: 'Advance Payment',
      description: 'Full or partial payment before shipment, reducing exporter risk.',
      color: 'emerald'
    },
    {
      icon: FileText,
      title: 'Letter of Credit (L/C)',
      description: 'Bank-guaranteed payment released upon fulfilling contractual conditions.',
      color: 'amber'
    },
    {
      icon: Clock,
      title: 'Documents Against Payment (D/P)',
      description: 'Importer must pay before receiving shipping documents.',
      color: 'emerald'
    },
    {
      icon: Shield,
      title: 'Documents Against Acceptance (D/A)',
      description: 'Importer accepts a bill of exchange and pays at a later agreed date.',
      color: 'amber'
    }
  ];

  const policyFeatures = [
    {
      icon: Clock,
      title: 'Payment Terms & Timing',
      description: 'Defined payment schedules (e.g., 30%, 50%, or 100% upfront). Due dates based on invoice issuance or shipment date.'
    },
    {
      icon: Globe,
      title: 'Currency & Exchange Rate',
      description: 'Payments should be in stable currencies to avoid exchange risks. Hedging strategies may be used for fluctuations.'
    },
    {
      icon: AlertTriangle,
      title: 'Late Payments',
      description: 'Late payments may incur penalties or interest charges, with clear policies on extensions and overdue amounts.'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Trade credit insurance, bank guarantees, and standby letters of credit ensure financial security.'
    },
    {
      icon: CheckCircle,
      title: 'Trade Compliance',
      description: 'Adherence to government export policies, AML laws, and proper tax and audit documentation.'
    }
  ];

  return (
    <section id="payment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Payment Policy</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Our payment policy ensures secure, flexible, and transparent transactions for both buyers and exporters.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">Payment Methods</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {paymentMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div 
                  key={index}
                  className="group p-4 sm:p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${
                    method.color === 'emerald' 
                      ? 'from-emerald-100 to-emerald-200' 
                      : 'from-amber-100 to-amber-200'
                  } rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 sm:h-8 sm:w-8 ${
                      method.color === 'emerald' ? 'text-emerald-600' : 'text-amber-600'
                    }`} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{method.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{method.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Policy Features */}
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Policy Features</h3>
            <div className="space-y-6">
              {policyFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Choose */}
          <div className="bg-gradient-to-br from-emerald-50 to-amber-50 p-6 sm:p-8 rounded-2xl mt-8 lg:mt-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Why Our Payment Policy?</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
                <span className="text-sm sm:text-base text-gray-700">Balances exporter security and buyer flexibility</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
                <span className="text-sm sm:text-base text-gray-700">Transparent schedules and due dates</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
                <span className="text-sm sm:text-base text-gray-700">Stable currency options with risk management</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
                <span className="text-sm sm:text-base text-gray-700">Insurance and bank guarantees for protection</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
                <span className="text-sm sm:text-base text-gray-700">Compliance with export laws and tax regulations</span>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
                <h4 className="text-lg sm:text-xl font-bold text-gray-900">Payment Security</h4>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                All transactions follow secure international banking channels, supported by trade credit insurance, 
                government compliance, and anti-money laundering safeguards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPolicy;
