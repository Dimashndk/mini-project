import { useNavigate } from "react-router-dom"
import './style-signup.css'
const SignUp = () => {

    const navigate = useNavigate ()
    return (
        <>
        <section className="body-sign-up">
            <div class="container">
                <div class="forms-container">
                    <div class="signin-signup">
                        <form action="#" class="sign-up-form">
                            <h2 class="title">Sign up</h2>
                            <div class="input-field">
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div class="input-field">
                                <i class="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div class="input-field">
                                <i class="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" class="btn" value="Sign up" />
                        </form>
                    </div>
                </div>        
                <div class="panels-container">
                    <div class="panel right-panel">
                        <div class="content">
                            <h3>One of us ?</h3>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                            </p>
                            <button class="btn transparent" id="sign-in-btn" onClick={() => navigate ('/sign-in-page')}>
                            Sign in
                            </button>
                        </div>
                        <img src="img/register.svg" class="image" alt="" />
                    </div>
                </div>
            </div>
        </section>
       
        </>
    )
}
 
export default SignUp


