'use client'

import {useState} from "react";

export default function NewItem(){

    const [quantity, setQuantity] = useState(1);

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

    let buttonStyles = "mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md";

    return (
        <div className="justify-center bg-slate-300 p-5">
            <h2 className="text-2xl font-semibold mb-4">Count {quantity}</h2>
            <div>
                <button onClick={increment} class={buttonStyles} disabled={quantity===20}>+</button>
                <button onClick={decrement} class={buttonStyles} disabled={quantity===1}>-</button>
            </div>
        </div>

    );

}