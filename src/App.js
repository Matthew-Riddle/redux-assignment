import React, { Component } from 'react'
import classes from './App.css'
import profileImg from './Matthew.jpg'
import downs from './Downs.jpg'

import Navbar from './components/Navbar/Navbar'
import Body from './components/Body/Body'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionTypes from './store/actions/action-types'
import Moments from './components/Moments/Moments'
import axios from './axios-instance'
import uuid from 'uuid'

class App extends Component {
  state = {
    tweets: []
  }

  createTweet = text => {
    const key = uuid.v4()
    const tweets = {
      [key]: {
        id: key,
        avatar: profileImg,
        title: 'Matthew Riddle',
        content: text,
        img: ''
      },
      ...this.props.tweets
    }
    axios.put('tweets.json', tweets).then(() => {
      this.props.createTweet(tweets)
    })
  }

  deleteTweet = id => {
    axios
      .delete(`tweets/${id}.json`)
      .then(() =>
        this.props.deleteTweet(
          Object.values(this.props.tweets).filter(tweet => tweet.id !== id)
        )
      )
  }

  componentDidMount () {
    this.getTweets()
  }

  getTweets = () => {
    axios.get('tweets.json').then(response => {
      const tweets = response.data
      console.log(this.props)
      console.log(tweets)
      this.props.getTweets(tweets)
      console.log(this.props)
    })
  }

  render () {
    return (
      <div className={classes.App}>
        <Navbar />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Body
                tweets={this.props.tweets}
                createTweet={this.createTweet}
                deleteTweet={this.deleteTweet}
              />
            )}
          />
          <Route path='/Moments' render={() => <Moments />} />
        </Switch>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  tweets: state.tweets
})

const mapDispatchToProps = dispatch => ({
  getTweets: tweets => dispatch({ type: actionTypes.GET_TWEETS, tweets }),
  createTweet: tweets => dispatch({ type: actionTypes.CREATE_TWEET, tweets }),
  deleteTweet: tweets => dispatch({ type: actionTypes.DELETE_TWEET, tweets })
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
