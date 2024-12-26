import React from 'react';
import { Award, Users, Globe2 } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-6 h-6 text-green-600" />,
    value: "10k+",
    label: "Happy Customers"
  },
  {
    icon: <Globe2 className="w-6 h-6 text-green-600" />,
    value: "25+",
    label: "Countries Served"
  },
  {
    icon: <Award className="w-6 h-6 text-green-600" />,
    value: "15+",
    label: "Years Experience"
  }
];

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              We are dedicated to providing sustainable solutions through innovative vermicomposting technologies. Our mission is to transform organic waste into valuable resources while promoting environmental sustainability.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With over 15 years of experience, we've helped thousands of customers across the globe achieve their sustainability goals through our premium products and expert guidance.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80" 
              alt="Sustainable farming" 
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-50 p-8 rounded-xl shadow-lg">
              <p className="text-green-800 font-medium">"Committed to sustainable solutions for a better tomorrow"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}