import React, { Component } from 'react';

export default class Selector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.getSelect = this.getSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getSelect(evt) {
    this.props.select(evt.target.className);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.storeMinutes(this.state.value);
    this.setState({ value: '' });
  }

  handleChange(evt) {
    this.setState({ value: evt.target.value });
  }

  render() {
    return (
      <div className="Selector-cont">
        {this.props.movie.map(img => {
          return (
            <div className={`Selector-img-cont`}>
              <img
                src={img.image}
                alt={`${img.title} movie poster`}
                key={img.title}
                height={'200px'}
                className={img.title}
                onClick={this.getSelect}
              />
            </div>
          );
        })}
        <form name="Selector-number" onSubmit={this.handleSubmit}>
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
    );
  }
}
