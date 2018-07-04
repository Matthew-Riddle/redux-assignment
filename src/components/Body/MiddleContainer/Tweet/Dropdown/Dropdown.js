import React, { Component } from 'react'
import classes from './Dropdown.css'

class Dropdown extends Component {
  state = {
    _dropdown: false
  }
  handleDropDownClick = () =>
    this.setState({ _dropdown: !this.state._dropdown })
  render () {
    const dropdown = this.state._dropdown
    return (
      <div className={`dropdown ${dropdown ? 'is-active' : ''}`}>
        <div className='dropdown-trigger'>
          <button
            className='button'
            aria-haspopup='true'
            aria-controls='dropdown-menu'
            onClick={this.handleDropDownClick}
          >
            <span className='icon is-small'>
              <i className='fas fa-angle-down' aria-hidden='true' />
            </span>
          </button>
        </div>
        <div className='dropdown-menu' id='dropdown-menu' role='menu'>
          <div className='dropdown-content'>
            <a
              href='#'
              className='dropdown-item'
              onClick={() => {
                this.props.deleteTweet(this.props.id)
                this.setState({ _dropdown: false })
              }}
            >
              Delete
            </a>
            <a className='dropdown-item'>
              Other dropdown item
            </a>
            <a href='#' className='dropdown-item'>
              Active dropdown item
            </a>
            <a href='#' className='dropdown-item'>
              Other dropdown item
            </a>
            <hr className='dropdown-divider' />
            <a href='#' className='dropdown-item'>
              With a divider
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Dropdown
