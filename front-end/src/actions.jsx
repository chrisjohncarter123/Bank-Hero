import * as actions from './actionTypes';

export function addUser(firstName, lastName){
    return {
        type: actions.ADD_USER,
        payload:{
          firstName,
          lastName
        }
      };

}