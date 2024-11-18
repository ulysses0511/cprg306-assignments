'use client';

import Link from "next/link";
import { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from "./new-item";
//import itemsData from "./items.json";
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../_utils/auth-context';
import { useRouter } from 'next/navigation';
import { getItems, addItem } from '../_services/shopping-list-service';



export default function Page(){

    const { user } = useUserAuth();
    const router = useRouter();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');

    useEffect(() => {
        if (!user) {
          router.push('/week-10');
        } else {
          loadItems();
        }
      }, [user, router]);

    if (!user) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>You need to log in to view this page. <Link href="/week-10">Go to the landing page</Link></p>
        </div>
    );
    }

    const loadItems = async () => {
        if (user){
            const fetchedItems = await getItems(user.uid);
            setItems(fetchedItems);
         }
    };
        

    const handleAddItem = async (newItem) => {
        if (user){
            const newItemId = await addItem(user.uid, newItem);
            if (newItemId){
                setItems((prevItems) => [...prevItems, {id: newItemId, ...newItem}]);
            }
        }
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
}