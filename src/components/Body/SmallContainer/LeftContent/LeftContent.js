import React from 'react'
import classes from './LeftContent.css'
import profileImg from '../../../../Matthew.jpg'
const LeftContent = props => {
  return (
    <div className='wrap'>
      <div className={classes.ProfileBox}>
        <div className={classes.BlueDecor} />
        <img
          src={profileImg}
          alt='Matthew Riddle'
          className={`${classes.LeftContainer} ${classes.ProfileBox} ${classes.ProfileImg}`}
        />

        <div className={classes.ProfileStats}>
          <h1>Matthew Riddle</h1>
          <p>@mriddle</p>
        </div>
      </div>

      <div className={classes.TrendsLeft}>
        <h1>Trends for you</h1>
      </div>
    </div>
  )
}

export default LeftContent
