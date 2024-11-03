import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            About GlowGuide
          </h1>
          <p className="text-xl text-gray-600" aria-label="Platform Description">
            Your Personal Beauty Discovery Platform
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          {/* Mission Statement */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              GlowGuide is dedicated to simplifying your beauty journey by connecting you with the perfect cosmetic products tailored to your unique needs and preferences. We believe everyone deserves to feel confident in their skincare choices.
            </p>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Personalized Recommendations */}
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-purple-600">
                  Personalized Recommendations
                </h3>
                <p className="text-gray-600">
                  Get customized product suggestions based on your skin type, concerns, and preferences.
                </p>
              </div>

              {/* Comprehensive Product Catalog */}
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-purple-600">
                  Comprehensive Product Catalog
                </h3>
                <p className="text-gray-600">
                  Browse through our extensive collection with advanced filters for brands, ingredients, and skin concerns.
                </p>
              </div>

              {/* User Reviews & Ratings */}
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-purple-600">
                  User Reviews & Ratings
                </h3>
                <p className="text-gray-600">
                  Make informed decisions with authentic reviews and ratings from our community.
                </p>
              </div>

              {/* Favorites System */}
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-purple-600">
                  Favorites System
                </h3>
                <p className="text-gray-600">
                  Save your preferred products for quick access and future reference.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">
              How It Works
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                1. Create your beauty profile by answering a few questions about your skin type and concerns.
              </p>
              <p className="text-gray-700">
                2. Receive personalized product recommendations based on your profile.
              </p>
              <p className="text-gray-700">
                3. Browse detailed product information, reviews, and ratings.
              </p>
              <p className="text-gray-700">
                4. Save your favorite products and track your beauty journey.
              </p>
            </div>
          </section>

          {/* Why Choose Us */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">
              Why Choose GlowGuide
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Expert Curation */}
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-purple-600">
                  Expert Curation
                </h3>
                <p className="text-gray-600">
                  Our recommendations are backed by beauty experts and dermatologists.
                </p>
              </div>

              {/* Personalized Experience */}
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-purple-600">
                  Personalized Experience
                </h3>
                <p className="text-gray-600">
                  Every recommendation is tailored to your unique beauty needs.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
