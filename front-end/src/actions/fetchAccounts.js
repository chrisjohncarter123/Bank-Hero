
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

    console.log("HI")
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


