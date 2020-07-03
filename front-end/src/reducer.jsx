


export default function reducer(state = [], action){
    if(action.type == 'addUser'){
        return [
            ...state,
            {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            }

        ]
    }
    else if(action.type == 'deleteUser'){
        return state.filter(user => user.id !== action.payload.id)
    }

    return state;
}