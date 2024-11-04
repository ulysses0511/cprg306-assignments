function item({name, quantity, category, onSelect, isSelected}) {
    return (
        <li onClick={() => onSelect(name)}
        className={`flex flex-col p-4 rounded-md cursor-pointer ${
            isSelected ? 'bg-orange-500' : 'bg-gray-800'
          }  hover:bg-gray-700`}
        >
            <div className="text-lg font-semibold text-white-800">{name}</div>
            <div className="text-white-600">Quantity: {quantity}</div>
            <div className="text-sm text-gray-500 italic">{category}</div>
        </li>
    );
};

export default item;