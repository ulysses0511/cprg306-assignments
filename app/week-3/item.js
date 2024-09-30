function Item({name, quantity, category}){
    return (
        <li className="flex justify-between items-center p-4 bg-blue-100 rounded-lg shadow-md">
            <div className="text-lg font-semibold text-gray-800">{name}</div>
            <div className="text-gray-600">Quantity: {quantity}</div>
            <div className="text-sm text-gray-500 italic">{category}</div>
        </li>
    );
};

export default Item;