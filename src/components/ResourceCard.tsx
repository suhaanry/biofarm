import React from 'react';
import type { EducationalResource } from '../types';
import { BookOpen, Play, FileText, ArrowRight } from 'lucide-react';

interface ResourceCardProps {
  resource: EducationalResource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const getIcon = () => {
    switch (resource.type) {
      case 'article':
        return <FileText className="h-5 w-5" />;
      case 'video':
        return <Play className="h-5 w-5" />;
      case 'guide':
        return <BookOpen className="h-5 w-5" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img 
          src={resource.thumbnail} 
          alt={resource.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex items-center gap-2 text-white">
            <div className="bg-white/20 p-2 rounded-full">
              {getIcon()}
            </div>
            <span className="capitalize font-medium">{resource.type}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
        <p className="text-gray-600 mb-4">{resource.description}</p>
        
        <div className="flex items-center justify-between">
          {resource.readTime && (
            <span className="text-sm text-gray-500 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              {resource.readTime}
            </span>
          )}
          <button className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1 group">
            Read More
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}