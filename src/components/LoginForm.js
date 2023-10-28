import React from 'react';
import '../App.css';


const LoginForm = () => {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3>Log In</h3> {/* Header */}
            <form>
            {/* Username input */}
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" />
              </div>
              {/* Password input */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <button type="submit" className="btn btn-primary mt-3">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  export default LoginForm;