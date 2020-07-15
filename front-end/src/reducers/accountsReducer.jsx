const accountsReducer =
 (state = { accounts: [], transactions: [], loading_accounts: false,  loading_transactions: false }, action) => {
    switch(action.type) {


      
      //ACCOUNTS:
      case 'LOADING_ACCOUNTS':
        return {
          ...state,
          accounts: [...state.accounts],
          loading_accounts: true
        }
      case 'CREATE_ACCOUNT':
        return {
          ...state,
          accounts: [...state.accounts],
          loading_accounts: true
        }
      case 'ADD_ACCOUNTS':
        return {
          ...state,
          accounts: action.accounts,
          loading_accounts: false
        }



      //TRANSACTIONS
      case 'LOADING_TRANSACTIONS':
        return {
          ...state,
          transactions: [...state.transactions],
          loading_transactions: true
        }
      case 'CREATE_TRANSACTION':
        return {
          ...state,
          transactions: [...state.transactions],
          loading_transactions: true
        }
      case 'ADD_TRANSACTIONS':
        return {
          ...state,
          transactions: action.transactions,
          loading_transactions: false
        }


      //default
      default:
        return state;
    }
  }
   
  export default accountsReducer;