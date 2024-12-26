import React from 'react';
import { ShoppingCart, Sprout } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Sprout className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">EarthWorm</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="hover:text-green-200">About</a>
            <a href="#products" className="hover:text-green-200">Products</a>
            <a href="#learn" className="hover:text-green-200">Learn</a>
            <a href="#solutions" className="hover:text-green-200">Solutions</a>
            <a href="#cart" className="hover:text-green-200">
              <ShoppingCart className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}