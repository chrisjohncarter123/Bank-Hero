
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


 const accountTemplate = (state) => ({
  name: state.name

});

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

  export const creatAccount = (state) => {
    let header = {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(accountTemplate(state)),
    };

    return (dispatch) => {
      dispatch({ type: 'CREATE_ACCOUNT'})
      fetch('http://localhost:4000/accounts', header).then(response => {
        return response.json()
      }).then(responseJSON => {
        console.log(responseJSON)
        dispatch({ type: 'ADD_ACCOUNTS', accounts: responseJSON })
      })
    }
  }

 