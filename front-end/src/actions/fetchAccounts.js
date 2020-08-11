
 const accountTemplate = (state) => ({
  name: state.name,
  cash: state.cash

});

const transactionTemplate = (state) => ({
  account_from: state.account_from,
  account_to: state.account_to,
  cash: state.cash
});

//an action is a pojo with info that describes state change
// example: {type: "LOADING_ACCOUNTS", payload: {}} (payload is optional)

//thunk puts fetch() logic into action creators
//Thunk middleware allows action creators to return functions that don't need to be pure
//this allows async api calls

/*

//thunk enables proper async requests to be used with redux


//without thunk:
export function fetchAstronauts() {
  const astronauts = fetch('http://api.open-notify.org/astros.json')
                      .then(response => response.json())
  return {
    type: 'ADD_ASTRONAUTS',
    astronauts
  };
}



*/

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
      dispatch({ type: 'LOADING_TRANSACTIONS'})
      fetch('http://localhost:4000/transactions').then(response => {
        return response.json()
      }).then(responseJSON => {
        console.log(responseJSON)
        dispatch({ type: 'ADD_TRANSACTIONS', transactions: responseJSON })
      })
    }
  }


  export const fetchCats = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CATS'})
      fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
        return response.json()
      }).then(responseJSON => {
        console.log(responseJSON.images)
        dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
      })
    }
  }

  export const createAccount = (state) => {
    //console.log("Create Account...")
    //console.log(state)
    console.log(13)
    let header = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(accountTemplate(state)),
    };

    return (dispatch) => {
      dispatch({ type: 'CREATE_ACCOUNT'})
      console.log(14)
      fetch('http://localhost:4000/accounts', header).then(response => {
        return response.json()
      }).then(responseJSON => {
        console.log(responseJSON)
       // dispatch({ type: 'ADD_ACCOUNTS', accounts: responseJSON })
      })

      
      console.log(15)
    }
    console.log(16)
  }

  export const createTransaction = (state) => {
    console.log("Create Transaction...")
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


