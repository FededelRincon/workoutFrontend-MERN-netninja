import React from 'react'

const WorkoutDetails = ({ workout }) => {
    const { title, reps, load, createdAt } = workout;

    return (
        <div className='workout-details'>
            <h4>{title}</h4>
            <p><strong>Load{' '}: </strong> {load} kg </p>
            <p><strong>Reps{' '}: </strong> {reps} </p>
            <p>{createdAt}</p>
        </div>
    )
}

export default WorkoutDetails;