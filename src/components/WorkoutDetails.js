import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'



const WorkoutDetails = ({ workout }) => {
    const { title, reps, load, createdAt } = workout;

    const { dispatch } = useWorkoutsContext();
    

    const handleClickDelete = async () => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        if(response.ok){
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
    }

    const handleClickEdit = (workout) => {
        dispatch({type: 'UPDATE_SET_WORKOUT', payload: workout})
    }

    return (
        <div className='workout-details'>
            <h4>{title}</h4>
            <p><strong>Load{' '}: </strong> {load} kg </p>
            <p><strong>Reps{' '}: </strong> {reps} </p>
            <p>{formatDistanceToNow(new Date(createdAt), { addSuffix: true})}</p>
            <div className='botons-right'>
                <div className="delete material-symbols-outlined" onClick={handleClickDelete}>delete</div>
                <div className="edit material-symbols-outlined" onClick={(e) => handleClickEdit(workout) }>edit</div>
            </div>
        </div>
    )
}

export default WorkoutDetails;