import React from 'react';
import { Sprout, Timer, LineChart, AlertCircle } from 'lucide-react';

const applicationSteps = [
  {
    title: "Preparation",
    description: "Mix vermicompost with garden soil in a 1:4 ratio for optimal results.",
    icon: <Sprout className="w-6 h-6 text-green-600" />
  },
  {
    title: "Timing",
    description: "Apply during planting or as a top dressing every 2-3 months.",
    icon: <Timer className="w-6 h-6 text-green-600" />
  },
  {
    title: "Monitoring",
    description: "Observe plant growth and adjust application rates accordingly.",
    icon: <LineChart className="w-6 h-6 text-green-600" />
  },
  {
    title: "Precautions",
    description: "Avoid direct contact with plant stems and roots.",
    icon: <AlertCircle className="w-6 h-6 text-green-600" />
  }
];

export default function VermicompostGuide() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">How to Use Vermicompost</h2>
          <p className="mt-4 text-xl text-gray-600">A comprehensive guide to applying vermicompost in your garden</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-green-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6">Application Guide</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {applicationSteps.map((step, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-50 p-3 rounded-lg mr-4">
                        {step.icon}
                      </div>
                      <h4 className="font-semibold">{step.title}</h4>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="bg-green-50 p-2 rounded-full mr-4">
                    <Sprout className="w-4 h-4 text-green-600" />
                  </div>
                  <span>Improves soil structure and fertility</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-50 p-2 rounded-full mr-4">
                    <Sprout className="w-4 h-4 text-green-600" />
                  </div>
                  <span>Enhances plant growth and yield</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-50 p-2 rounded-full mr-4">
                    <Sprout className="w-4 h-4 text-green-600" />
                  </div>
                  <span>Increases disease resistance</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-50 p-2 rounded-full mr-4">
                    <Sprout className="w-4 h-4 text-green-600" />
                  </div>
                  <span>Promotes beneficial microorganism growth</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="sticky top-8">
              <img
                src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80"
                alt="Vermicompost Application"
                className="rounded-2xl shadow-lg mb-8"
              />
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-bold mb-4">Quick Tips</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <div className="bg-green-100 p-1 rounded-full mr-3">
                      <Sprout className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Store in a cool, dry place</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 p-1 rounded-full mr-3">
                      <Sprout className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Use within 6 months of purchase</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 p-1 rounded-full mr-3">
                      <Sprout className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Keep away from direct sunlight</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}