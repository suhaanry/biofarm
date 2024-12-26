import React from 'react';
import { Code2, Leaf, LineChart, Settings } from 'lucide-react';

const solutions = [
  {
    icon: <Code2 className="w-8 h-8 text-green-600" />,
    title: "Custom Development",
    description: "Tailored solutions built to meet your specific requirements and business goals."
  },
  {
    icon: <Settings className="w-8 h-8 text-green-600" />,
    title: "System Integration",
    description: "Seamless integration of our products with your existing systems and workflows."
  },
  {
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    title: "Sustainable Solutions",
    description: "Eco-friendly approaches that promote environmental responsibility."
  },
  {
    icon: <LineChart className="w-8 h-8 text-green-600" />,
    title: "Performance Optimization",
    description: "Enhance efficiency and productivity with our optimization services."
  }
];

export default function Solutions() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Solutions</h2>
          <p className="mt-4 text-xl text-gray-600">Comprehensive solutions tailored to your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-green-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}