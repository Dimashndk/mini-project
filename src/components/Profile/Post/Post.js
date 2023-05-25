import React from 'react'

import './post.css'


function Post(props) {
  return (props.trigger) ? (
    <div className='container'>
        <div className='container-inner'>
        
        {props.children}
            <h1>ini post</h1>
        </div>
    </div>

    
  ): "";
}

export default Post