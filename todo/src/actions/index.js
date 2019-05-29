export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const addTodo = userInput => {
    return {
        type: ADD_TODO,
        text: userInput
    }
}


export const togleCompleted = value => {
    return {
        type: TOGGLE_COMPLETED
    }
}