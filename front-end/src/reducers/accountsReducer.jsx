
//It can get complicated using a single reducer for multiple types of arrays
//example: use one reducer for transactions, another for accounts 


//                 _
//action            |
//                  |->  reducer   ->   new state
//current state    _|




const accountsReducer =
 (state = { 
    transactions: [], accounts: [],  loading_accounts: false,  loading_transactions: false }, action) => {

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
        console.log("Adding Transactions")
        console.log({...state,
          transactions: action.transactions,
          loading_transactions: false})
        return {
          ...state,
          transactions: action.transactions,
          loading_transactions: false
        }

      //BLOG POSTS
      case 'LOADING_BLOG_POSTS':
        return {
          ...state,
          transactions: [...state.blogPosts],
          loading_transactions: true
        }
        case 'CREATE_BLOG_POST':
          return {
            ...state,
            transactions: [...state.blogPosts],
            loading_transactions: true
          }
          case 'ADD_BLOG_POST':
            console.log("Adding Blog Posts")
            console.log({...state,
              blogPosts: action.blogPosts,
              loading_blog_posts: false})
            return {
              ...state,
              blogPosts: action.blogPosts,
              loading_blog_posts: false
            }
        

      //default
      default:
        return state;
    }
    
  }
   
  export default accountsReducer;