import React from 'react';
import type { Product } from '../types';
import { ArrowRight, Leaf, Package } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
          <span className="text-green-700 font-medium">${product.price}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-green-50 p-2 rounded-full">
            <Package className="w-4 h-4 text-green-600" />
          </div>
          <span className="text-sm font-medium text-green-600 capitalize">{product.category}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-3 rounded-lg">
            <span className="text-sm text-gray-600">Size</span>
            <p className="font-medium">{product.size}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <span className="text-sm text-gray-600">Status</span>
            <p className="font-medium text-green-600">{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
          </div>
        </div>
        
        <button 
          className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2 group"
        >
          Add to Cart
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}