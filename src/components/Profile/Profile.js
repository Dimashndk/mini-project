import { useNavigate } from 'react-router-dom'

import logo from '../../assets/logo.png'
import './Profile-style.css'
import'./Side-Navbar-style.css'

import user from '../../assets/user-pic.jpeg'
import search from '../../assets/searchlogo.png'
import changepic from '../../assets/camera.png'

const Profile = () => {

    const navigate = useNavigate ()
    const Menus = ["Favorite", "Edit Profile", "Logout"];

    return (
        <>
        <header className='header-profile'>
            <div className="heading-profile">
                <div className='heading-profile-logo'>
                    <img className='logo' onClick={() => navigate ('./home')} src={logo} alt=''></img>
                </div>
                <div className='heading-profile-title'>
                <h1 className='h1-title'>
                    Blog 
                    <br/>
                    Banteng
                    <br/>
                    Merah
                </h1>
                </div>
            </div>
            <div className='heading-search-bar'>
                <img className='search-logo' src={search} alt='' />
                <input type="text" placeholder="Search post" />
            </div>
            <div className='heading-profile-picture'>  
                <img className='profile-picture' src={user} alt='' />
                <h2>username</h2> 
                <div className=''>
                    <ul>
                        {
                            Menus.map ((menu) =>(
                                <li key={menu}>{menu}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </header>
        <section className='section-side-navbar'>
        <div className='padding'>
            <div className='side-navbar-profile'> 
                <div className='side-navbar-profile-picture'>
                    <img className='navbar-profile-img' src={user} alt='' />
                    <div className='position-change-pic-logo'>
                    <div className='change-pic-logo'>
                        <img className='change-pic-img' src={changepic} alt='' />
                    </div>
                    </div>
                </div> 
                <h2>username</h2>
                <p>"emailUser"</p>
            </div>
        </div>
            <hr className='hr-profile-menu' />
        <div className='padding'>
            <div className='side-navbar-options'>
                <p>DASHBOARD</p>    
                    <a className='navbar-menu' href='home'>Home</a>
                    <a className='navbar-menu' href='/'>Posts</a>
                    <a className='navbar-menu' href='/'>Favorite Blogs</a>
                    <a className='navbar-menu' href='/'>Settings</a>
                <p>PROFILE</p>
                    <a className='navbar-menu' href='/'>Edit Profile</a>
            </div>
        </div>
            
        </section>
        </>
    )
}

export default Profile