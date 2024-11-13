"use client"

import { useState } from "react";
import Item from "./item";

function ItemList( {items, onItemSelect } ) {

    const [sortBy, setSortBy] = useState("name");
    
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
          return a.category.localeCompare(b.category);
        }
        return 0;
      });


      return (
        <div className="max-w-md mx-auto p-4 bg-gray-900 rounded-md shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Shopping List</h2>
    
          {/* Sort Buttons */}
          <div className="flex justify-center mb-4">
            <span className="text-white mr-2">Sort by:</span>
            <button
              onClick={() => setSortBy('name')}
              className={`px-4 py-2 mx-2 font-semibold rounded-md ${sortBy === 'name' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'}`}
            >
              Name
            </button>
            <button
              onClick={() => setSortBy('category')}
              className={`px-4 py-2 mx-2 font-semibold rounded-md ${sortBy === 'category' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'}`}
            >
              Category
            </button>
          </div>
    
          {/* List of Items */}
          <ul className="space-y-4">
            {sortedItems.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={onItemSelect}
              />
            ))}
          </ul>
        </div>
      );
}
    
export default ItemList;