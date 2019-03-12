import React, { Component } from 'react'

export default class Selector extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      selected: null
    }

    this.getSelect = this.getSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  getSelect(evt) {
    this.props.select(evt.target.className)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.storeMinutes(this.state.value)
    this.setState({ value: '', selected: null })
  }

  handleChange(evt) {
    this.setState({ value: evt.target.value })
  }

  render() {
    let movie = this.props.movie
    return (
      <div className="Selector__cont">
        <div className="Selector__imgCont container-fluid">
          {Object.keys(this.props.movie).map(title => {
            return (
              <div className="Selector__img">
                <img
                  src={movie[title].image}
                  alt={`${title} movie poster`}
                  key={title}
                  height={'200px'}
                  className={title}
                  onClick={this.getSelect}
                />
              </div>
            )
          })}
        </div>
        <form name="Selector__number" onSubmit={this.handleSubmit}>
          <input
            type="number"
            name="Selector-number"
            placeholder="minutes"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button>submit</button>
        </form>
      </div>
    )
  }
}
