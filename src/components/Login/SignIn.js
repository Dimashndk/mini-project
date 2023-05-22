import { useNavigate } from "react-router-dom"
import './style-signin.css'

const SignIn = () => {

  const navigate = useNavigate ()

    return (
        <> 
          <body>
            <div class="container">
              <div class="forms-container">
                <div class="signin-signup">
                  <form action="#" class="sign-in-form">
                    <h2 class="title">Sign in</h2>
                    <div class="input-field">                    
                      <input type="text" placeholder="Username" />
                    </div>
                    <div class="input-field">
                      <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" value="Login" class="btn solid" />
                  </form>
                </div>
              </div>        
              <div class="panels-container">
              <div className="bg-img">
              
              </div>
                <div class="panel left-panel">
                  <div class="content">
                    <h3>New here ?</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                      ex ratione. Aliquid!
                    </p>
                    <button class="btn transparent" id="sign-up-btn" onClick={() => navigate ('/sign-up-page')}>
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </body>
       
        </>
    )
}

export default SignIn