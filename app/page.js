'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    groupSize: '2',
    cuisinePreference: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Booking request:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      groupSize: '2',
      cuisinePreference: '',
      notes: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="border-b border-amber-200 bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-amber-900">🍽️ DC Food Tour</h1>
          <nav className="text-sm text-amber-700">
            <a href="#about" className="hover:text-amber-900 mr-6">About</a>
            <a href="#what-included" className="hover:text-amber-900 mr-6">What's Included</a>
            <a href="#booking" className="hover:text-amber-900">Book Now</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-5xl font-bold text-amber-950 mb-4">
          Discover Hidden Food Gems in DC
        </h2>
        <p className="text-xl text-amber-800 mb-8 max-w-2xl mx-auto">
          A curated 3.5-hour walking food tour through Columbia Heights & U Street. 
          Four stops, three courses, and unforgettable flavors.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#booking"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Reserve Your Spot
          </a>
          <a
            href="#what-included"
            className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* What's Included */}
      <section id="what-included" className="bg-white py-16 border-y border-amber-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-amber-950 mb-12 text-center">What's Included</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Stop 1 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border border-amber-200">
              <div className="text-4xl mb-3">🍽️</div>
              <h3 className="text-2xl font-bold text-amber-950 mb-2">Stop 1: Appetizer</h3>
              <p className="text-lg font-bold text-amber-700 mb-2">[Restaurant Name]</p>
              <p className="text-amber-800 mb-4">
                [Description of cuisine and dish]. Paired with a craft cocktail or beverage of choice.
              </p>
              <p className="text-sm text-amber-700">Cuisine: [Type]</p>
            </div>

            {/* Stop 2 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-amber-200">
              <div className="text-4xl mb-3">🥘</div>
              <h3 className="text-2xl font-bold text-amber-950 mb-2">Stop 2: Main Course</h3>
              <p className="text-lg font-bold text-amber-700 mb-2">[Restaurant Name]</p>
              <p className="text-amber-800 mb-4">
                [Description of cuisine and dish]. Another appetizer portion and refreshing beverage await.
              </p>
              <p className="text-sm text-amber-700">Cuisine: [Type]</p>
            </div>

            {/* Stop 3 */}
            <div className="bg-gradient-to-br from-red-50 to-amber-50 p-8 rounded-xl border border-amber-200">
              <div className="text-4xl mb-3">🍤</div>
              <h3 className="text-2xl font-bold text-amber-950 mb-2">Stop 3: Savory Finale</h3>
              <p className="text-lg font-bold text-amber-700 mb-2">[Restaurant Name]</p>
              <p className="text-amber-800 mb-4">
                [Description of cuisine and dish]. A third appetizer portion and cocktail round out the experience.
              </p>
              <p className="text-sm text-amber-700">Cuisine: [Type]</p>
            </div>

            {/* Stop 4 */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-xl border border-amber-200">
              <div className="text-4xl mb-3">🍰</div>
              <h3 className="text-2xl font-bold text-amber-950 mb-2">Stop 4: Sweet Ending</h3>
              <p className="text-lg font-bold text-amber-700 mb-2">[Dessert Destination]</p>
              <p className="text-amber-800 mb-4">
                [Description of desserts and beverages]. The perfect way to end the tour.
              </p>
              <p className="text-sm text-amber-700">Cuisine: [Type]</p>
            </div>
          </div>

          <div className="bg-amber-100 border-2 border-amber-300 p-8 rounded-xl text-center">
            <p className="text-amber-950 text-lg">
              <strong>Price:</strong> $85 per person | <strong>Duration:</strong> 3-3.5 hours | <strong>Group Size:</strong> 4-8 people
            </p>
          </div>
        </div>
      </section>

      {/* Why This Tour */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-amber-950 mb-8">Why This Tour?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-5xl mb-4">🗺️</div>
            <h3 className="text-2xl font-bold text-amber-950 mb-3">Hidden Gems</h3>
            <p className="text-amber-800">
              Explore Columbia Heights and U Street's best-kept secrets. We take you to places tourists miss and locals love.
            </p>
          </div>

          <div>
            <div className="text-5xl mb-4">👥</div>
            <h3 className="text-2xl font-bold text-amber-950 mb-3">Custom Routes</h3>
            <p className="text-amber-800">
              Tell us your cuisine preferences and vibe. We'll craft a personalized tour that matches your taste and style.
            </p>
          </div>

          <div>
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-amber-950 mb-3">Happy Hour Energy</h3>
            <p className="text-amber-800">
              Casual, fun, and social. Perfect for friends, dates, team outings, or anyone looking for a good time with great food.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="bg-gradient-to-r from-amber-600 to-orange-600 py-16">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Reserve Your Spot</h2>

          {submitted && (
            <div className="bg-green-100 border-2 border-green-400 text-green-800 p-4 rounded-lg mb-6 text-center font-bold">
              ✅ Thanks for your interest! We'll be in touch soon to confirm your tour.
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-amber-950 font-bold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-amber-950 font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-600"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-amber-950 font-bold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-600"
                  placeholder="(202) 555-1234"
                />
              </div>

              <div>
                <label className="block text-amber-950 font-bold mb-2">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block text-amber-950 font-bold mb-2">Group Size</label>
                <select
                  name="groupSize"
                  value={formData.groupSize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-600"
                >
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4">4 people</option>
                  <option value="5">5 people</option>
                  <option value="6">6 people</option>
                  <option value="7">7 people</option>
                  <option value="8">8 people</option>
                </select>
              </div>

              <div>
                <label className="block text-amber-950 font-bold mb-2">Cuisine Preference</label>
                <input
                  type="text"
                  name="cuisinePreference"
                  value={formData.cuisinePreference}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-600"
                  placeholder="e.g., Latin, Asian, Mediterranean"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-amber-950 font-bold mb-2">Tell Us More (Optional)</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-600 resize-none"
                rows="4"
                placeholder="Dietary restrictions, special occasions, vibe you're looking for..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-lg transition-colors text-lg"
            >
              Request Booking
            </button>

            <p className="text-center text-amber-700 text-sm mt-4">
              We'll confirm availability and finalize details within 24 hours.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-100 py-12 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-lg font-bold mb-2">🍽️ DC Food Tour</p>
          <p className="mb-4">Exploring the best of Columbia Heights & U Street</p>
          <p className="text-sm text-amber-300">
            Email: <a href="mailto:info@dcfoodtour.com" className="hover:text-white underline">info@dcfoodtour.com</a>
          </p>
          <p className="text-xs text-amber-400 mt-8">© 2026 DC Food Tour. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
