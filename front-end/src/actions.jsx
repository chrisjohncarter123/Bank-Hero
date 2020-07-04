import * as actions from './actionTypes';

/*

Example Code:

const unsubscribe = store.subscribe(() => {
    //code here...
})
*/

export function addUser(firstName, lastName){
    return {
        type: actions.ADD_USER,
        payload:{
          firstName,
          lastName
        }
      };

}