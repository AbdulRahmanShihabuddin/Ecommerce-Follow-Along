import React from 'react';

function ProductCard({ name, image, price, description = "" }) {
  return (
    <div className="group relative w-72 rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-3 shadow-sm transition-all hover:shadow-lg">
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={name} 
          className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="flex items-start justify-between">
          <h3 className="font-medium text-gray-900 line-clamp-1">{name}</h3>
          <span className="rounded-full bg-blue-100 px-2.5 py-1 text-sm font-semibold text-blue-800">
            ${price}
          </span>
        </div>
        
        {description && (
          <p className="text-sm text-gray-500 line-clamp-2">
            {description}
          </p>
        )}
        
        <button className="mt-3 w-full rounded-lg bg-gray-900 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;