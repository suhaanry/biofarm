import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export default function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105">
      <div className="flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a 
        href={link}
        className="inline-flex items-center text-green-600 hover:text-green-700"
      >
        Learn More
        <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  );
}