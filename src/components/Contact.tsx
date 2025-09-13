// ContactFormSubmitExact.jsx
import React, { useState } from 'react';
import { Phone, Mail, MapPin, FileText, Send, CheckCircle } from 'lucide-react';

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/kkaran.khatri@gmail.com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic client-side validation (as in your original)
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill Name, Email and Message.');
      return;
    }

    setIsSending(true);

    try {
      // Build FormData with EXACT same field names
      const fd = new FormData();
      fd.append('name', formData.name);
      fd.append('email', formData.email);
      fd.append('company', formData.company || '');
      fd.append('phone', formData.phone || '');
      fd.append('product', formData.product || '');
      fd.append('quantity', formData.quantity || '');
      fd.append('message', formData.message || '');

      // Optional FormSubmit control fields (kept minimal)
      fd.append('_subject', `Website Inquiry — ${formData.product || 'General'}`);
      // If you want FormSubmit captcha enabled change/remove this; keeping false like your earlier example:
      fd.append('_captcha', 'false');

      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        body: fd,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3500);

        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          product: '',
          quantity: '',
          message: ''
        });
      } else {
        const text = await res.text();
        console.error('FormSubmit error:', text);
        alert('Failed to send inquiry. Please try again later.');
      }
    } catch (err) {
      console.error('Network error sending form:', err);
      alert('Network error — please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 8619734001', '+91 8690774861'],
      color: 'emerald'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['kkaran.khatri@gmail.com'],
      color: 'amber'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Santosh Exports, 7, Krishna Vihar, Mangori Wali ki Bagichi,', 'Brahmpuri, Jaipur, Rajasthan, India – 302002'],
      color: 'emerald'
    },
    {
      icon: FileText,
      title: 'GST Number',
      details: ['08EANPK2658P2ZS'],
      color: 'amber'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-emerald-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Reach out to Santosh Exports for premium Basmati rice sourcing and export inquiries. We’re here to provide
            competitive quotes, product details, and reliable trade support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Contact Information</h3>
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${
                      info.color === 'emerald'
                        ? 'from-emerald-100 to-emerald-200'
                        : 'from-amber-100 to-amber-200'
                    } rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${
                        info.color === 'emerald' ? 'text-emerald-600' : 'text-amber-600'
                      }`} />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{info.title}</h4>
                      {info.details.map((detail, dIndex) => (
                        <p key={dIndex} className="text-sm sm:text-base text-gray-600 leading-relaxed">{detail}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 sm:mt-8 p-6 sm:p-8 bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Why Choose Santosh Exports?</h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm sm:text-base text-gray-700">Direct sourcing from farmers and millers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm sm:text-base text-gray-700">Strict quality control & export compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm sm:text-base text-gray-700">Efficient logistics and global delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm sm:text-base text-gray-700">Trusted by importers and distributors worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Request a Quote</h3>

              {isSubmitted && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-emerald-100 border border-emerald-300 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <p className="text-sm sm:text-base text-emerald-800">Thank you! Your inquiry has been submitted successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm sm:text-base"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm sm:text-base"
                      placeholder="+91 8619734001"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                      Product Interest
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm sm:text-base"
                    >
                      <option value="">Select Product</option>
                      <option value="Raw Basmati Rice">Raw Basmati Rice</option>
                      <option value="Steam Basmati Rice">Steam Basmati Rice</option>
                      <option value="Sella Basmati Rice">Sella Basmati Rice</option>
                      <option value="Golden Sella Basmati">Golden Sella Basmati</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity Required
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm sm:text-base"
                      placeholder="e.g., 100 MT"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none text-sm sm:text-base"
                    placeholder="Please provide additional details about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 ${isSending ? 'bg-gray-400 cursor-wait' : 'bg-emerald-600 hover:bg-emerald-700'} text-white font-semibold rounded-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1 text-sm sm:text-base`}
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSending ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
