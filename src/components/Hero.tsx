import React from 'react';
import { Leaf, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-green-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1574483825944-a284397f06c9?auto=format&fit=crop&q=80"
          alt="Vermicompost"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/10 p-3 rounded-full">
              <Leaf className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Transform Your Garden
            <span className="block text-green-400">Naturally</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-green-100">
            Premium vermicompost products for sustainable growing. From home gardens to commercial agriculture.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center justify-center bg-white text-green-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition group">
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center justify-center border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}