const accountsReducer = (state = { accounts: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_ACCOUNTS':
        return {
          ...state,
          accounts: [...state.accounts],
          loading: true
        }
      case 'ADD_ACCOUNTS':
        
        return {
          ...state,
          accounts: action.accounts,
          loading: false
        }
      default:
        return state;
    }
  }
   
  export default accountsReducer;