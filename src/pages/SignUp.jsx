import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='container '>
      <div className='my-5 mx-auto p-3 p-md-5 sign_form '>
        <div className='sign_head mb-5'>
          <h5 className='text-center'>Sign Up</h5>
          <p className='text-center mt-3'>Create your account to get full access</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault() }}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control rounded-0" placeholder='Enter full name' />
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control rounded-0" placeholder='Enter email address' />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control rounded-0" placeholder='Enter Password' />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control rounded-0" placeholder='Confirm Password' />
          </div>



          <div className='d-flex justify-content-between flex-column flex-md-row mt-5 form_bottom'>
            <p>Don’t have an account? <Link to="/login" id='signup'>Login</Link> here</p>
            <button type="submit" className="btn rounded-0">Sign Up</button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default SignUp