import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return { 
        ...state,
        workouts: action.payload 
      }
    case 'CREATE_WORKOUT':
      return { 
        ...state,
        workouts: [action.payload, ...state.workouts] 
      }
    case 'DELETE_WORKOUT':
      return { 
        ...state,
        workouts: state.workouts.filter( (w) => w._id !== action.payload._id ) //quedate los que son distintos... si son iguales los borras
      }

    case 'UPDATE_WORKOUT': 
      return {
        ...state,
        workouts: state.workouts.map( w => {
          if(w._id === action.payload._id){
              w.title = action.payload.title
              w.reps = action.payload.reps
              w.load = action.payload.load
          }
          return w;
        })
      }

    case 'UPDATE_SET_WORKOUT':
      return { 
        ...state,
        update: action.payload
      }

    case 'UPDATE_REMOVE_WORKOUT':
      return { 
        ...state,
        update: null
      }

      
    default:
      return state
  }
}

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { 
    workouts: null,
    update: null,
  })
  
  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </WorkoutsContext.Provider>
  )
}