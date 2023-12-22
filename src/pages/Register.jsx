import React from 'react'
import { Form,Link } from "react-router-dom";
import FormRow from '../components/FormRow';
import "../css/register.css"

const Register = () => {
  return (
    <div className='form-container'>
    <Form className="form">
        <h4>Register</h4>
        <FormRow type="text" name="name"  />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
        />
        <FormRow type="text" name="location" />
        <FormRow type="email" name="email"/>
        <FormRow type="password" name="password" />
        <p>
          Already a member? -
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
      </div>
  )
}

export default Register
