
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

const transactionTemplate = (state) => ({
  account_from: state.account_from,
  account_to: state.account_to,
  cash: state.cash
});


  export const fetchAccounts = () => {

    console.log("Fetching Accounts...")
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

  export const fetchTransactions = () => {

    console.log("Fetching Transactions...")
    return (dispatch) => {
      dispatch({ type: 'LOADING_ACCOUNTS'})
      fetch('http://localhost:4000/transactions').then(response => {
        return response.json()
      }).then(responseJSON => {
        console.log(responseJSON)
        dispatch({ type: 'ADD_TRANSACTIONS', transactions: responseJSON })
      })
    }
  }


  export const createCounter = () => {
    let name = "New Name Here"
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({counter:{ name: name }})
   };
   fetch('http://localhost:4000/counters', requestOptions)
       .then(response => response.json())
       .then(data => console.log(data));
 }


  export const createAccount = (state) => {
    console.log("HI")

    let header = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(accountTemplate(state)),
    };

    return (dispatch) => {
      dispatch({ type: 'CREATE_ACCOUNT'})
      fetch('http://localhost:4000/accounts', header).then(response => {
        return response.json()
      }).then(responseJSON => {
        console.log(responseJSON)
       // dispatch({ type: 'ADD_ACCOUNTS', accounts: responseJSON })
      })
    }
  }

  export const createTransaction = (state) => {

    console.log(transactionTemplate(state))

    let header = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transactionTemplate(state)),
    };

    return (dispatch) => {
      dispatch({ type: 'CREATE_TRANSACTION'})
      fetch('http://localhost:4000/transactions/', header).then(response => {
        return response.json()
      }).then(responseJSON => {
        console.log(responseJSON)
       // dispatch({ type: 'ADD_ACCOUNTS', accounts: responseJSON })
      })
    }
  }


