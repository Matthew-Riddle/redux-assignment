import React, { Component } from 'react'
import SmallContainer from './SmallContainer/SmallContainer'
import SmallContainerCss from './SmallContainer/SmallContainer.css'
import MiddleContainer from './MiddleContainer/MiddleContainer'
import RightContent from './SmallContainer/RightContent/RightContent'
import LeftContent from './SmallContainer/LeftContent/LeftContent'
class Body extends Component {
  render () {
    return (
      <div className='ContentWrap'>

        <SmallContainer classes={SmallContainerCss.LeftContainer}>
          <LeftContent />
        </SmallContainer>

        <MiddleContainer
          tweets={this.props.tweets}
          createTweet={this.props.createTweet}
          deleteTweet={this.props.deleteTweet}
        />
        <SmallContainer classes={SmallContainerCss.RightContainer}>
          <RightContent />
        </SmallContainer>

      </div>
    )
  }
}

export default Body
