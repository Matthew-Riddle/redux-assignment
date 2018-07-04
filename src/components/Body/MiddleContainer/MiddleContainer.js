import React, { Component } from 'react'
import classes from './MiddleContainer.css'
import profileImg from '../../../Matthew.jpg'
// import downs from '../../../Downs.jpg'
import Tweet from './Tweet/Tweet'

class MiddleContainer extends Component {
  state = {
    value: ''
  }

  inputChangeHandler = e => {
    this.setState({
      value: e.target.value
    })
  }

  keyPressed = e => {
    if (e.key === 'Enter') {
      this.props.createTweet(this.state.value)
      this.setState({ value: '' })
    }
  }
  render () {
    return (
      <div className={classes.MiddleContainer}>
        <div className={classes.SearchContainer}>
          <img
            src={profileImg}
            alt='Matthew Riddle'
            className={`${classes.MiddleContainer} ${classes.SearchContainer} ${classes.TweetSearchImg}`}
          />
          <input
            type='text'
            placeholder='Whats Happening?'
            id={classes.MidSearch}
            className={`${classes.MiddleContainer} ${classes.Navigation}`}
            value={this.state.value}
            onChange={this.inputChangeHandler}
            onKeyPress={this.keyPressed}
          />
        </div>
        <div className={classes.MiddleContent}>
          {/* <Tweet
            avatar={profileImg}
            title='First Tiger to get into Evergreen State College!'
            content='Today kenny the tiger has made his way into the
            prestigous Evergreen state college despite his disability.'
            img={downs}
          /> */}

          {Object.values(this.props.tweets).map((tweet, idx) => (
            <Tweet
              key={idx}
              id={tweet.id}
              avatar={tweet.avatar}
              title={tweet.title}
              content={tweet.content}
              img={tweet.img}
              deleteTweet={this.props.deleteTweet}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default MiddleContainer
