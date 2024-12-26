import React from 'react';
import { Leaf, ShoppingBag, BookOpen, Users } from 'lucide-react';

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
}

const steps: Step[] = [
  {
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    title: "Sustainable",
    description: "100% organic production",
    stats: [
      { label: "Organic", value: "100%" },
      { label: "CO2 Reduction", value: "85%" }
    ]
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-green-600" />,
    title: "Quality",
    description: "Premium grade products",
    stats: [
      { label: "Purity", value: "99.9%" },
      { label: "Satisfaction", value: "100%" }
    ]
  },
  {
    icon: <BookOpen className="w-8 h-8 text-green-600" />,
    title: "Education",
    description: "Expert guidance",
    stats: [
      { label: "Resources", value: "500+" },
      { label: "Success Rate", value: "95%" }
    ]
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Community",
    description: "Growing network",
    stats: [
      { label: "Members", value: "10k+" },
      { label: "Countries", value: "25+" }
    ]
  }
];

export default function ProcessSteps() {
  return (
    <div className="relative w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex flex-col items-start">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="grid grid-cols-2 gap-4 w-full">
                  {step.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">{stat.label}</div>
                      <div className="font-bold text-green-600">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}