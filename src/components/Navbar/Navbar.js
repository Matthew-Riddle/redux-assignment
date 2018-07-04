import React, { Component } from 'react'
import classes from './Navbar.css'
import { Link } from 'react-router-dom'
import profileImg from '../../Matthew.jpg'

class Navbar extends Component {
  render () {
    return (
      <header id={classes.Navigation}>

        <div className={classes.ContentWrap}>
          <div className={classes.HeaderLeft}>
            <Link to='/'>
              <i className='fas fa-home' />Home
            </Link>
            <Link to='/Moments'>
              <i className='fas fa-bolt' />Moments
            </Link>
            <a href='./notifications.html'>
              <i className='fas fa-bell' />Notifications
            </a>
            <a id='open-modal'>
              <i className='fas fa-envelope' />Messages
            </a>
          </div>

          <div className={classes.HeaderCenter}>
            <i className='fab fa-twitter' />
          </div>

          <div className={classes.HeaderRight}>
            <input
              type='text'
              placeholder='Search..'
              id={classes.Search}
              className={`${classes.HeaderRight} ${classes.Navigation}`} // {classes.HeaderRight + ' ' + classes.Navigation}
            />
            <div className={`${classes.HeaderRight} ${classes.SearchImg}`}>
              <i className='fas fa-search' />
            </div>
            <img
              src={profileImg}
              alt='Matthew Riddle'
              className={`${classes.Navigation} ${classes.HeaderRight} ${classes.NavProfileImg}`}
            />
            <button
              type='button'
              name='Twit'
              className={`${classes.Navigation} ${classes.HeaderRight} ${classes.JellyButton}`}
            >
              Tweet
            </button>

          </div>
        </div>

      </header>
    )
  }
}

export default Navbar
