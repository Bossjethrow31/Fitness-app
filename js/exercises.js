// Exercise Guide functionality

const exerciseDatabase = [
    {
        id: 1,
        name: 'Push-ups',
        description: 'Upper body exercise that targets chest, shoulders, and triceps',
        sets: '3 sets',
        reps: '10-15 reps',
        difficulty: 'Beginner'
    },
    {
        id: 2,
        name: 'Squats',
        description: 'Lower body exercise that targets quads, hamstrings, and glutes',
        sets: '3 sets',
        reps: '12-20 reps',
        difficulty: 'Beginner'
    },
    {
        id: 3,
        name: 'Burpees',
        description: 'Full body cardio exercise combining push-ups and jumps',
        sets: '3 sets',
        reps: '10 reps',
        difficulty: 'Intermediate'
    },
    {
        id: 4,
        name: 'Plank',
        description: 'Core strengthening exercise that improves stability and endurance',
        sets: '3 sets',
        reps: '30-60 seconds',
        difficulty: 'Beginner'
    },
    {
        id: 5,
        name: 'Lunges',
        description: 'Lower body exercise targeting glutes, quads, and hamstrings',
        sets: '3 sets',
        reps: '10 per leg',
        difficulty: 'Beginner'
    },
    {
        id: 6,
        name: 'Deadlifts',
        description: 'Full body compound movement targeting back, hamstrings, and glutes',
        sets: '3 sets',
        reps: '5-8 reps',
        difficulty: 'Advanced'
    },
    {
        id: 7,
        name: 'Pull-ups',
        description: 'Upper body exercise targeting back, shoulders, and biceps',
        sets: '3 sets',
        reps: '5-12 reps',
        difficulty: 'Intermediate'
    },
    {
        id: 8,
        name: 'Running',
        description: 'Cardio exercise that improves cardiovascular health and endurance',
        sets: '1 session',
        reps: '20-40 minutes',
        difficulty: 'Beginner'
    }
];

function displayExerciseGuide() {
    const guide = document.getElementById('exerciseGuide');
    guide.innerHTML = '';

    exerciseDatabase.forEach(exercise => {
        const div = document.createElement('div');
        div.style.backgroundColor = '#fff';
        div.style.padding = '15px';
        div.style.margin = '10px 0';
        div.style.borderRadius = '5px';
        div.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        div.style.borderLeft = '4px solid #3498db';

        const difficultyColor = exercise.difficulty === 'Beginner' ? '#27ae60' : exercise.difficulty === 'Intermediate' ? '#f39c12' : '#e74c3c';

        div.innerHTML = `
            <h3>${exercise.name}</h3>
            <p><strong>Description:</strong> ${exercise.description}</p>
            <p><strong>Sets:</strong> ${exercise.sets}</p>
            <p><strong>Reps:</strong> ${exercise.reps}</p>
            <p><strong>Difficulty:</strong> <span style="color: ${difficultyColor}; font-weight: bold;">${exercise.difficulty}</span></p>
        `;
        guide.appendChild(div);
    });
}

// Load exercise guide on page load
document.addEventListener('DOMContentLoaded', displayExerciseGuide);