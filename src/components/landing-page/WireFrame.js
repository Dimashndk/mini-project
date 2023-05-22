import React from 'react'
import { useNavigate } from 'react-router-dom'
 
import Fb from '../../assets/facebook.png'
import Ig from '../../assets/instagram.png'
import Twitter from '../../assets/twitter.png'
import Linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'


import './section1.css'
import './section2.css'
import './footer.css'

function WireFrame ()  {
    const navigate = useNavigate ()
    
    return (
        <>
        <header>
            <div className="main-heading">
                <div className='main-heading-img'>
                    <img className='logo' src={logo} alt=''></img>
                </div>
                <div className='main-heading-title'>
                    <h1>Blog <br/>Banteng <br/>Merah</h1>
                </div>
            </div>
            <div className='main-button'> 
                <div className='button-log-in'>
                    <button className="log-in" onClick={() => navigate('/sign-in-page')}>BE OUR GUEST</button>
                </div>
            </div>  
        </header>
            <hr />
        <body>
            <section className="carousel">
                    <img className='carousel-img' src='https://imgsrv2.voi.id/gJUap17XlZcLRX4mH2fLkH0RO8ugt3lQqF1qSdFAdU0/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8zODYxNi8yMDIxMDMxMjIwMzYtbWFpbi5qcGc.jpg' alt='' />
                <div className='carousel-content'>
                    <p>EDITOR'S PICK</p>
                    <h2 className='carousel-content-heading'>
                        TITLE
                    </h2>
                    <p className='carousel-content-articel'> 
                    Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div>
                        <h4>Author</h4>
                        <p>date <span>read</span> <span>⭐️</span></p>
                    </div>
                    //  span read(notif buat sudah di baca/belum) & ⭐️ untuk favorite 
                </div>
            </section>
            <section className='mini-article'>
                <div className="popular-post-section">
                    <h2>POPULAR POST</h2>
                    <div className="popular-post">
                        <div className="heading-popular-post">
                            <img src='https://preview.colorlib.com/theme/meranda/images/img_h_1.jpg.webp'alt=''/>
                            <div className="heading-popular-post-content">
                                <h3>POPULAR POST HEADING TITLE</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div>
                                    <h4>Author</h4>
                                    <p>date <span>read</span> <span>⭐️</span></p>
                                </div>  
                            </div>
                        </div>
                        <div className="sneak-peek-popular-post">
                            <div className="sneak-peek-with-pic">
                                <div className="sneak-peek-img">
                                <img className='sp-img' src='https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTOQGx2jU4L4mDCrkwWjqeg6I50JgdsPPWgM9z0nbwUtuTu4bple1U57iLhA3N0ypkNSyKZrIPSp08vh9A' alt=''/>
                                </div>
                                <div className="sneak-peek-popular-content">
                                    <h3>SNEAK PEEK TITLE</h3>
                                    <div>
                                        <h4>Author</h4>
                                        <p>date <span>read</span> <span>⭐️</span></p>
                                    </div> 
                                </div>
                            </div>
                            <div className="sneak-peek-with-pic">
                                <div className="sneak-peek-img">
                                <img className='sp-img' src='https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTOQGx2jU4L4mDCrkwWjqeg6I50JgdsPPWgM9z0nbwUtuTu4bple1U57iLhA3N0ypkNSyKZrIPSp08vh9A' alt=''/>
                                </div>
                                <div className="sneak-peek-popular-content">
                                    <h3>SNEAK PEEK TITLE</h3>
                                    <div>
                                        <h4>Author</h4>
                                        <p>date <span>read</span> <span>⭐️</span></p>
                                    </div> 
                                </div>
                            </div>
                            <div className="sneak-peek-with-pic">
                                <div className="sneak-peek-img">
                                    <img className='sp-img' src='https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTOQGx2jU4L4mDCrkwWjqeg6I50JgdsPPWgM9z0nbwUtuTu4bple1U57iLhA3N0ypkNSyKZrIPSp08vh9A' alt=''/>
                                </div>
                                <div className="sneak-peek-popular-content">
                                    <h3>SNEAK PEEK TITLE</h3>
                                    <div>
                                        <h4>Author</h4>
                                        <p>date <span>read</span> <span>⭐️</span></p>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trending-post-section">
                    <h2>Trending</h2>
                    <div className="trending-post-entry">
                        <div className='trending-sneak-peek'>
                            <div className='trending-sneak-peek-num'>01</div>
                            <div className="trending-sneak-peek-content">
                                <h3>SNEAK PEEK TITLE</h3>
                                <div>
                                    <h4>Author</h4>
                                    <p>date <span>read</span> <span>⭐️</span></p>
                                </div> 
                            </div>
                        </div>
                        <div className='trending-sneak-peek'>
                            <div className='trending-sneak-peek-num'>02</div>
                            <div className="trending-sneak-peek-content">
                                <h3>SNEAK PEEK TITLE</h3>
                                <div>
                                    <h4>Author</h4>
                                    <p>date <span>read</span> <span>⭐️</span></p>
                                </div> 
                            </div>
                        </div>
                        <div className='trending-sneak-peek'>
                            <div className='trending-sneak-peek-num'>03</div>
                            <div className="trending-sneak-peek-content">
                                <h3>SNEAK PEEK TITLE</h3>
                                <div>
                                    <h4>Author</h4>
                                    <p>date <span>read</span> <span>⭐️</span></p>
                                </div> 
                            </div>
                        </div>
                        <div className='trending-sneak-peek'>
                            <div className='trending-sneak-peek-num'>04</div>
                            <div className="trending-sneak-peek-content">
                                <h3>SNEAK PEEK TITLE</h3>
                                <div>
                                    <h4>Author</h4>
                                    <p>date <span>read</span> <span>⭐️</span></p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>
        <footer>
            <div className='footer-section-padding'>
                <div className='footer-content'>
                    <section className='footer-section-first'>
                    <h5 className='newsletter-heading'>Newsletter</h5>   
                            <div className='footer-newsletter'>
                                <a href='/popular'>
                                    <p>Popular</p>
                                </a>
                                <a href='/trending'>
                                    <p>Trending</p>
                                </a>
                            </div>
                    </section>
                    <section className='footer-section-second'>
                        <h5 className='categories-heading'>Categories</h5>
                        <div className='footer-categories-center'> 
                            <div className='footer-categories'>
                                <a href='/culinary'>
                                    <p>Culinary</p>
                                </a>
                                <a href='/international'>
                                    <p>International</p>
                                </a>
                                <a href='/fiction'>
                                    <p>Fiction</p>
                                </a>
                            </div>
                            <div className='footer-categories'>
                                <a href='/business'>
                                    <p>Business</p>
                                </a>
                                <a href='/economy'>
                                    <p>Ecomony</p>
                                </a>
                                <a href='/technology'>
                                    <p>Technology</p>
                                </a>
                                <a href='/sport'>
                                    <p>Sport</p>
                                </a>
                            </div>
                        </div>
                    </section>
                
                    <section className='footer-third'>
                    <div className='footer-logo'>
                        <img className='footer-img' src={logo} alt=''></img>
                        <div className='footer-title'>
                            <h1 className='footer-title-main'>Blog <br/>Banteng <br/>Merah</h1>
                        </div>
                    </div>
                    <div className='social-media'>
                        <p><img src={Fb} alt= " "/></p>
                        <p><img src={Twitter} alt= " "/></p>
                        <p><img src={Linkedin} alt= " "/></p>
                        <p><img src={Ig} alt= " "/></p>
                    </div>
                    </section>
                </div>
            </div>

            <hr />

            <section className='footer-fourth'>
                <div className='copyright'>
                    <p>
                        Copyright @{new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </section>
        </footer>
        </>
    ) 
}


export default WireFrame

