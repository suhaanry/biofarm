import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProcessSteps from './components/ProcessSteps';
import Services from './components/Services';
import Solutions from './components/Solutions';
import AboutUs from './components/AboutUs';
import HomeGardening from './components/HomeGardening';
import VermicompostGuide from './components/VermicompostGuide';
import ProductCard from './components/ProductCard';
import ResourceCard from './components/ResourceCard';
import { products } from './data/products';
import { resources } from './data/resources';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <ProcessSteps />
      <Services />
      <Solutions />
      <HomeGardening />
      <VermicompostGuide />
      <AboutUs />
      
      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
          <p className="mt-4 text-xl text-gray-600">Premium vermicompost for every need</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Educational Resources Section */}
      <section id="learn" className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Learn & Grow</h2>
            <p className="mt-4 text-xl text-gray-600">Expert resources to help you succeed</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-green-100">
                Dedicated to providing sustainable solutions for better growing through premium vermicompost products.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#products" className="text-green-100 hover:text-white">Products</a></li>
                <li><a href="#learn" className="text-green-100 hover:text-white">Resources</a></li>
                <li><a href="#contact" className="text-green-100 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-green-100 mb-4">Stay updated with our latest products and gardening tips.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l text-gray-900"
                />
                <button className="bg-green-700 px-4 py-2 rounded-r hover:bg-green-600 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;