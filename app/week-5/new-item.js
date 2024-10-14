'use client'

import {useState} from "react";

function NewItem(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const increment = () => {
        let currentQuantity = quantity;
        if (currentQuantity < 20){
            setQuantity(currentQuantity + 1);
        }
    }

    const decrement = () => {
        let currentQuantity = quantity;
        if (currentQuantity > 1){
            setQuantity(currentQuantity - 1);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const item = {name, quantity, category};
        console.log('New Item:', item);

        alert(`Item added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-gray-800 rounded-md shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Add New Item</h2>
            
            {/* Name Field */}
            <div>
                <label for="name">Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)} 
                    placeholder="Item name" 
                    required
                    className="border border-gray-400 rounded-md p-2 w-full"
                />
            </div>
                
            {/* Quantity Field */}
            <div className="flex items-center mb-4">
                <label for="quantity">Quantity: </label>
                <button 
                    type="button"
                    onClick={decrement} 
                    class={`px-4 py-2 bg-gray-500 text-white rounded-md ${quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} 
                    disabled={quantity===1}
                >-</button>
                <span className="mx-4 text-white text-lg">{quantity}</span>
                <button
                    type="button" 
                    onClick={increment} 
                    class={`px-4 py-2 bg-blue-500 text-white rounded-md ${quantity === 20 ? 'opacity-50 cursor-not-allowed' : ''}`} 
                    disabled={quantity===20}
                >+</button>
            </div>
            
            {/* Category Field */}
            <select 
                value={category} 
                onChange={(event) => setCategory(event.target.value)}
                className="border border-gray-400 rounded-md p-2 w-full text-black" 
            >
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen foods">Frozen Foods</option>
                <option value="canned goods">Canned Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
            </select>
                
            {/* Submit Button */}
            <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md">Add Item</button>
        </form>
        // <div className="justify-center bg-slate-300 p-5">
        //     <h2 className="text-2xl font-semibold mb-4">Count {quantity}</h2>
        //     <div>
        //         <button onClick={increment} class={buttonStyles} disabled={quantity===20}>+</button>
        //         <button onClick={decrement} class={buttonStyles} disabled={quantity===1}>-</button>
        //     </div>
        // </div>

    );
}

export default NewItem;