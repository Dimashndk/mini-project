import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Popup.css'

import close from '../../assets/icons8-close-30.png'

function Popup(props) {
  const navigate = useNavigate ()
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
        
        {props.children}
        
                <div class="login">
                  <form action="#" class="login-form">
                    <div className='login-section-1'>
                      <div className='login-form-title'>
                        <h2 class="login-title">Sign in</h2>
                      </div>
                      <div className='login-form-btn'>
                        <img className='close-btn' src={close} alt="" onClick={() => props.setTrigger (false)}/>
                        
                      </div>
                    </div>
                    <hr className='hr-form'/>
                    <div className='login-section-2'>
                      <div class="login-input-field">                    
                        <input type="text" placeholder="Username" />
                      </div>
                      <div class="login-input-field">
                        <input type="password" placeholder="Password" />
                      </div>
                    </div>
                    <hr className='hr-form'/>
                    <div className='login-section-3'>                    
                      <p>
                        Don't have an account?   
                        <span className='span-to-register' onClick={() => navigate('/sign-up-page')}> Sign Up </span>
                      </p>
                      <input type="submit" value="Login" class="form-login-btn solid" />
                    </div>
                  </form>
                </div>
              </div> 
       
    </div>
  ): "";
}

export default Popup