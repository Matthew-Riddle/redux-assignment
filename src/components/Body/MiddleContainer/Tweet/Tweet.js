import React from 'react'
import classes from './Tweet.css'
import Dropdown from './Dropdown/Dropdown'

const Tweet = props => {
  return (
    <div className={classes.Tweet}>
      <div className={classes.TweetWrapper}>
        {props.avatar
          ? <img className={classes.Avatar} src={props.avatar} alt='' />
          : ''}
        <h1 className={classes.TweetTitle}>{props.title}</h1>
        <Dropdown
          className='Dropdown'
          id={props.id}
          deleteTweet={props.deleteTweet}
        />
      </div>
      <p>{props.content}</p>
      <img src={props.img} alt='' />
    </div>
  )
}

export default Tweet
