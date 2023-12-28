
import { Form,Link } from "react-router-dom";
import FormRow from '../components/FormRow';

const Login = () => {
  return (
    <div className='form-container'>
    <Form className="form">
        <h4>Login</h4>
        <FormRow type="email" name="email"/>
        <FormRow type="password" name="password" />
        <p>
          Still not member? -
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
      </div>
  )
}

export default Login
