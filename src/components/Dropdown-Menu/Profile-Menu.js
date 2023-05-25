import React from "react";
import'./Profile-Menu.css'

import user from '../../assets/user-pic.jpeg'
import profileIcon from '../../assets/icons8-name-50.png'
import logoutIcon from '../../assets/icons8-logout-24.png'
import favoriteIcon from '../../assets/icons8-favorite-50.png'

function ProfileDropMenu (props) {
   

    return (props.trigger) ? (
        <div className='dropdown'>
            <div className="dropdown-inner">
        {props.children}
                <div className='dropdown-profile'>  
                <img className='dropdown-profile-picture' src={user} alt='' />
                <div className="dropdown-profile-title">
                    <div className="dropdown-title">
                        <h2 className='dropdown-title-user'>FullName</h2> 
                    </div>
                    <div className="dropdown-email">
                        <p className="dropdown-email-user">"emailUser"</p>
                    </div>
                </div>
                </div>
                <hr className="dropdown-hr" />
                <div className="dropdown-menu">
                    <div className="dropdown-menu-content">
                        <div className="dropdown-menu-icon">
                            <img className="menu-icon" src={favoriteIcon} alt="" />
                        </div>
                        <div className="dropdown-menu-title">
                            <a className="menu-title" href="/">Favorite's Blog</a>
                        </div>
                    </div>                  
                    <hr className="dropdown-hr"/>
                    <div className="dropdown-menu-content">
                        <div className="dropdown-menu-icon">
                            <img className="menu-icon" src={profileIcon} alt="" /> 
                        </div>
                        <div className="dropdown-menu-title">
                            <a className="menu-title" href="/">Edit Profile</a>
                        </div>
                    </div>
                    <hr className="dropdown-hr"/>
                    <div className="dropdown-menu-content">
                        <div className="dropdown-menu-icon">
                            <img className="menu-icon" src={logoutIcon} alt="" />
                        </div>
                        <div className="dropdown-menu-title">
                            <a className="menu-title" href="/">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ): "" ;
}

export default ProfileDropMenu