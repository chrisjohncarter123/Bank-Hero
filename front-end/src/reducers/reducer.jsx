
import * as actions from '../actionTypes';

export default function reducer(state = [], action){
    if(action.type == actions.ADD_USER){
        return [
            ...state,
            {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            }

        ]
    }
    else if(action.type == actions.DELETE_USER){
        return state.filter(user => user.id !== action.payload.id)
    }

    return state;
}