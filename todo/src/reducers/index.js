import { ADD_TODO, TOGGLE_COMPLETED } from '../actions'

const initialState = {
    todos: [
        {
            value: 'Walk the dog.',
            completed: false
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
        const newTodo = {
            value: action.text,
            completed: false
        }
        return {
            ...state,
            todos: [...state.todos, newTodo]
        }
        case TOGGLE_COMPLETED:
        return

        
        default:
        return state
    }
}

// const reducer = (state=initialState, action) => {
//     switch (action.type) {
//         case 'CHANGE_FOOD':
//           // state.faveFood = action.payload;
//           return {
//             ...state,
//             faveFood: action.payload
//           };
//         case 'ADD_VEHICLE':
//           return {
//             ...state,
//             vehicles: [...state.vehicles, action.payload]
//           };
//         default:
//           return state;
//       }
//     };
// }

export default reducer;