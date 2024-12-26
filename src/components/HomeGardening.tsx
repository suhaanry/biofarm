import React from 'react';
import { Flower2, Droplets, Sun, ThermometerSun } from 'lucide-react';

const gardeningTips = [
  {
    icon: <Flower2 className="w-6 h-6 text-green-600" />,
    title: "Plant Selection",
    description: "Choose plants that thrive in your climate zone and available space."
  },
  {
    icon: <Droplets className="w-6 h-6 text-green-600" />,
    title: "Watering Schedule",
    description: "Maintain consistent moisture levels without overwatering."
  },
  {
    icon: <Sun className="w-6 h-6 text-green-600" />,
    title: "Sunlight Requirements",
    description: "Ensure proper light exposure based on plant needs."
  },
  {
    icon: <ThermometerSun className="w-6 h-6 text-green-600" />,
    title: "Temperature Control",
    description: "Monitor and maintain optimal growing temperatures."
  }
];

export default function HomeGardening() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Home Gardening Guide</h2>
          <p className="mt-4 text-xl text-gray-600">Everything you need to know about successful home gardening</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80"
              alt="Home Garden"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Getting Started</h3>
            <p className="text-gray-600 mb-6">
              Starting a home garden is an exciting journey that brings you closer to nature while providing fresh, healthy produce for your table. Whether you're working with a small balcony or a spacious backyard, proper planning and care are essential for success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {gardeningTips.map((tip, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-50 p-3 rounded-lg mr-4">
                      {tip.icon}
                    </div>
                    <h4 className="font-semibold">{tip.title}</h4>
                  </div>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}