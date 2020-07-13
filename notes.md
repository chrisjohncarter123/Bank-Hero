### Notes:

Simple Banking Application






    Follow the instructions on this repo to setup the generator: create-react-app
    Your app should have one HTML page to render your react-redux application
    There should be 2 container components
    There should be 5 stateless components
    There should be 3 routes


    The Application must make use of react-router and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate docs; docs for v4 can be found here)

Use Redux middleware to respond to and modify state change
Make use of async actions and redux-thunk middleware to send data to and receive data from a server
Your Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.
Your client-side application should handle the display of data with minimal data manipulation




front-end:

    Features:
        Create User
        Add Account
        Make Transaction



back-end:

    database tables
        Account - cash, user_id, date_created
        User - first_name, last_name, password_digest, email
        Transaction - date, account_from_id, account_to_id, cash_ammount
        

        