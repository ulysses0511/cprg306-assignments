"use client"

import { useEffect, useState } from "react";

export default function MealIdeas( {ingredient}) {
    const [meals, setMeals] = useState([]);
    const [selectedMealDetails, setSelectedMealDetails] = useState(null);
    const [error, setError] = useState('');


    const fetchMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            if (!response.ok) throw new Error('Failed to fetch meal ideas');
            const data = await response.json();
            return data.meals || [];
          } catch (err) {
            console.error(err);
            setError(err.message);
            return [];
          }
        };

    const fetchMealDetails = async (mealId) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
            if (!response.ok) throw new Error('Failed to fetch meal details');
            const data = await response.json();
            return data.meals[0];
        } catch (err) {
            console.error(err);
            setError(err.message);
            return null;
        }
    };
        

    const loadMealIdeas = async () => {
        if (!ingredient) return;
        setError('');
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    const handleMealClick = async (meal) => {
        const details = await fetchMealDetails(meal.idMeal);
        setSelectedMealDetails(details);
      };

    return (
        <div className="meal-ideas p-4 bg-gray-800 rounded-md shadow-lg">
            <h2 className="text-xl font-bold text-white mb-4">Meal Ideas for "{ingredient}"</h2>
            {error && <p className="text-red-500">{error}</p>}
            {meals.length > 0 ? (
            <ul className="mt-4 space-y-2">
                {meals.map((meal) => (
                    <li key={meal.idMeal}
                        onClick={() => handleMealClick(meal)} 
                        className="bg-gray-700 p-3 rounded-md text-white">
                    <h3 className="font-semibold">{meal.strMeal}</h3>
                    {meal.strMealThumb && (
                        <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="mt-2 rounded-md"
                        style={{ maxWidth: '50%' }}
                    />
                    )}
                    </li>
                ))}
            </ul>
            ): (
            <p className="text-gray-400">No meal ideas found for "{ingredient}".</p>)}
        </div>
    );
    
}