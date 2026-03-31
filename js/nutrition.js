'use strict';

const nutritionData = [];

// Function to add food
function addFood(name, calories) {
    const food = { name, calories };
    nutritionData.push(food);
    localStorage.setItem('nutritionData', JSON.stringify(nutritionData));
}

// Function to display foods
function displayFoods() {
    const foods = JSON.parse(localStorage.getItem('nutritionData')) || [];
    foods.forEach(food => {
        console.log(`Food: ${food.name}, Calories: ${food.calories}`);
    });
}

// Function to delete food
function deleteFood(name) {
    const foods = JSON.parse(localStorage.getItem('nutritionData')) || [];
    const filteredFoods = foods.filter(food => food.name !== name);
    localStorage.setItem('nutritionData', JSON.stringify(filteredFoods));
}

// Function to update the nutrition stats
function updateNutritionStats(name, newCalories) {
    const foods = JSON.parse(localStorage.getItem('nutritionData')) || [];
    const foodIndex = foods.findIndex(food => food.name === name);
    if (foodIndex !== -1) {
        foods[foodIndex].calories = newCalories;
        localStorage.setItem('nutritionData', JSON.stringify(foods));
    }
}
