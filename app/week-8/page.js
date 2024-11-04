'use client';

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from './meal-ideas';

export default function Page(){

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');


    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleItemSelect = (name) => {
        const cleanedName = name.split(',')[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '').trim();
        setSelectedItemName(cleanedName);
    };

    return(
        <main className="min-h-screen p-6 flex space-x-6">
            <div className="flex-1"> 
                <header className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-blue-600">Shopping List</h1>
                </header>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="flex-1">  
                {selectedItemName && (<MealIdeas ingredient={selectedItemName} />)}
            </div>
        </main>
    )
};