import * as actions from './actionTypes';

/*

Example Code:

const unsubscribe = store.subscribe(() => {
    //code here...
})
*/


export function addUser(firstName){
    return store.dispatch({
        type: actions.ADD_USER,
        payload:{
          firstName:"Chris",
          lastName:"Bob"
        }
      });

}