"use client"

import { useEffect, useState } from "react";

export default function MealIdeas( {ingredient}) {
    const [meals, setMeals] = useState([]);


    const fetchMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            if (!response.ok) throw new Error('Failed to fetch meal ideas');
            const data = await response.json();
            return data.meals || [];
          } catch (err) {
            throw err;
          }
        };

    const fetchMealDetails = async (mealId) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
            if (!response.ok) throw new Error('Failed to fetch meal details');
            const data = await response.json();
            return data.meals[0];
        } catch (err) {
            throw err;
        }
    };
        

    const loadMealIdeas = async () => {
        try {
            const mealsData = await fetchMealIdeas(ingredient);
            setMeals(mealsData);
          } catch (err) {
            setError(err.message);
          } 
        };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas for "{ingredient}"</h2>
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
        </div>
    );
    
}