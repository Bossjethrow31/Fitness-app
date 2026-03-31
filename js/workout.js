// Workout Tracker functionality

let workouts = JSON.parse(localStorage.getItem('workouts')) || [];

function addWorkout() {
    const name = document.getElementById('workoutName').value;
    const duration = document.getElementById('workoutDuration').value;
    const calories = document.getElementById('workoutCalories').value;

    if (!name || !duration || !calories) {
        alert('Please fill in all fields');
        return;
    }

    const workout = {
        id: Date.now(),
        name,
        duration: parseInt(duration),
        calories: parseInt(calories),
        date: new Date().toLocaleDateString()
    };

    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));

    document.getElementById('workoutName').value = '';
    document.getElementById('workoutDuration').value = '';
    document.getElementById('workoutCalories').value = '';

    displayWorkouts();
}

function displayWorkouts() {
    const list = document.getElementById('workoutList');
    list.innerHTML = '';

    workouts.forEach(workout => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${workout.name}</strong> - ${workout.duration} min | ${workout.calories} cal | ${workout.date}
            <button onclick="deleteWorkout(${workout.id})" style="float: right; background-color: #e74c3c; color: white; border: none; padding: 5px 10px; cursor: pointer;">Delete</button>
        `;
        list.appendChild(li);
    });

    updateWorkoutStats();
}

function deleteWorkout(id) {
    workouts = workouts.filter(w => w.id !== id);
    localStorage.setItem('workouts', JSON.stringify(workouts));
    displayWorkouts();
}

function updateWorkoutStats() {
    const totalCalories = workouts.reduce((sum, w) => sum + w.calories, 0);
    document.getElementById('totalWorkoutCalories').textContent = `Total Calories Burned: ${totalCalories}`;
}

// Load workouts on page load
document.addEventListener('DOMContentLoaded', displayWorkouts);