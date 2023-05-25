import React from 'react'

import './Favorite.css'


function Favorite(props) {
  return (props.trigger) ? (
    <div className='container'>
        <div className='container-inner'>
        
        {props.children}
            <h1>ini favorite</h1>
        </div>
    </div>

    
  ): "";
}

export default Favorite