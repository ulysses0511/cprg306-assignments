'use client';

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page(){

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return(
        <main>
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-blue-600">Shopping List</h1>
            </header>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    )
};