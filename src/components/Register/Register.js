import React from 'react'
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import axios from 'axios';

import './Register.css'


import google from '../../assets/3d-fluency-google-logo.png'
import close from '../../assets/icons8-close-30.png'
import { useNavigate } from 'react-router-dom';

const CreateSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, "Password must be at least 6 character")
        .matches (
        /^(?=.*[A-Z](?=.*[!@#$%^&*])?=.*[a-z].{6,}$)/,
        "Password must contain at least 1 uppercase letter, 1 symbol, and 1 lowercase letter"
        ),
    
    ConfirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Password must match")
            .required("Confirm Password is required"),
});

function Register(props) {
    const navigate = useNavigate();

    const handleSubmit = (values, action) => {
        console.log (values);

    try {
        axios
        .post(
            "https://minpro-blog.purwadhikabootcamp.com/api/auth/",
            values
        );
    } catch (error) {
        console.error (error);
        return;
    }
    navigate("/verify")
};
  return (props.trigger) ? (
    <div className='popup-register'>
        <div className='popup-register-inner'>
        
        {props.children}
        
            <div class="register">
                <di  class="register-form">
                    <div className='register-section-1'>
                        <div className='register-form-signin'>
                            <div className='register-form-title'>
                                <h2 class="register-title">Welcom to Banteng Merah</h2>
                            </div>
                            <div className="register-to-register">
                                <p className='p-login'>
                                Already account ?  
                                <span className='span-to-login' > Login</span>
                                </p>
                            </div>
                        </div>
                        <div className='register-form-btn'>
                            <img className='close-btn' src={close} alt="" onClick={() => props.setTrigger (false)}/>    
                        </div>
                    </div>   
                    <Formik
                        initialValues={{
                            username: "",
                            email: "",
                            phone: "",
                            pasword: "",
                            confirmPassword: "",

                        }}>           
                        <Form action='#' className='register-section-2'>
                            <div className='register-input-label'>
                                <div className='register-label'> 
                                    <label id=''>Username</label>                 
                                </div>    
                                <div class="register-input-field">   
                                    <input 
                                    type="text"
                                    placeholder='username'
                                    name='username'
                                    onChange={props.handleChange}
                                    value={props.values.username}  
                                    />
                                </div>
                            </div>
                            <div className='register-input-label'>
                                <div className='register-label'> 
                                    <label id=''>Email address</label>                 
                                </div>    
                                <div class="register-input-field">   
                                    <input
                                        required
                                        type="email"  
                                        placeholder='email'
                                        name='email'
                                        onChange={props.handleChange}
                                        value={props.values.email}  
                                    />
                                </div>
                            </div>
                            <div className='register-input-label'>
                                <div className='register-label'> 
                                    <label id=''>Phone number</label>                 
                                </div>    
                                <div class="register-input-field">   
                                    <input
                                        required
                                        type="phone-number"  
                                        placeholder='phone number'
                                        name='phone'
                                        onChange={props.haphonendleChange}
                                        value={props.values.phone}  
                                    />
                                </div>
                            </div>
                            <br/>
                            <div className='register-input-label'>
                                <div className='register-label'>
                                    <label id=''>Password</label>  
                                </div>
                                <div class="register-input-field">
                                    <input 
                                        required
                                        type="password"  
                                        placeholder='password'
                                        name='password'
                                        onChange={props.haphonendleChange}
                                        value={props.values.password}  
                                    />
                                </div>
                            </div>
                            <ErrorMessage name="password" component="div" />
                            <br/>
                            <div className='register-input-label'>
                                <div className='register-label'>
                                    <label id=''>Confirmation Password</label>  
                                </div>
                                <div class="register-input-field">
                                    <input   
                                    required
                                    type="password"  
                                    placeholder='confirm password'
                                    name='confirmPassword'
                                    onChange={props.haphonendleChange}
                                    value={props.values.confirmPassword}
                                    />
                                </div>
                            </div>
                            <ErrorMessage name="confirmPassword" component="div" />
                        </Form>
                        <div className='register-section-3'>                    
                            <div className='btn-register'>
                                    <input type="submit"
                                    value="Register" 
                                    class="form-register-btn solid" />
                                </div>

                            <div className='btn-register-google'>
                                <div className='google-img'>
                                    <div className='apa'>
                                        <img className='google' src={google} alt=''/> 
                                    </div>
                                </div>
                                <div className='btn-title'> 
                                <div className='aja'>
                                    <p className='btn-google-title'>Sign up with Google</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </Formik>
                </di>
            </div>
        </div> 
    </div>
  ) : "";
}

export default Register