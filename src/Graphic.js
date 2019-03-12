import React, { Component } from 'react'

export default class Graphic extends Component {
  render() {
    console.log(this.props)
    return <div className="graphic__cont">Graphic</div>
  }
}
