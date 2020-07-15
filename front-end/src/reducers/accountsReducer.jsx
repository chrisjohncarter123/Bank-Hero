const accountsReducer = (state = { accounts: [], loading: false }, action) => {
    switch(action.type) {

      //ACCOUNTS:
      case 'LOADING_ACCOUNTS':
        return {
          ...state,
          accounts: [...state.accounts],
          loading: true
        }
      case 'CREATE_ACCOUNT':
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

      //TRANSACTIONS
      case 'LOADING_TRANSACTIONS':
        return {
          ...state,
          transactions: [...state.transactions],
          loading: true
        }
      case 'CREATE_TRANSACTION':
        return {
          ...state,
          transactions: [...state.transactions],
          loading: true
        }
      case 'ADD_TRANSACTIONS':
        return {
          ...state,
          transactions: action.transactions,
          loading: false
        }
      default:
        return state;
    }
  }
   
  export default accountsReducer;