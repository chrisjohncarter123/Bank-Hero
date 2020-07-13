
/*
export const fetchAccounts = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_ACCOUNTS'})
      fetch('https://localhost:4000/accounts').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'ADD_ACCOUNTS', accounts: responseJSON.json })
      })
    }
  }
  */


  export const fetchAccounts = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_ACCOUNTS'})
      fetch('http://localhost:4000/accounts').then(response => {
        return response.json()
      }).then(responseJSON => {
        console.log(responseJSON)
        dispatch({ type: 'ADD_ACCOUNTS', accounts: responseJSON })
      })
    }
  }