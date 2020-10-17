import React, { Component } from 'react';



class NewUser extends Component {
  state = { 

   }

   styles = {

   }

  render() { 
    return (  
        <div>
            <div className="newUser">
                <form className="form-signin">
                    <img className="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">New User</h1>

                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus></input>
                    <br />

                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
                    <br />

                    <label htmlFor="inputPasswordConfirmation" className="sr-only">Password Confirmation</label>
                    <input type="password" id="inputPasswordConfirmation" className="form-control" placeholder="Password Confirmation" required></input>
                    <br />

                    <label htmlFor="inputFirstName" className="sr-only">First Name</label>
                    <input id="inputFirstName" className="form-control" placeholder="First Name" required></input>
                    <br />

                    <label htmlFor="inputLastName" className="sr-only">Last Name</label>
                    <input id="inputLastName" className="form-control" placeholder="Last Name" required></input>
                    <br />
                    <div className="checkbox mb-3">
                        <label>
                        Remember Me: <input type="checkbox"></input>
                        </label>
                    </div>



                    <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>

                </form>
            </div>
      </div>
    );
  }
}
 
export default NewUser;

