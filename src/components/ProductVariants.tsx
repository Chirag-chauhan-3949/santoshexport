import React from 'react';
import { Wheat, Star, Award, Zap } from 'lucide-react';

// Replace the placeholder image URLs with your real images (public folder or remote CDN).
// If you're using Next.js and want the <Image> component, swap <img> for next/image and import it.

const ProductVariants = () => {
  const products = [
    {
      category: 'Raw Basmati Rice',
      variants: ['1121', '1718', '1847'],
      // imageUrl can be a path under /public (e.g. '/images/raw-1121.jpg') or a CDN URL
      imageUrl: 'public/images/1.jpg',
      color: 'emerald',
      description: 'Premium quality raw basmati rice with natural aroma and long grains.',
      features: [
        'Purity: 92% Min',
        'Average Grain Length: 8.35mm',
        'Elongation: 18.00mm',
        'Moisture: Under 12.5%',
        'Broken Grain: Under 1%',
        'Kett (Light): 38–40',
        'Packaging: PP, Non-Woven, Jute Bag'
      ]
    },
    {
      category: 'Steam Basmati Rice',
      variants: ['1121', '1718', '1847', '1509'],
      imageUrl: 'public/images/2.jpg',
      color: 'amber',
      description: 'Steam processed basmati rice maintaining nutritional value and taste.',
      features: [
        'Purity: 92% Min',
        'Average Grain Length: 8.35mm',
        'Elongation: 18.50mm',
        'Moisture: Under 12.5%',
        'Broken Grain: Under 1%',
        'Kett: 33–36 (Light), 29–31 (Creamy)',
        'Packaging: PP, Non-Woven, Jute Bag'
      ]
    },
    {
      category: 'Sella Basmati Rice',
      variants: ['1121', '1718', '1847', '1509'],
      imageUrl: 'public/images/3.jpg',
      color: 'emerald',
      description: 'Parboiled basmati rice with enhanced nutritional content and durability.',
      features: [
        'Purity: 92% Min',
        'Average Grain Length: 8.35mm',
        'Elongation: 15.00mm',
        'Moisture: Under 12.5%',
        'Broken Grain: Under 1%',
        'Kett: 32–34 (White), 29–31 (Creamy)',
        'Packaging: PP, Non-Woven, Jute Bag'
      ]
    },
    {
      category: 'Golden Sella Basmati Rice',
      variants: ['1121', '1718', '1847', '1509'],
      imageUrl: 'public/images/4.jpg',
      color: 'amber',
      description: 'Premium golden sella basmati rice with distinctive color and superior quality.',
      features: [
        'Purity: 92% Min',
        'Average Grain Length: 8.35mm',
        'Elongation: 14.50mm',
        'Moisture: Under 12.5%',
        'Broken Grain: Under 1%',
        'Kett (Golden): 20–22',
        'Packaging: PP, Non-Woven, Jute Bag'
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Product Variants</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto mb-6" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Premium basmati rice varieties processed to international standards for global markets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {products.map((product, index) => {
            const isEmerald = product.color === 'emerald';

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${isEmerald ? 'from-emerald-600 to-emerald-400' : 'from-amber-600 to-amber-400'}`} />

                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                    {/* Image / avatar area */}
                    <div className={`flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 ${isEmerald ? 'ring-emerald-100' : 'ring-amber-100'} ring-1 ring-opacity-80`}>
                      {/* Make a fixed aspect ratio box so images look consistent */}
                      <div className="w-28 h-28 sm:w-32 sm:h-32 relative overflow-hidden">
                        {product.imageUrl ? (
                          <img
                            src={product.imageUrl}
                            alt={product.category}
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          // fallback to icon if image missing
                          <div className={`w-full h-full flex items-center justify-center ${isEmerald ? 'bg-emerald-50' : 'bg-amber-50'}`}>
                            {/* keep the old icon as fallback */}
                            {/* eslint-disable-next-line react/jsx-pascal-case */}
                            <Wheat className={`h-8 w-8 ${isEmerald ? 'text-emerald-600' : 'text-amber-600'}`} />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className={`text-xl sm:text-2xl font-bold text-gray-900 ${isEmerald ? 'group-hover:text-emerald-600' : 'group-hover:text-amber-600'} transition-colors duration-300`}>
                        {product.category}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mt-1">{product.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Available Variants:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((variant, vIndex) => (
                        <span
                          key={vIndex}
                          className={`px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r ${isEmerald ? 'from-emerald-100 to-emerald-50 text-emerald-800 border border-emerald-200' : 'from-amber-100 to-amber-50 text-amber-800 border border-amber-200'} rounded-lg font-medium text-xs sm:text-sm hover:shadow-md transition-shadow duration-200`}
                        >
                          {variant} Basmati
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {product.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${isEmerald ? 'bg-emerald-600' : 'bg-amber-600'}`} />
                          <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Specifications (from brochure data) */}
        <div className="mt-12 sm:mt-16 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Quality Specifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <Wheat className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">Grain Length</h4>
                <p className="text-gray-600 text-xs sm:text-sm">8.35mm average length</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">Purity Level</h4>
                <p className="text-gray-600 text-xs sm:text-sm">92% minimum</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">Moisture Content</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Under 12.5%</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">Broken Grains</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Under 1%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductVariants;


// updated with image