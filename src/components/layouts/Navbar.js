import React, { Component } from 'react'

export default class Navbar extends Component {
  
    static defaultProps = {
        title: 'Test'
    }

    render() {
    return (
      <div className='navbar bg-primary'>
        <h1>{this.props.title}</h1>
    </div>)
  }
}
