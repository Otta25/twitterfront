import React from 'react'
import Style from '../Tweet/Tweet.module.css'

function Tweet({content,user}) {
  return (
    <div className={Style.Tweet}>
        <h3>{user}</h3>
        <p>{content}</p>
    </div>
  )
}

export default Tweet