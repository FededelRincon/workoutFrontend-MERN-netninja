import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'



const WorkoutDetails = ({ workout }) => {
    const { title, reps, load, createdAt } = workout;

    const { dispatch } = useWorkoutsContext();
    

    const handleClick = async () => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        if(response.ok){
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }

    }

    return (
        <div className='workout-details'>
            <h4>{title}</h4>
            <p><strong>Load{' '}: </strong> {load} kg </p>
            <p><strong>Reps{' '}: </strong> {reps} </p>
            <p>{formatDistanceToNow(new Date(createdAt), { addSuffix: true})}</p>
            <span className="delete material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default WorkoutDetails;