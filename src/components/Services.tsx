import React from 'react';
import ServiceCard from './ServiceCard';
import { Sprout, Building2, GraduationCap } from 'lucide-react';

export default function Services() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">Comprehensive solutions for all your vermicomposting needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Home Gardening"
            description="Premium vermicompost products and solutions for home gardeners and hobbyists."
            icon={<Sprout className="w-8 h-8 text-green-600" />}
            link="#products"
          />
          <ServiceCard
            title="Commercial Solutions"
            description="Large-scale vermicompost supply and consultation for agricultural businesses."
            icon={<Building2 className="w-8 h-8 text-green-600" />}
            link="#products"
          />
          <ServiceCard
            title="Education & Training"
            description="Expert resources and guidance for successful vermicomposting."
            icon={<GraduationCap className="w-8 h-8 text-green-600" />}
            link="#learn"
          />
        </div>
      </div>
    </section>
  );
}