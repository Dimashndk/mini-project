import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ProfileDropMenu from '../Dropdown-Menu/Profile-Menu'
import Post from './Post/Post'

import './Profile-style.css'
import'./Side-Navbar-style.css'

import logo from '../../assets/logo.png'
import user from '../../assets/user-pic.jpeg'
import search from '../../assets/icons8-search-50.png'
import changepic from '../../assets/camera.png'
import droplogo from '../../assets/icons8-dropdown-50.png'
import Favorite from './Favorite/Favorite'

const Profile = () => {

    const [open, setOpen] = useState(false);
    const [openPost, setOpenPost] = useState (false)
    const [openFavorite, setOpenFavorite] = useState (false)
    
    const navigate = useNavigate ()

    let menuRef = useRef ();
    
// effect "close outside popup"
    useEffect (() => {
        let handler = (e) => {
            if (!menuRef.current.contains (e.target)){
                setOpen(false);
                console.log (menuRef.current);
            }
        };
        document.addEventListener ("mousedown", handler);  

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    });

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
                <div 
                ref={menuRef}
                className='profile-btn-dropdown' 
                onClick={() => {setOpen (!open)}}>
                    <h2 className='profile-picture-title'>FirstName</h2> 
                    <img className='drop-logo' src={droplogo} alt=''  />
                    <ProfileDropMenu  trigger = {open} setTrigger = {setOpen}>
                    </ProfileDropMenu>
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
                <div className='navbar-user'>
                    <div className='navbar-user-title'>
                        <h2 className='navbar-username'>FullName</h2>
                    </div>
                    <div className='navbar-user-email'>
                        <p className='navbar-email'>"emailUser"</p>
                    </div>    
                </div>    
            </div>
        </div>
            <hr className='hr-profile-menu' />
        <div className='padding'>
            <div className='side-navbar-options'>
                <p>DASHBOARD</p>    
                    <a className='navbar-menu' href='home'>Home</a>
                    <p className='navbar-menu'  onClick={() => setOpenPost (!openPost)}>Posts</p>
                    <p className='navbar-menu' onClick={() => setOpenFavorite (!openFavorite)}>Favorite Blogs</p>
                    <a className='navbar-menu' href='/'>Settings</a>
                <p>PROFILE</p>
                    <a className='navbar-menu' href='/'>Edit Profile</a>
                    <Post trigger = {openPost} setTrigger = {setOpenPost} >
                    ghjhj
                    </Post>            
                    <Favorite trigger = {openFavorite} setTrigger ={setOpenFavorite}>
                    </Favorite>
                </div>
        </div>
            
        </section>
        </>
    )
}

export default Profile