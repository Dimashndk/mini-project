// import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import *  as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import axios from 'axios';
// import {loginContext} from ''
import './Popup.css'

import close from '../../assets/icons8-close-30.png'

const CretaeSchema = Yup.object(). shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 character")
    .matches (
      /^(?=.*[A-Z](?=.*[!@#$%^&*])?=.*[a-z].{6,}$)/,
      "Password must contain at least 1 uppercase letter, 1 symbol, and 1 lowercase letter"
    ),
});

const Login = (props) => {
  // const { setToken } = useContext (loginContext)

  // const [token,setToken] = useState('')
  const navigate = useNavigate ()

  const handleSubmit = (values, action) => {
    console.log (values);

    try {
      axios
      .post (
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/login",
        values
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        // setToken(response.data.token);
      });
    } catch (error) {
      console.log (error);
      return;
    }

    navigate("/home");

  };



  return (props.trigger) ? (
  
    <div className='popup'>
        <div className='popup-inner'>
        
        {props.children}
        
                <div class="login">
                  <div  class="login-form">
                    <div className='login-section-1'>
                      <div className='login-form-title'>
                        <h2 class="login-title">Sign in</h2>
                      </div>
                      <div className='login-form-btn'>
                        <img className='close-btn' src={close} alt="" onClick={() => props.setTrigger (false)}/>
                      </div>
                    </div>
                    <hr className='hr-form'/>
                    <Formik 
                      initialValues={{
                        username:"",
                        email:"",
                        phone:"",
                        password:"",
                      }}
                      validationSchema={CretaeSchema}
                      onSubmit={handleSubmit}
                    >
                    {(props) => (
                      
                    <><form action='#' className='login-section-2' onSubmit={props.handleSubmit}>
                  <div class="login-input-field">
                    <input
                      className="username"
                      type="text"
                      placeholder="Username"
                      onChange={props.handlerChange}
                      value={props.values.username} />
                  </div>

                  <div class="login-input-field">
                    <input
                      className='email'
                      type="email"
                      placeholder="email"
                      onChange={props.handlerChange}
                      value={props.values.email} />
                  </div>

                  <div class="login-input-field">
                    <input
                      className='phone-number'
                      type="phone-number"
                      placeholder="phone"
                      onChange={props.handlerChange}
                      value={props.values.phone} />
                  </div>

                  <div class="login-input-field">
                    <input
                      className='password'
                      type="password"
                      placeholder="Password"
                      onChange={props.handlerChange}
                      value={props.values.password} />
                  </div>
                </form><ErrorMessage name="password" component="div" /><hr className='hr-form' /><div className='login-section-3'>
                    <p>
                      Don't have an account?
                      <span className='span-to-register' onClick={() => navigate('/sign-up-page')}> Sign Up </span>
                    </p>
                    <input type="submit" value="Login" class="form-login-btn solid" />
                  </div></>
                    )}
                    </Formik>
                  </div>
                </div>
              </div> 
       
    </div>
    ): "";
  };

export default Login