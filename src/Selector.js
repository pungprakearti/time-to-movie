import React, { Component } from 'react';

export default class Selector extends Component {
  constructor(props) {
    super(props);

    this.getSelect = this.getSelect.bind(this);
  }

  getSelect(evt) {
    this.props.select(evt.target.className);
  }

  render() {
    return (
      <div>
        {this.props.movie.map(img => {
          return (
            <div className={`Selector-img-cont`} onClick={this.getSelect}>
              <img
                src={img.image}
                alt={`${img.title} movie poster`}
                key={img.title}
                height={'200px'}
                className={img.title}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
